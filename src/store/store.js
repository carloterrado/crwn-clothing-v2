import { compose, applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root.reducer";

const middlewares = [logger];

const combinedMiddlewares = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, combinedMiddlewares);
