import "../../pages/main.css";
import { Link } from "react-router-dom";
import mainImgOne from "../../../assets/main-1.png";
import mainImgTwo from "../../../assets/main-2.png";
import mainImgThree from "../../../assets/main-3.png";
import mainImgFour from "../../../assets/main-4.png";
const MainRecommended = () => {
  return (
    <>
      <div className="recommended_img">
        <p className="main_title">recommended restaurants</p>
        <div className="foodBox">
          <div className="total_box box_grid1 ">
            <div className="box_img">
              <img src={mainImgOne} className="imgA" alt={"cover"} />
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">수정 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>

          <div className="total_box box_grid2 ">
            <div className="box_img">
              <img src={mainImgTwo} alt=""></img>
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">지혜 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>

          <div className="total_box box_grid3 ">
            <div className="box_img" v>
              <img src={mainImgThree} alt=""></img>
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">태홍 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>

          <div className="total_box box_grid4 ">
            <div className="box_img">
              <img src={mainImgFour} alt="" className="imgD"></img>
              <div className="cover"></div>
            </div>
            <div className="food_inner">
              <p className="food_text">독산 맛집</p>
              <button className="food_btn">10 food</button>
            </div>
          </div>
        </div>
        <Link to="/story" style={{ textDecoration: "none" }}>
          <button className="food_btn btn_more">view more</button>{" "}
        </Link>
      </div>
    </>
  );
};

export default MainRecommended;
