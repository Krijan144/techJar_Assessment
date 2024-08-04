import { Line } from "react-chartjs-2";
import { Chartss } from "../bar";
import Header from "../../header";

const Lines = ({ name, label, datas }) => {
  const data = {
    labels: datas.labels,
    datasets: [
      {
        label: label,
        data: datas.data,
        fill: true,
        borderColor: `red`,
        tension: 0.1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 40,
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
        <Line data={data} options={options} />
      </Chartss>
    </>
  );
};

export default Lines;
