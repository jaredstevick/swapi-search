import React from 'react';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
 	return (
		<div className="loading">
			<Animated
				animationIn='slideInRight'
				isVisible={true}
				animationInDelay={200}
				animationInDuration={800}
			>
				<FontAwesomeIcon
					icon={faSpinner}
					spin
					fixedWidth
					className="icon"
				/>
				<span className="loading-text">Searching the galaxy...</span>
			</Animated>
		</div>
	);
}

export default Loading;
