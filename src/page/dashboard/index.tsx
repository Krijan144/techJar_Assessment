import { styled } from "../../theme/stitches";
import Card from "../../ui/component/card";
import Bar from "../../ui/component/charts/bar";
import Doughnut from "../../ui/component/charts/doughnut";
import Line from "../../ui/component/charts/line";
import Header from "../../ui/component/header";
import { bardata, cardData, doughnutdata, linedata } from "./data";

const DashboardTemplate = () => {
  return (
    <>
      <StyledContainer>
        <CardContainer>
          {cardData?.map((item) => (
            <Card
              number={item.number}
              text={item.text}
              icon={item.icon}
              color={item.color}
              iconBg={item.iconBg}
            />
          ))}
        </CardContainer>
        <Header label="Data Analytics" css={{ paddingLeft: 0 }} />
        <StyledChart>
          <Doughnut
            name={"Total Revenue"}
            label={"Sales in Thousands"}
            datas={doughnutdata}
          />
          <div>
            <Bar
              name={"Total Sales"}
              label={"Sales in month"}
              datas={bardata}
            />
            <Line
              name={"Total Revenue"}
              label={"Sales in Thousands"}
              datas={linedata}
            />
          </div>
          <Doughnut
            name={"Total Revenue"}
            label={"Sales in Thousands"}
            datas={doughnutdata}
          />
        </StyledChart>
      </StyledContainer>
    </>
  );
};

export default DashboardTemplate;

const StyledContainer = styled("div", {
  padding: "2rem",
  background: "rgb(252 252 252)",
});

const CardContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
});

const StyledChart = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  paddingTop: "3rem",
  columnGap: "3rem",
  justifyContent: "center",
});
