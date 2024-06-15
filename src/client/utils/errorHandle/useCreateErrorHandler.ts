import {Dispatch} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {infoSnackbarActions, InfoSnackbarType} from '../../store/InfoSncakbar';

export function useCreateErrorHandler(dispatch: Dispatch) {
  return useCallback((error: Error) => {
    dispatch(infoSnackbarActions.showInfoSnackbar({type: InfoSnackbarType.Error, message: error.toString()}));
    console.error(error.toString());
  }, [dispatch]);
}
