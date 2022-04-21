import { useState, useEffect } from 'react';
import Bar from './ProgressBar.scss';

function ReadingBar() {
	const [width, setWidth] = useState(0);
	const scrollHeight = () => {
		var el = document.documentElement,
			ScrollTop = el.scrollTop || document.body.scrollTop,
			ScrollHeight = el.scrollHeight || document.body.scrollHeight;
		var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;

		setWidth(percent);
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollHeight);
		return () => window.removeEventListener('scroll', scrollHeight);
	});

	return (
		<div className>
			<div className='Bar__Progress' style={{ width: width + '%' }}></div>
		</div>
	);
}

export default ReadingBar;
