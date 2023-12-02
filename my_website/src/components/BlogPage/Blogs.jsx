import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Blog from './Blog'
export default function Blogs() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = React.useState([]);

    const fetchBlogs = () => {
        const httpRequest = new XMLHttpRequest()

        // the response
        httpRequest.onreadystatechange = () => {
            if (httpRequest.status === 200 && httpRequest.readyState === 4) {
                setBlogs(JSON.parse(httpRequest.responseText));
                console.log(blogs);
            }
        }
        // make a get reqest to a django route
        httpRequest.open('GET', `https://davidddeveloper.pythonanywhere.com/api/blogs`, true)
        httpRequest.send()
    }

    fetchBlogs();

    const handleBlogClick = (blog) => {
        navigate(`/blogs/${encodeURIComponent(blog.title)}`);
    };
    
    

    return (
        <div className='bg-darkBlue'>
            <p>My blog</p>
            {
                <ul>
                    {
                        blogs.map((blog, index) => (
                            <li key={index}>
                                <Link to={`/blogs/${encodeURIComponent(blog.title)}`} onClick={() => handleBlogClick(blog)}>
                                    {blog.title} 
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            }

        </div>
    )
}