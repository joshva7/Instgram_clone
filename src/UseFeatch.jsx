import { useEffect, useState } from "react";
const UseFeatch = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/Posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("This featch is not access");
        }
        return res.json();
      })
      .then((res) => setdata(res))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return [data];
};

export default UseFeatch;
