import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfie() {
  const { userid } = useParams();

  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
    </>
  );
}
