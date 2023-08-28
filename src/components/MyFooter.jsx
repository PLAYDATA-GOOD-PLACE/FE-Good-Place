import frame from "../assets/frame.svg";
import socialMedia from "../assets/social-media.svg";
const MyFooter = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_wrap">
          <div className="footerBox">
            <img className="frame" src={frame} alt="social-media"></img>
            <p className="footer_text">2023 팀맛집 All Right Reserved</p>
          </div>
          <div className="footer_text_wrap">
            <p className="footer_text">Contact</p>
            <p className="footer_text">Privacy</p>
            <p className="footer_text">Terms</p>
            <p className="footer_text">About</p>
            <img src={socialMedia} alt="social-media"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyFooter;
