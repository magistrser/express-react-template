import { Dispatch } from "@reduxjs/toolkit";
import { useCallback } from "react";
import {
  infoSnackbarActions,
  InfoSnackbarType,
} from "../../store/InfoSncakbar";

export function useSuccessSnackbar(
  dispatch: Dispatch,
): (message: string) => void {
  return useCallback(
    (message: string): void => {
      dispatch(
        infoSnackbarActions.showInfoSnackbar({
          type: InfoSnackbarType.Success,
          message,
        }),
      );
    },
    [dispatch],
  );
}
