import MainRectangle from "../main/MainRectangle/MainRectangle";
import MainRecommended from "../main/MainRecommended/MainRecommended";
import MainPopular from "../main/MainPopular/MainPopular";
import MainShared from "../main/MainShared";
import MainReview from "../main/MainReview/MainReview";
import MainTeam from "../main/MainTeam/MainTeam";

const MainPage = () => {
  return (
    <>
      <MainRectangle />
      <MainRecommended />
      <MainPopular />
      <MainShared />
      <MainReview />
      <MainTeam />
    </>
  );
};
export default MainPage;
