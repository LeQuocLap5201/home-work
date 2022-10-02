import { Statistic } from "antd";
import React from "react";
import { useSelector } from "./redux/hooks";

export default function Count2() {
  const state = useSelector((state) => state.count2);

  console.log("render-count2: ", state);

  return <Statistic style={{ width: 110 }} title="Count2" value={state} />;
}
