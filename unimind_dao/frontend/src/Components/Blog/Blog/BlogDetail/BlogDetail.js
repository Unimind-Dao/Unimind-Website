import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import ReadingBar from './ProgressBar';
const BlogDetail = (props) => {
	const [blog, setBlog] = useState({});

	useEffect(() => {
		AOS.init({ once: true, duration: 700 });
		const slug = props.match.params.id;
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`https://www.unimind.website/api/blog/${slug}`
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
		return '';
	};
	console.log('blog', blog.content);

	return (
		<>
			<ReadingBar />
			<section className='BlogDetail'>
				<div className='BlogDetail__backContainer'>
					<Link to='/news' className='font-weight-bold BlogDetail__back'>
						Back to Blogs
					</Link>
				</div>
				<div className='container mt-3 BlogDetail__margin'>
					<div className='BlogDetail__head'>
						<div className='display-2 BlogDetail__title'>
							<h1 className='BlogDetail__titleBlog'>
								Sint proident eu eu ipsum commodo adipisicing
							</h1>
						</div>
						<div className='BlogDetail__time'>
							<p>
								{blog.month}/{blog.day}
							</p>
						</div>
						<div className='BlogDetail__boxTimeCategory'>
							<div>
								<p className='BlogDetail__category'>
									{capitalizeFirstLetter(blog.category)}
								</p>
							</div>
						</div>
						<hr />
					</div>
					<div className='BlogDetail__photo'>
						<img
							className='BlogDetail__img'
							alt='thumbnail'
							src={blog.thumbnail}
						></img>
					</div>
					<div className='BlogDetail__text'>
						<p>{blog.excerpt}</p>
					</div>
					<div
						className='BlogDetail__text'
						dangerouslySetInnerHTML={createBlog()}
					/>
					{/* <div className='BlogDetail__text'>
					</div> */}
					<p className='lead mb-5'></p>
				</div>
			</section>
		</>
	);
};

export default BlogDetail;
