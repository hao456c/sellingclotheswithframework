import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Submenu2 } from "./Submenu2";

export const SidebarLink = styled(Link)`
  display: flex;
  color: blue;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    background: #f1f1f1;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export function Submenu({ item, item2, item3 }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div>
        <SidebarLink
          className="category"
          to={"?id=" + item.category_id}
          onMouseOver={item.category_id && showSubnav}
          // onMouseOut={subnav && showSubnav}
        >
          {item.name}
        </SidebarLink>
      </div>
      {subnav &&
        item2.map((data) => {
          return <Submenu2 item={item} item2={data} item3={item3} />;
        })}
    </>
  );
}
