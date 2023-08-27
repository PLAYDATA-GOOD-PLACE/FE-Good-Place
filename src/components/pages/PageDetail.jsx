import Slider from "../pageDetail/Slider";
import Information from "../pageDetail/Information";
import DetailReview from "../pageDetail/DetailReview";
import { useParams } from "react-router";

const PageDetail = () => {
  const { placeId } = useParams();
  return (
    <>
      <div className="parent" style={{ width: "90%", margin: "auto" }}>
        <Slider />
        <Information placeId={placeId} />
        <DetailReview />
      </div>
    </>
  );
};

export default PageDetail;
