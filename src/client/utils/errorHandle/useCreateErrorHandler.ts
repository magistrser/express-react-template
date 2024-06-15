import { Dispatch } from "@reduxjs/toolkit";
import { useCallback } from "react";
import {
  infoSnackbarActions,
  InfoSnackbarType,
} from "../../store/InfoSncakbar";

export function useCreateErrorHandler(
  dispatch: Dispatch,
): (error: Error) => void {
  return useCallback(
    (error: Error): void => {
      dispatch(
        infoSnackbarActions.showInfoSnackbar({
          type: InfoSnackbarType.Error,
          message: error.toString(),
        }),
      );
      console.error(error.toString());
    },
    [dispatch],
  );
}
