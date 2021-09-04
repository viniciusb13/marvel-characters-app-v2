const DefaultState = {
	loading: false,
	data: [],
	errorMsg: "",
	count: 0
};

const CharacterListReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case 'CHARACTER_LIST_LOADING':
			return {
				...state,
				loading: true,
				errorMsg: ""
			};
		case 'CHARACTER_LIST_FAIL':
			return {
				...state,
				loading: false,
				errorMsg: "Não foi possível encontrar nenhum personagem"
			};
		case 'CHARACTER_LIST_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload.results,
				errorMsg: "",
				count: action.payload.count
			};
		default:
			return state
	}
};

export default CharacterListReducer;