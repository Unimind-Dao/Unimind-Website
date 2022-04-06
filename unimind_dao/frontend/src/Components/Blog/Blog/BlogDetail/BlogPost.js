import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const slug = props.match.params.id;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/${slug}`
        );
        setBlog(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id]);

  const createBlog = () => {
    return { __html: blog.content };
  };

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  return (
		<>
			<div className='container mt-3'>
				<h1 className='display-2'>{blog.title}</h1>
				<h2 className='text-muted mt-3'>
					Category: {capitalizeFirstLetter(blog.category)}
				</h2>
				<h4>
					{blog.month} {blog.day}
				</h4>
				<div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
				<hr />
				<p className='lead mb-5'>
					<Link to='/news' className='font-weight-bold'>
						Back to Blogs
					</Link>
				</p>
			</div>
			<div className='progress'>
				<div
					className='progress-bar w-75'
					role='progressbar'
					aria-valuenow='75'
					aria-valuemin='0'
					aria-valuemax='100'
				></div>
			</div>
		</>
	);
};

export default BlogDetail;
