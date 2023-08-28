import "../../pages/main.css";
import mainFood from "../../../assets/main_food.png";
import searchIcon from "../../../assets/search-icon.svg";
const MainRectangle = () => {
  return (
    <>
      <div className="main_wrap">
        <div className="main_photo_wrap">
          <img src={mainFood} alt="" className="main_food"></img>
          <div className="main_food_cover"></div>
        </div>
        <div className="main_inner_wrap">
          <div className="main_inner_text">
            <p className="main_text main_text_sm ">내가 추천한 맛집</p>
            <p className="main_text">Let's Eat Now</p>
          </div>
          <div className="main_search">
            <input className="main_input_search" />
            <button className="main_search_btn">
              <img
                className="main_search_img"
                src={searchIcon}
                alt={"main-search"}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainRectangle;
