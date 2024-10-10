import React from "react";

const app = ({ params: { app } }: { params: { app: string } }) => {
  return <div>{app}</div>;
};

export default app;
