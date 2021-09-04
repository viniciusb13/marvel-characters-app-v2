import { createStore } from "redux";
import { persistStore, persistReducer  } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const persistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['CharacterList'],
	whitelist: ['Character']

}

const persistedReducer = persistReducer(persistConfig, RootReducer)

const Store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(Store)

export { Store, persistor };