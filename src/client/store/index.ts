import { configureStore } from "@reduxjs/toolkit";
import { infoSnackbarSlice } from "./InfoSncakbar";
import { loadingHoverSlice } from "./LoadingHover";

const index = configureStore({
  reducer: {
    infoSnackbar: infoSnackbarSlice.reducer,
    loadingHover: loadingHoverSlice.reducer,
  },
});

export type StoreType = ReturnType<typeof index.getState>;

export default index;
