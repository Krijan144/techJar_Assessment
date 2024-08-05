import React from "react";
import { Bar } from "react-chartjs-2";
import { styled } from "../../../../theme/stitches";
import Header from "../../header";

type DataType = {
  labels: string[];
  data: number[];
  colors?: string[];
};

export type ChartType = {
  name: string;
  label: string;
  datas: DataType;
};
const Bars = ({ name, label, datas }: ChartType) => {
  const data = {
    labels: datas.labels,
    datasets: [
      {
        label: label,
        data: datas.data,
        backgroundColor: ["#0095FF"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <Chartss>
        <Header label={name} />
        <Bar data={data} />
      </Chartss>
    </>
  );
};

export default Bars;

// Styling with mobile responsiveness
export const Chartss = styled("div", {
  position: "relative",
  color: "white",
  background: "$white",
  borderRadius: 7,
  width: "28rem",
  marginBottom: "1rem",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0",
  canvas: {
    borderRadius: 7,
  },
  overflowX: "auto",

  "@md": {
    width: "24rem",
    padding: "1rem",
    boxShadow: "rgba(99, 99, 99, 0.15) 0px 1px 6px 0",
  },

  "@media (max-width: 512px)": {
    width: "90%",
    overflowX: "auto",
  },

  "@sm2": {
    width: "15.5rem",
  },
});
