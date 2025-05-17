import { useEffect, useState } from "react";
import "./Csscompantes/App.css";
import axios from "axios";
const Suggest = () => {
  const [profile, setprofile] = useState([]); //accound profile
  const [follow, setfollow] = useState({}); //following toggle btn
  const [sugest, setsuggest] = useState([]); //suggestion api
  function togle(userid) {
    setfollow((prive) => ({
      ...prive,
      [userid]: !prive[userid],
    }));
  }
  useEffect(() => {
    const control = new AbortController();
    const signal = control.signal;
    axios
      .get("http://localhost:3000/profile/1") //profile api
      .then((res) => setprofile(res.data))
      .catch((error) =>
        console.log("suggestion profile not work" + error.massage)
      );
    fetch("http://localhost:3000/Suggestion", { signal }) //suggtion api
      .then((res) => res.json())
      .then((data) => setsuggest(data))
      .catch((err) => console.log(err));
    return () => {
      control.abort();
    };
  }, []);
  const Handlefollowing = async (post_id, profile_picture,username) => {
    axios
      .post("http://localhost:3000/follow", {
        post_id: post_id,
        username: username,
        profile_picture:profile_picture,
      })
      .then(alert("followed"))
      .catch((err) => console.log(err.massage));
  };
  return (
    <div>
      {sugest.length > 0 ? (
        <div className="d-flex sugbox">
          <div className="sugimg d-flex">
            <div className="d-flex gap-1">
              <img
                className="rounded-circle"
                src={profile.profile_picture}
                alt="profile"
              />
              <h5 className="pt-2 sughead selfprofile">{profile.username}</h5>
            </div>
            <span className="me-3">
              <p className="follow">Switch</p>
            </span>
          </div>
          <div className="d-flex sughead1 mt-4">
            <span>Suggested for you</span>
            <b>See more</b>
          </div>
          {sugest.map((sug) => {
            return (
              <div key={sug.post_id}>
                <div className="sugimg d-flex">
                  <div className="d-flex gap-1">
                    <img
                      className="rounded-circle"
                      src={sug.profile_picture}
                      alt="profile"
                    />
                    <h5 className="pt-3 sughead">{sug.username}</h5>
                  </div>
                  <span onClick={() => togle(sug.post_id)}>
                    {follow[sug.post_id] ? (
                      <p className="unfollow">"unfollow"</p>
                    ) : (
                      <a
                        className="follow"
                        onClick={() =>
                          Handlefollowing(sug.post_id,sug.profile_picture, sug.username)
                        }
                      >
                        "follow"
                      </a>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {console.log(sugest)}
    </div>
  );
};

export default Suggest;
