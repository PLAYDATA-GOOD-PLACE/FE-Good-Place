
import { springApi } from "../../network/springApi"
import MyHeader from "../MyHeader"
import '../../css/List.css'
import axios from "axios";
const ListPage = ()=>{

  axios.get('http://localhost:8080/api/v1/client')
    .then(response =>{
      console.log(response.data)
    })
  


     return <>
        <div className="StoryListBox">
        <div className="topTitleStyle">
          <p>믿고보는 맛집 리스트</p>
        </div>

        <div className="buttonList">
          <button className="buttonStyle"># 제주</button>
          <button className="buttonStyle"># 분식</button>
          <button className="buttonStyle"># 집밥</button>
        </div>

        {/* 여기서부터 한줄 시작 */}
        <div className="flexRow">
          <div>
            <p className="titleStyle">제주도 제주시</p>
            <p className="subTitleStyle">신해바라기 분식</p>
            <img src="images/sunflower.png"></img>
          </div>

          <div>
            <p className="titleStyle">제주도 제주시</p>
            <p className="subTitleStyle">신해바라기 분식</p>
            <img src="images/sunflower.png"></img>
          </div>
        </div>

        {/* 여기서 한줄 끝 */}

        <div className="flexRow">
          <div>
            <p className="titleStyle">제주도 제주시</p>
            <p className="subTitleStyle">신해바라기 분식</p>
            <img src="images/sunflower.png"></img>
          </div>

          <div>
            <p className="titleStyle">제주도 제주시</p>
            <p className="subTitleStyle">신해바라기 분식</p>
            <img src="images/sunflower.png"></img>
          </div>
        </div>
      </div>
    </>
};

export default ListPage;
