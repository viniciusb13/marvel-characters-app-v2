import { combineReducers } from 'redux';
import CharacterListReducer from './CharacterListReducer';
import CharacterMultipleReducer from './CharacterMultipleReducer';

const RootReducer = combineReducers({
	CharacterList: CharacterListReducer,
	Character: CharacterMultipleReducer
});

export default RootReducer;