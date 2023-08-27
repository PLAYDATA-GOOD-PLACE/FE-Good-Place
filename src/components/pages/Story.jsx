import "./story.css";
import StoryBox from "../story/StoryBox";

import mainPhoto from "../../assets/rectangle-13.png";
import opacity from "../../assets/rectangle-14.png";
const Story = () => {
  return (
    <>
      <div className="story_top_container">
        <img className="story_photo" src={mainPhoto} alt="" />
        <img className="story_curtain" src={opacity} alt="opacity" />
        <p className="story_photo_text">내 입맛별 맛집</p>
      </div>
      <StoryBox></StoryBox>
    </>
  );
};

export default Story;
