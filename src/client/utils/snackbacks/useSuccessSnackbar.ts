import {Dispatch} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {infoSnackbarActions, InfoSnackbarType} from '../../store/InfoSncakbar';

export function useSuccessSnackbar(dispatch: Dispatch) {
  return useCallback((message: string) => {
    dispatch(infoSnackbarActions.showInfoSnackbar({type: InfoSnackbarType.Success, message}));
  }, [dispatch]);
}
