import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar({ login }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [onHome, setOnHome] = useState(false);
  const [onChat, setOnChat] = useState(false);
  const [onProfile, setOnProfile] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("./signup");
    } else {
      fetch(`/user/${JSON.parse(localStorage.getItem("user"))._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setUser(result.user);
        });
    }
  }, []);

  useEffect(() => {
    setOnHome(location.pathname === "/");
    setOnChat(location.pathname === "/chat");
    setOnProfile(location.pathname === "/profile");
  }, [location]);

  const Navigation = () => {
    const token = localStorage.getItem("jwt");
    
    if (token) {
      return [
        <>
          <NavLink to="/home">
            <li>
              {/* <span className="spanicon">
                {!onHome ? homeOutline : homeFill}
              </span> */}
              Home
            </li>
          </NavLink>

          <NavLink to="/chat">
            <li>Chat</li>
          </NavLink>

          <NavLink to="/profile">
            <li>Profile</li>
          </NavLink>

          <NavLink to="/signin"   onClick={() => {
                  
                  localStorage.clear();
                 
                }}>
            <li>Log Out</li>
          </NavLink>
        </>,
      ];
    } else {
      return [<></>];
    }
  };

  return [
    <>
      <ul >{Navigation()}</ul>
    </>,
  ];
}
