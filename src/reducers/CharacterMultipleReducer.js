const DefaultState = {
	loading: false,
	data: {},
	errorMsg: ""
};

const CharacterMultipleReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case 'CHARACTER_MULTIPLE_LOADING':
			return {
				...state,
				loading: true,
				errorMsg: ""
			};
		case 'CHARACTER_MULITPLE_FAIL':
			return {
				...state,
				loading: false,
				errorMsg: "Não foi possível localizar personagem"
			};
		case 'CHARACTER_MULTIPLE_SUCCESS':	
			return {
				...state,
				loading: false,
				data: {
					...state.data,
					[action.characterId]: action.payload,
				},
				errorMsg: ""
			}
		default:
			return state
	}
};

export default CharacterMultipleReducer;