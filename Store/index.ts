import { configureStore } from "@reduxjs/toolkit";
import restoData from "./Resto/Slice";
import cart from "./Cart/Slice";
import { loadState } from "./browser-storage";

export const store = configureStore({
  reducer: {
    restoData: restoData,
    cart: cart,
  },
  preloadedState: loadState(),

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
