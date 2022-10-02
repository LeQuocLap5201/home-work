import { Statistic } from "antd";
import React from "react";
import { useSelector } from "./redux/hooks";

export default function Count1() {
  const state = useSelector((state) => state.count1);

  console.log("render-count1: ", state);

  return <Statistic style={{ width: 110 }} title="Count1" value={state} />;
}
