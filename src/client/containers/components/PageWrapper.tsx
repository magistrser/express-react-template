import * as React from "react";
import { CircularProgress } from "@mui/material";

interface Props {
  isLoading?: boolean;
  isError?: boolean;
}

export const PageWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  isLoading,
  isError,
  children,
}) => {
  if (isError) {
    return <></>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return <>{children}</>;
};
