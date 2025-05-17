import "bootstrap-icons/font/bootstrap-icons.css";
import instText from "../assets/instgramtext.svg";
import { useNavigate } from "react-router";
function Sidenav() {
  const navegate = useNavigate();
  return (
    <div className="navlist position-fixed w-25">
      <img className="insttext" src={instText} alt="instgram text logo" />
      <div className="listitems">
        <i className="bi bi-house-door-fill"></i>Home
      </div>
      <div className="listitems">
        <i className="bi bi-search"></i>Search
      </div>
      <div className="listitems">
        <i className="bi bi-compass"></i>Explore
      </div>
      <div className="listitems">
        <i className="bi bi-collection-play-fill"></i>Reels
      </div>
      <div className="listitems">
        <i className="bi bi-send"></i>Messages
      </div>
      <div className="listitems">
        <i className="bi bi-heart"></i>Notification
      </div>
      <div className="listitems">
        <i className="bi bi-plus-square-fill"></i>Create
      </div>
      <div
        className="listitems"
        onClick={() => {
          navegate("/Profile");
        }}
      >
        <i className="bi bi-person-circle"></i>Profile
      </div>
      <div className="listmenu">
        <div className="listitems">
          <i className="bi bi-threads"></i>Threads
        </div>
        <div className="listitems">
          <i className="bi bi-list"></i>More
        </div>
      </div>
    </div>
  );
}
export default Sidenav;
