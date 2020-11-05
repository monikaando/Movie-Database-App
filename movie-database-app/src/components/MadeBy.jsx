import React from 'react';
import '../styles/MadeBy.scss';

const MadeBy = () => {
	return (
		<div className="made-by text-dark fixed-bottom text-center mr-3">
			<p className="p-2 m-0">
				Created by{' '}
				<a
					href="https://monikaswidzinska.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-dark"
				>
					Monika Swidzinska
				</a>
			</p>
		</div>
	);
};

export default MadeBy;
