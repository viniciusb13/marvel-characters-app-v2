import { combineReducers } from 'redux';
import CharacterListReducer from './CharacterListReducer';
import CharacterSearchReducer from './CharacterSearchReducer';
import CharacterMultipleReducer from './CharacterMultipleReducer';

const RootReducer = combineReducers({
	CharacterList: CharacterListReducer,
	CharacterSearch: CharacterSearchReducer,
	Character: CharacterMultipleReducer
});

export default RootReducer;