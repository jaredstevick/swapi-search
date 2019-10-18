import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faQuestion,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import NoResults from './NoResults';

const buildUserIcon = speciesUrl => {
	const parsed = speciesUrl.split("/");
	const type = parsed[parsed.length - 2];

	switch (type) {
		case '1':
			return	<FontAwesomeIcon icon={faUserCircle} fixedWidth />;
		case '2':
			return	<FontAwesomeIcon icon={faAndroid} fixedWidth />;
		default:
			return <FontAwesomeIcon icon={faQuestion} fixedWidth />;
	}
}

const Item = ({ data }) => {
	return (
		data ? (
			<div className="item">
				<div className="summary">
					<div className="icon">
						{buildUserIcon(data.species.length ? data.species[0] : '')}
					</div>
					<div className="main">{data.name}</div>
				</div>
				<div className="bio">
					<div>Height: {data.height}</div>
					<div className="divider">&#x25A0;</div>
					<div>Mass: {data.mass}</div>
					<div className="divider">&#x25A0;</div>
					<div>Gender: {data.gender}</div>
				</div>
			</div>
		) : (
			<NoResults />
		)
	);
}

export default Item;
