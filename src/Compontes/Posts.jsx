import React, { useEffect, useState } from "react";
import "../Csscompantes/App.css";
const Posts = () => {
  const [post, setposts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Posts")
      .then((data) => data.json())
      .then((data) => setposts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {post.length > 0 ? (
        <div>
          {post.map((postss) => (
            <div key={postss.post_id} className="posts mb-3">
              <div className="proimg d-flex fd gap-3">
                <img
                  className="rounded-circle ms-2"
                  src={postss.profile_picture}
                  alt="profile pick"
                />
                <h5>{postss.username}</h5>
              </div>
              <div className="post">
                <img src={postss.image} />
                <div className="d-flex gap-3 ms-2">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                </div>
                <div className="ms-2">
                  <b>{postss.likes_count}Likes</b>
                </div>
                <p className="ms-2">{postss.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Posts;
