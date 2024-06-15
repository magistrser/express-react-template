import { createSlice } from "@reduxjs/toolkit";
import { StoreType } from "./index";

interface LoadingHoverState {
  show: boolean;
}

const loadingHoverState: LoadingHoverState = {
  show: false,
};

export const loadingHoverSlice = createSlice({
  name: "loadingHover",
  initialState: loadingHoverState,
  reducers: {
    showLoadingHover: (state) => {
      state.show = true;
    },
    hideLoadingHover: (state) => {
      state.show = false;
    },
  },
});

export const loadingHoverActions = loadingHoverSlice.actions;
export const loadingHoverSelectors = {
  isHoverShowing: (state: StoreType): boolean => state.loadingHover.show,
};
