import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreType} from './index';

export enum InfoSnackbarType {
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Error = 'error',
}

export interface InfoSnackbarData {
  message: string,
  type: InfoSnackbarType,
}

export interface InfoSnackbarState extends InfoSnackbarData {
  show: boolean,
}

const infoSnackbarState: InfoSnackbarState = {
  show: false,
  message: '',
  type: InfoSnackbarType.Success,
};

export const infoSnackbarSlice = createSlice({
  name: 'infoSnackbar',
  initialState: infoSnackbarState,
  reducers: {
    showInfoSnackbar: (state, action: PayloadAction<InfoSnackbarData>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.show = true;
    },
    hideInfoSnackbar: (state) => {
      state.show = false;
    },
  },
});

export const infoSnackbarActions = infoSnackbarSlice.actions;
export const infoSnackbarSelectors = {
  getInfoSnackbarData: (state: StoreType): InfoSnackbarState => state.infoSnackbar,
};
