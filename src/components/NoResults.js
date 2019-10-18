import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NoResults = error => {
	return (
		<div className="item">
			<div className="summary">
				<div className="icon">
					<FontAwesomeIcon icon={faExclamationTriangle} fixedWidth />
				</div>
				{error.length ? (
					<div className="main not-found">{error.error}</div>
				) : (
					<div className="main not-found">We couldn't find the droids you were looking for.</div>
				)}
			</div>
			<div className="bio">
				<div>Please try a different search query.</div>
			</div>
		</div>
	);
}

export default NoResults;
