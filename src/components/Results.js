import React from 'react';
import { Animated } from 'react-animated-css';
import Item from './Item';
import Loading from './Loading';

const Results = props => {
	return (
		<div className="results">
			{props.loading ? (
				<Loading />
			) : (
				<Animated
					animationIn='slideInRight'
					isVisible={true}
					animationInDelay={200}
					animationInDuration={800}
				>
				<div className="list">
					{props.data.length === 0 ? (
						<Item data={null} />
					) : (
						props.data.map(dataItem => (
							<Item
								key={dataItem.name}
								data={dataItem}
							/>
						))
					)}
				</div>
				</Animated>
			)}
		</div>
	);
}

export default Results;
