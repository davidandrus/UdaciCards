import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();

import reducer from "./reducers/root";

export default createStore(reducer, applyMiddleware(logger));
