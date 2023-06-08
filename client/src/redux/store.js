import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
const stripe = require("stripe")(
   "sk_test_51MkrFtFVdPT8iFZd0CKu4pEZTfM5HYgfjYypbJovWJAi2W3dQXYwb20Qc37tgTTR0o3SA9BnmWfEiO8YCh8m6AP700XvdWwn9Z"
);

const persistConfig = {
   key: "root",
   version: 1,
   storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
   reducer: {
      cart: persistedReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export let persistor = persistStore(store);
