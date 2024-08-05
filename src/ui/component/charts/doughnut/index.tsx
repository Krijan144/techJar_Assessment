import { Doughnut } from "react-chartjs-2";
import Header from "../../header";
import { styled } from "../../../../theme/stitches";
import { ChartType } from "../bar";

const Doughnuts = ({ name, label, datas }: ChartType) => {
  const data = {
    labels: datas.labels,
    datasets: [
      {
        label: label,
        data: datas.data,
        backgroundColor: datas.colors,
        hoverOffset: 4,
      },
    ],
  };
  // const options = {
  //   cutout: 100,
  //   percentageInnerCutout: 80,
  //   maintainAspectRatio: true,
  //   layout: {
  //     padding: {
  //       top: 40,
  //       right: 50,
  //       bottom: 20,
  //       left: 50,
  //     },
  //   },
  // };
  return (
    <>
      <Chartss>
        <Header label={name}></Header>
        <Doughnut data={data} />
      </Chartss>
    </>
  );
};

export default Doughnuts;
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
    width: "85%",
  },
});
