import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { phBookRedusers } from "./redusers/phBookRedusers";

const rootReducer = combineReducers({ contacts: phBookRedusers });

const persistConfig = {
  key: "myContacts",
  storage,
  whitelist: ["contacts"],
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools()
);

const persistor = persistStore(store);

export { store, persistor };
