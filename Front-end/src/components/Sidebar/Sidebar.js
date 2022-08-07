import React, { useState, useEffect } from "react";
//Components
import { SidebarData } from "./SidebarData";
import { Submenu } from "./Submenu";
import api from "../api";
//Styles
import { Wrapper, Content, SidebarNav, SidebarWrap } from "./Sidebar.styles";
import { Link } from "react-router-dom";
export let categoryTitle = [];
export default function MenuLeft() {
  const [Posts, setPosts] = useState([]);
  const [Posts2, setPosts2] = useState([]);
  const [Posts3, setPosts3] = useState([]);
  useEffect(() => {
    api.APIPost("category").then((res) => {
      setPosts(res.data.category);
    });
    api.APIPost("sex").then((res) => {
      // console.log(res.data.gioitinh);
      setPosts2(res.data.gioitinh);
    });
    api.APIPost("age").then((res) => {
      setPosts3(res.data.age);
    });
  }, []);
  const Category = () => {
    return Posts.map((item) => {
      categoryTitle.push(item.name);
      return <Submenu item={item} item2={Posts2} item3={Posts3} />;
    });
  };

  return (
    <Wrapper>
      <Content>
        <SidebarNav>
          <SidebarWrap>{Category()}</SidebarWrap>
        </SidebarNav>
      </Content>
    </Wrapper>
  );
}
