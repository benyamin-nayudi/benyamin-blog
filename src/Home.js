import useFetch from "./useFetch"
import BlogList from "./BlogList";

const  Home= () => {
 
  

const [blogs , error , isPending] = useFetch("http://localhost:3004/blogs")


    

 
    return ( 
        <div className="home">
            <h2>home page</h2>
            {error && <div className="error"> { error } </div>}
            {isPending && <div className='wait'>fetching data from the server. please wait...</div>}
            {blogs && <BlogList blogs = {blogs} />}            
           
            
        </div>
     );
}
 
export default Home;