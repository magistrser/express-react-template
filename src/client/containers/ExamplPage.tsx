import { useGetExampleDataQuery } from "@client/api/common/useGetExampleDataQuery";
import { LoadingHover } from "@client/components/LoadingHover";
import { useCreateErrorHandler } from "@client/utils/errorHandle/useCreateErrorHandler";
import * as React from "react";
import { useDispatch } from "react-redux";

export const ExamplPage: React.FC = () => {
  const dispatch = useDispatch();
  const handleError = useCreateErrorHandler(dispatch);
  const exampleData = useGetExampleDataQuery({
    onError: handleError,
  });

  if (exampleData.isLoading) {
    return <LoadingHover />;
  }

  return <div>{exampleData.data?.result}</div>;
};
