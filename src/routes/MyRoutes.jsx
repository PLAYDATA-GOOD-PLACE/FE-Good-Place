import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import Template from "../template/Template";
import KakaoLoginRedirect from "../components/login/KakaoLoginRedirect";
import MainStory from "../components/main/MainStory";
import ListPage from "../components/list/List";

import Recommend from "../components/recommend/Recommend";
import Slider from "../components/pageDetail/Slider";

import Story from "../components/pages/Story";

import MainRectangle from "../components/main/MainRectangle/MainRectangle";
import DetailReview from "../components/pageDetail/DetailReview";
import { useParams } from "react-router";
import MainPage from "../components/pages/Main";
import PageDetail from "../components/pages/PageDetail";
const RecommendWrapper = () => {
  const { userId } = useParams();
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch user-specific data using userId and update myPlaces
    // Example: const userPlaces = fetchUserPlacesFromAPI(userId);
    // setMyPlaces(userPlaces);
  }, [userId]);

  return <Recommend places={myPlaces} setMyPlaces={setMyPlaces} />;
};
const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/recommend/:userId" element={<RecommendWrapper />} />
        <Route
          path="/page_detail/:placeId"
          element={<PageDetail places={myPlaces} component={DetailReview} />}
        />
        <Route path="/story" element={<Story />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/mainStory/:storeId/:uid" element={<MainStory />}></Route>
      </Route>
      <Route path="/redirect" element={<KakaoLoginRedirect />}></Route>
    </Routes>
  );
};

export default MyRoutes;
