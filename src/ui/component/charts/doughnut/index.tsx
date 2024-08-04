import { Doughnut } from "react-chartjs-2";
import Header from "../../header";
import { Chartss } from "../bar";

const Doughnuts = ({ name, label, datas }) => {
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
  const options = {
    cutout: 100,
    percentageInnerCutout: 50,
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 60,
        right: 50,
        bottom: 20,
        left: 50,
      },
    },
  };
  return (
    <>
      <Chartss>
        <Header label={name}></Header>
        <Doughnut data={data} options={options} />
      </Chartss>
    </>
  );
};

export default Doughnuts;
