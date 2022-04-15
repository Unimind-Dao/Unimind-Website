import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import ScrollToTop from '../../../Utilities/ScroolToTop';

const BlogDetail = (props) => {
	const [blog, setBlog] = useState({});

	useEffect(() => {
		AOS.init({ once: true, duration: 700 });
		const slug = props.match.params.id;
		const fetchData = async () => {
			try {
				const res = await axios.get(`https://www.unimind.website/api/blog/${slug}`);
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
	console.log('blog', blog);

	return (
		<>
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
						<p>
							Ipsum anim est ut eiusmod est esse ea labore mollit pariatur ipsum
							fugiat. Excepteur mollit magna dolor deserunt dolore non magna
							fugiat eiusmod. Labore esse nostrud tempor voluptate eu minim
							dolor voluptate nisi et veniam culpa. Nulla laboris laboris elit
							dolor voluptate anim consequat Lorem esse esse non officia id. Non
							proident do ad ipsum culpa laboris consectetur est cupidatat sit
							ex veniam. Deserunt magna duis ex anim laborum laborum velit sint
							cillum adipisicing dolore incididunt. Sint laborum duis magna ea
							exercitation. Aliqua duis dolor dolore voluptate velit
							reprehenderit ad veniam non adipisicing anim nostrud. Excepteur ex
							fugiat dolor in ad deserunt laboris ex. Reprehenderit veniam ex
							minim est tempor commodo ipsum. Sit labore non reprehenderit
							excepteur aliqua laborum. Ipsum adipisicing elit laborum eu
							voluptate aliquip eiusmod ad nostrud sint et commodo veniam. Dolor
							et consequat ipsum sint irure proident eu commodo tempor. Occaecat
							do laborum exercitation quis pariatur ex nulla. Consectetur ut
							ipsum ea laboris tempor quis ut. Adipisicing reprehenderit in
							laboris velit adipisicing qui proident ad ea cillum consequat
							officia pariatur eiusmod. Non consectetur nisi sint magna ad
							veniam in fugiat Lorem laboris. Aliqua officia elit ullamco velit
							culpa aliqua commodo nisi occaecat excepteur pariatur deserunt. Eu
							incididunt minim culpa magna est eu. Adipisicing nostrud enim
							magna esse culpa sint culpa deserunt anim ad deserunt consectetur
							sunt. Cillum magna culpa fugiat commodo sint pariatur ad aute in
							aliquip irure commodo nisi Lorem. Nisi veniam laboris commodo
							incididunt eu excepteur consequat aute eiusmod consectetur. Duis
							id ullamco qui et in dolore fugiat exercitation consequat culpa
							dolor. Magna duis veniam enim qui aute ea ullamco aliquip. Aliquip
							commodo qui laboris deserunt adipisicing sit. Sint exercitation
							adipisicing sit nulla. Anim Lorem non labore nisi ea anim officia.
							Velit sint enim ad culpa ad Lorem non qui labore in. Magna ex
							consequat deserunt aute eu in id tempor ad exercitation ea dolor.
							Esse anim laboris sit culpa ea enim qui magna duis nostrud anim
							proident do. Incididunt anim anim ipsum veniam fugiat incididunt
							aliqua amet fugiat laboris dolore. Et minim eiusmod aute minim qui
							anim Lorem in ad eu. Laborum occaecat laborum do fugiat veniam
							Lorem elit excepteur commodo anim elit dolore excepteur. Nulla est
							est Lorem reprehenderit. Enim sit et fugiat sit voluptate velit
							elit sint id do duis non. Lorem nisi enim consectetur pariatur.
							Proident deserunt velit duis proident tempor. Sunt excepteur ex
							cillum pariatur. Adipisicing magna do est laborum quis duis est
							amet Lorem deserunt nisi occaecat id sunt. Ullamco labore
							consequat aliqua cillum pariatur ad aliquip do elit irure quis qui
							pariatur. Ullamco sint aute exercitation occaecat nulla labore
							nulla cupidatat laborum Lorem minim excepteur. Ea veniam in sit
							sint officia ea nostrud ipsum commodo adipisicing mollit quis
							occaecat pariatur. Est aliquip incididunt in nostrud aliqua enim
							officia nulla est in aliqua ut. Nisi amet cillum elit anim ut
							laboris mollit amet enim id magna. Aliqua dolor exercitation sint
							nisi reprehenderit tempor excepteur enim ex. In do aliquip et
							commodo. Ex est nulla sint anim excepteur laboris nostrud.
							Excepteur officia commodo veniam adipisicing qui elit minim.
							Aliqua dolor dolor dolor commodo. Amet minim esse anim ad ullamco
							aliqua excepteur cupidatat minim do ullamco et anim. Adipisicing
							consectetur amet consectetur commodo duis amet esse adipisicing
							minim incididunt aliqua mollit est. Qui aliquip eu fugiat ex qui
							laborum incididunt elit est.
						</p>
					</div>
					<div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
					<p className='lead mb-5'></p>
				</div>
			</section>
		</>
	);
};

export default BlogDetail;
