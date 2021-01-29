import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { phBookRedusers } from "./redusers/phBookRedusers";

const rootReducer = combineReducers({ contacts: phBookRedusers });

const persistConfig = {
  key: "myContacts",
  storage,
  whitelist: ["contacts"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
