import axios from 'axios';
import md5 from 'md5';

// const publicKey = '76e9ffb94813ed1d8c732093e3f228f2'; // Conta marvel 1
const publicKey = '0f3a7dba12315b756ad6676c5db518da'; // Conta marvel 2

// const privateKey = '3224b4583ea3f687aa679fb0c270a0c0c75c3052'; // Conta marvel 1
const privateKey = '438c89fd171a3a5a7e6e1867c3aef1f77b323d75'; // Conta marvel 2

const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

export const GetCharacterList = (page) => async dispatch => {
	
	try {
		dispatch({
			type: 'CHARACTER_LIST_LOADING'
		});


		const limit = 20;
		const offset = (page * limit) - limit;

		const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
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

		const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)

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
