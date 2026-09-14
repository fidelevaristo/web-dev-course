import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";
import usersReducer from "./usersSlice";
import { delayMiddleware, loggingMiddleware } from "./middlewares";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware, delayMiddleware),
});

store.subscribe(() => {
  console.log("Store updated:", store.getState());
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;