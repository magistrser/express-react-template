import * as React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { loadingHoverSelectors } from "@store/LoadingHover";
import { CircularProgress } from "@mui/material";

export const LoadingHover: React.FC = () => {
  const isHoverShowing = useSelector(loadingHoverSelectors.isHoverShowing);

  return isHoverShowing ? (
    <HoverWrapper>
      <Hover>
        <CircularProgress />
      </Hover>
    </HoverWrapper>
  ) : null;
};

const HoverWrapper = styled.div`
  position: relative;
  height: 0;
`;

const Hover = styled.div`
  position: absolute;
  z-index: 999999;

  background: white;
  opacity: 0.5;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
