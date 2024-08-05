import { Line } from "react-chartjs-2";
import { Chartss, ChartType } from "../bar";
import Header from "../../header";

const Lines = ({ name, label, datas }: ChartType) => {
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

  return (
    <>
      <Chartss>
        <Header label={name}></Header>
        <Line data={data} />
      </Chartss>
    </>
  );
};

export default Lines;
