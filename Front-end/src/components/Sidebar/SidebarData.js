import { useState, useEffect } from "react";
import api from "../api";

export const SidebarData = () => {
  return Category();
};
const Category = () => {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    api.APIPost("category").then((res) => {
      console.log(res.data.category);
      setPosts(res.data.category);
    });
    return Posts;
  }, []);
};
