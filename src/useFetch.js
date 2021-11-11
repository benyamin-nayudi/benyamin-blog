import {useEffect ,  useState } from 'react';



const useFetch =(url)=>{
    const [blogs , setBlogs] = useState(null)
    const [isPending , setIsPending]= useState(true)
    const [error , setError] = useState(null)
    
    useEffect(  ()=>{

        const controller = new AbortController();
        const signal = controller.signal;
        
        setTimeout(async()=>{
            
            try{
                const res =await fetch( url , { signal });
                if(!res.ok){
                    throw new Error(" couldn't fetch the data ... ")
                }
                const data =await res.json()
                setError(false)
                setIsPending(false)
                setBlogs(data)
            }catch(err){
                if(err.name === "AbortError" ){
                    console.log( 'fetch aborted') 
                }else{
                    setIsPending(false)
                    setError(err.message) 
                }
            }
            
        } , 300)
        return ()=> controller.abort()
    }, [url]);
    
    return [blogs , error , isPending]
}
export default useFetch