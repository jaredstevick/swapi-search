import React from 'react';

const Search = props => {

	const handleSort = order => {
		if (order !== "") {
			props.setOrder(order);
		}
	}

	const handleSubmit = e => {
		e.preventDefault();
		props.submit();
	}

	return (
		<div className="search">
			<form onSubmit={e => handleSubmit(e)}>
				<div>
					<input
						type="text"
						onChange={e => props.setSearch(e.target.value.toLowerCase())}
						placeholder="Search..."
					/>
				</div>
				<div className="select-wrapper">
					<select
						onChange={e => handleSort(e.target.value)}
						value={props.order}
					>
						<option value="">Sort Results...</option>
						<option value="az">A-Z</option>
						<option value="za">Z-A</option>
					</select>
				</div>
			</form>
		</div>
	);
}

export default Search;
