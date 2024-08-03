import { styled } from "../../theme/stitches";
import Sidebar from "../../ui/container/sidebar";

const DashboardTemplate = () => {
  return (
    <div>
      <Sidebar />
      <StyledContainer></StyledContainer>
    </div>
  );
};

export default DashboardTemplate;
const StyledContainer = styled("div", {
  padding: "1rem",
});
