import {Link} from 'react-router-dom'

const BlogList = ({blogs }) => {
    return ( 
        <div className='blog-list'>
            {blogs.map(blog => {
                return (
                    <div className= "blog-preview" key={blog.id}>
                        <h2><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h2>
                        <p>written by: {blog.author}</p>
                    </div>)
            })}
          
        </div>
     );
}
 
export default BlogList;