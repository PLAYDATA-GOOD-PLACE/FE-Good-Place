
import StoryBox2 from "../story/StoryBox2";
import StoryList from "../story/StoryList";
const MainStory = () => {
  const StoryContainer = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <>
      <div style={StoryContainer}>
        <StoryBox2></StoryBox2>
        <StoryList></StoryList>
      </div>
    </>
  );
};

export default MainStory;
