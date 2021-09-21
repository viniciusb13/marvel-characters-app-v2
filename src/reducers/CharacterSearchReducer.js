const DefaultState = {
	loading: false,
	data: [],
	errorMsg: "",
	count: 0
};

const CharacterSearchReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case 'CHARACTER_SEARCH_LOADING':
			return {
				...state,
				loading: true,
				errorMsg: ""
			};
		case 'CHARACTER_SEARCH_FAIL':
			return {
				...state,
				loading: false,
				errorMsg: "Não foi possível encontrar nenhum personagem"
			};
		case 'CHARACTER_SEARCH_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload.results,
				errorMsg: "",
				total: action.payload.total
			};
		default:
			return state
	}
};

export default CharacterSearchReducer;