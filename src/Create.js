import { useState } from 'react';
import { useHistory } from 'react-router-dom'
const Create = () => {
    const [title , setTitle ] = useState(null)
    const [body , setBody ] = useState(null)
    const [author , setAuthor ] = useState("dani")
    const history = useHistory()
    console.log(history)

    const handleSubmit =(e)=>{
        e.preventDefault();
        fetch("http://localhost:3004/blogs" , {
            method: 'POST' , 
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({title , author , body})
        })

        // history.go(-1)
        history.push('/')

    }


    return ( 

        <div className="create">
            <form onSubmit={handleSubmit}>
                <label > blog title: </label>
                <input 
                    type = "text" 
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label > blog body:</label>
                <textarea 
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>

                <label>author:</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="beny">beny</option>
                    <option value="dani">dani</option>
                    <option value="ali">ali</option>
                </select>

                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;