import ContentWrapper from "@/components/common/ContentWrapper";
import { Navigate } from "react-router-dom";
import { useCountdown } from "@/hooks/useCountdown";

export const DinerNotFound = () => {
  // countdown start at 3 and my hooks execute the logic
  const seconds = useCountdown(3);

  //  Check the value of seconds after the component has been mount and navigate
  if (seconds === 0) {
    return <Navigate to="/diner" replace />;
  }

  return (
    <ContentWrapper>
      <h1 className="text-center text-2xl font-bold text-red-500">404 - No page found</h1>
      <p className="mt-2 text-center">
        You will be redirected to your dashboard in <span className="font-semibold">{seconds}</span>{" "}
        seconds.
      </p>
    </ContentWrapper>
  );
};


