import React from 'react';
import '../styles/MadeBy.scss';

const MadeBy = () => {
	return (
		<div className="made-by text-dark text-left mr-3">
			<p className="m-0">
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
