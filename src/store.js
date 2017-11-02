import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

import rootReducer from "./reducers/root";

const config = {
  key: "root",
  storage
};

const reducer = persistReducer(config, rootReducer);
const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));
const persistor = persistStore(store);

export { store, persistor };
