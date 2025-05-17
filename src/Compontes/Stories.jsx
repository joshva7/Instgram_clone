import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const Stories = () => {
  const [storie, setstorie] = useState([]);
  const navegate = useNavigate();
  let total = 0;
  useEffect(() => {
    const control = new AbortController();
    const signal = control.signal;
    fetch("http://localhost:3000/story", { signal })
      .then((res) => res.json())
      .then((data) => setstorie(data))
      .catch((err) => console.log(err));
    return () => {
      control.abort();
    };
  }, []);
  return (
    <div className="d-flex mt-3 mb-3 ms-2 gap-3 stories-box">
      <div className="d-none">{(total = storie.length)}</div>
      {storie.length > 0 ? (
        storie.map((storiee, index) => {
          return (
            <div
              key={index}
              onClick={() => navegate(`/story/${storiee.id}/${total}`)}
              className="storieimg gradient-border"
            >
              <img
                className="rounded-circle "
                src={storiee.profile_picture}
                alt="stories"
              />
              <p className="story-name">
                {storiee.username.slice(0, 5) + "..."}
              </p>
            </div>
          );
        })
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default Stories;
