import React from 'react';
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const [blogs , error , isPending] = useFetch(`http://localhost:3004/blogs/${id}`)
    const history = useHistory();
    const handleDelete = (id) => {
        fetch(`http://localhost:3004/blogs/${id}` , {
            method: "delete"
        } )
        history.push('/')
    }

    return ( 
        <div className="blog-details">
            {error && <div className="error"> { error } </div>}
            {isPending && <div className='wait'>fetching data from the server. please wait...</div>}
            {blogs && 
            <div className='blog-list'>

                <div className= "blog-list" key={blogs.id}>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.body}</p>
                    <p>written by: {blogs.author}</p>
                </div>
                <button onClick={()=>handleDelete(blogs.id)}>Delete Blog</button>
           
            </div>
            } 
        </div>
     );
}
 
export default BlogDetails;