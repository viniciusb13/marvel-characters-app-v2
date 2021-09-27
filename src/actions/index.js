import axios from 'axios';

const publicKey = '0f3a7dba12315b756ad6676c5db518da';

const hash = 'ed75e3da52cdaf7a4b454b3e2ce197c6';


export const GetCharacterList = (page) => async dispatch => {
	
	try {
		dispatch({
			type: 'CHARACTER_LIST_LOADING'
		});


		const limit = 20;
		const offset = (page * limit) - limit;

		const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=1&apikey=${publicKey}&hash=${hash}`)
		dispatch({
			type: 'CHARACTER_LIST_SUCCESS',
			payload: res.data.data
		});
	} catch (e) {
		dispatch({
			type: 'CHARACTER_LIST_FAIL'
		});
	}
}

export const GetCharacter = (id) => async dispatch => {
	try {
		dispatch({
			type: 'CHARACTER_MULTIPLE_LOADING'
		});

		const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${publicKey}&hash=${hash}`)

		dispatch({
			type: 'CHARACTER_MULTIPLE_SUCCESS',
			payload: res.data.data,
			characterId: id,
		})
		
	} catch (e) {
		dispatch({
			type: 'CHARACTER_MULTIPLE_FAIL',
		})
	}
}

export const GetCharacterSearch = (searchTerm, page) => async dispatch => {
	try {
		dispatch({
			type: 'CHARACTER_SEARCH_LOADING'
		});

		const limit = 20;
		const offset = (page * limit) - limit;

		const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&limit=${limit}&offset=${offset}&ts=1&apikey=${publicKey}&hash=${hash}`)

		dispatch({
			type: 'CHARACTER_SEARCH_SUCCESS',
			payload: res.data.data
		})
	} catch (e) {
		dispatch({
			type: 'CHARACTER_SEARCH_FAIL'
		})
	}
}