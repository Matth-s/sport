import React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="h-full w-4/6 bg-green-400 p-4">{children}</div>;
};

export default MainContainer;
