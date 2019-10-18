import React from 'react';

const Pagination = ({ data, getNeighbor }) => {
	return (
		<div className="pagination">
			<div
				className={`prev ${data.previous ? 'active' : 'inactive'}`}
				onClick={() => getNeighbor('prev')}
			>
				Prev
			</div>
			<div
				className={`next ${data.next ? 'active' : 'inactive'}`}
				onClick={() => getNeighbor('next')}
			>
				Next
			</div>
		</div>
	);
}

export default Pagination;
