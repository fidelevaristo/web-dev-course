import type { Middleware } from "@reduxjs/toolkit";

export const loggingMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  console.log("Previous state:", store.getState());

  const result = next(action);

  console.log("Next state:", store.getState());

  return result;
};

export const delayMiddleware: Middleware = () => (next) => (action) => {
  if (
    typeof action === "object" &&
    action !== null &&
    "meta" in action &&
    typeof action.meta === "object" &&
    action.meta !== null &&
    "delay" in action.meta &&
    typeof action.meta.delay === "number"
  ) {
    setTimeout(() => {
      next(action);
    }, action.meta.delay);

    return;
  }

  return next(action);
};