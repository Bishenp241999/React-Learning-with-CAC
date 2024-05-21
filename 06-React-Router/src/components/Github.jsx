import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Bishenp241999")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="gitPage">
      <div className="gitCard">
        <p>
          {" "}
          GitHub Followers : {data.followers} ◀
          <br />
          GitHub Following : {data.following} ▶▶▶▶▶
        </p>
        <img src={data.avatar_url} style={{borderRadius:'50%'}} />
      </div>
    </div>
  );
}
