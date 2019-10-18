import React, { useState, useEffect } from 'react';
import { getQuery, getPage } from '../utils/apiUtils';
import Search from '../components/Search';
import Results from '../components/Results';
import NoResults from '../components/NoResults';
import Pagination from '../components/Pagination';

const App = () => {
	const [ page, setPage ] = useState(1);
	const [ query, setQuery ] = useState('');
	const [ error, setError ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ data, setData ] = useState({ results: [], page: 1 });
	const [ sortOrder, setSortOrder ] = useState();

	useEffect(() => {
		getQuery('').then(initialResult => {
			setIsLoading(false);
			console.log('initialResult', initialResult)
			initialResult.success ? setData(initialResult.data) : setError(initialResult.error);
		})
		.catch(err => {
			setError(err.error);
		});
	}, []);

	const getNeighboringPage = async desiredPage => {
		setSortOrder("");
		setIsLoading(true);
		const pageResult = await getPage(desiredPage === 'next' ? data.next : data.previous);

		if (pageResult.success) {
			setData(pageResult.data);
			setIsLoading(false);
			setPage(desiredPage === 'next' ? page + 1 : page - 1);
		} else {
			setError(pageResult.error);
			setIsLoading(false);
		}
	}

	const getUsers = async () => {
		setSortOrder("");
		setIsLoading(true);
		setPage(1);
		const usersResult = await getQuery(query);

		if (usersResult.success) {
			setIsLoading(false);
			setData(usersResult.data);
		} else {
			setIsLoading(false);
			setError(usersResult.error);
		}
	}

	const getPageStart = () => {
		if (page !== 1 && data.results.length === 10) {
			return ((page - 1) * data.results.length) + 1;
		} else if (page !== 1) {
			return ((page - 1) * 10) + 1
		} else {
			return 1;
		}
	}

	const getPageEnd = () => {
		if (data.results.length === 10) {
			return (((page - 1) * data.results.length) + 1) + (data.results.length -1);
		} else {
			return data.count;
		}
	}

	const handleSort = val => {
		if (val === "az") {
			setSortOrder("az");
			const aToZ = data.results.sort((a, b) => {
				return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
			});
			setData({ ...data, results: aToZ });
		} else {
			setSortOrder("za");
			const zToA = data.results.sort((a, b) => {
				return (b.name < a.name) ? -1 : (b.name > a.name) ? 1 : 0;
			});
			setData({ ...data, results: zToA });
		}
	}

	return (
		<div className="app">
			<header>
				<Search
					setSearch={val => setQuery(val)}
					order={sortOrder}
					setOrder={val => handleSort(val)}
					submit={getUsers}
				/>
			</header>
			<main>
				{error ? (
					<NoResults error={error} />
				): (
					<div>
						<div className="total">
							{data.count ? `${getPageStart()}-${getPageEnd()} of ${data.count} ${data.count === 1 ? 'Result' : 'Results'}` : ''}
						</div>
						<Results
							data={data.results}
							loading={isLoading}
						/>
						{data.results.length ? (
							<Pagination
								data={data}
								getNeighbor={direction => getNeighboringPage(direction)}
							/>
						) : null}
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
