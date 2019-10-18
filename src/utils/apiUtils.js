import axios from 'axios';

const apiUrl = 'https://swapi.co/api/people/'

const getPage = async url => {
	let response = {};

	try {
		const pageRes = await axios.get(url);
		response = {
			success: true,
			data: pageRes.data,
		};
	}
	catch (error) {
		response = {
			success: false,
			error: error.message,
		};
	}
	finally {
		return response;
	}
}

const getQuery = async query => {
	let response = {};

	try {
		const queryRes = await axios.get(`${apiUrl}?search=${query}`);
		response = {
			success: true,
			data: queryRes.data,
		};
	}
	catch (error) {
		response = {
			success: false,
			error: error.message,
		};
	}
	finally {
		return response;
	}
}

export { getQuery, getPage };
