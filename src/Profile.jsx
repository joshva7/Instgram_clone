import { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [profile, setProfile] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [follows, setfollows] = useState([]);
  const [Unfollow,setunfollow]=useState(0)
  useEffect(() => {
    axios
      .get("http://localhost:3000/follow")
      .then((res) => {
        setfollows(res.data);
      })
      .catch((err) => console.log(err.massage));
    axios
      .get(`http://localhost:3000/profile/1`)
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError(err);
        setLoading(false);
      });
  }, [follows]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>;
  }
  function HandleChange(e) {
    setProfile((prve) => ({
      ...prve,
      [e.target.name]: [e.target.value],
    }));
  }
  const Handleupdate = async () => {
    axios
      .put("http://localhost:3000/profile/1", profile)
      .then(console.log("update"))
      .catch((error) => console.log(error.message));
  };
  const Handledelete=async(id)=>{
    axios.delete(`http://localhost:3000/follow/${id}`)
    .then(alert('deleted'))
    .then(setunfollow(!Unfollow))
    .catch((e)=>(console.log(e.massage+"delete fetach not woring")
    ))
  }
  return (
    <div>
      {profile ? (
        <div className="profile m-5">
          <div className="rounded-circle">
            <img
              src={profile.profile_picture}
              className="rounded-circle"
              alt="profile"
            />
          </div>
          <p>{profile.username}</p>
          <input
            name="username"
            onChange={HandleChange}
            value={profile.username}
            className="my-3 form-control"
            type="text"
          />
          <input
            name="profile_picture"
            onChange={HandleChange}
            value={profile.profile_picture}
            className="my-3 form-control"
            type="text"
          />
          <button className="btn bg-primary" onClick={Handleupdate}>
            Update
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      ;
      <div className="ms-5" >
        <h5 className="pb-2">following</h5>
        <div>
        {follows.length > 0 ? (
          follows.map((item) => {
            return (
              <div key={item.id} className="pro_box">
                <div className="pro_box_img">
                <img className="rounded-circle " src={item.profile_picture} alt="follower image" /> 
                <h5>{item.username}</h5>
                </div>
                <div>
                <button className="btn bg-secondary" onClick={()=>Handledelete(item.id)}>Unfollow</button>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Profile;
