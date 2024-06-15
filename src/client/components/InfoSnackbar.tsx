import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  infoSnackbarActions,
  infoSnackbarSelectors,
} from "@store/InfoSncakbar";
import { Toolbar } from "@mui/material";

export const InfoSnackbar: React.FC = () => {
  const dispatch = useDispatch();
  const infoSnackbarData = useSelector(
    infoSnackbarSelectors.getInfoSnackbarData,
  );

  const handleClose = (): void => {
    dispatch(infoSnackbarActions.hideInfoSnackbar());
  };

  return infoSnackbarData.show ? (
    <PositionWrapper>
      <Toolbar />
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={infoSnackbarData.type}
        onClose={handleClose}
        sx={{
          mt: "10px",
          width: "300px",
        }}
      >
        {infoSnackbarData.message}
      </MuiAlert>
    </PositionWrapper>
  ) : null;
};

const PositionWrapper = styled.div`
  position: absolute;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 10000;
`;
