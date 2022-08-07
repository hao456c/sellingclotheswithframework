import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FAKEDATA } from "./SidebarData";

export const SidebarLink = styled(Link)`
  display: flex;
  color: green;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #f1f1f1;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 20px;
  i {
    padding-right: 20px;
    text-align: center;
  }
`;

export const DropdownLink = styled(Link)`
  background: #f1f1f1;
  height: 60px;
  color: red;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 2rem;

  font-size: 18px;
  &:hover {
    background: #f1f1f1;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export function Submenu2({ item, item2, item3 }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div>
        <SidebarLink
          to={"?id=" + item.category_id + "&&sex=" + item2.sex_id}
          onMouseOver={item.category_id && showSubnav}
          // onMouseOut={subnav && showSubnav}
        >
          <SidebarLabel>
            <i
              className={
                item2.sex_id === 1
                  ? "fas fa-male"
                  : item2.sex_id === 2
                  ? "fas fa-female"
                  : "fas fa-users "
              }
            ></i>
            {item2.name}
          </SidebarLabel>
        </SidebarLink>
      </div>

      {subnav &&
        item3.map((data) => {
          return (
            <DropdownLink
              // onMouseOut={subnav && showSubnav}
              to={
                "?id=" +
                item.category_id +
                "&&sex=" +
                item2.sex_id +
                "&&age=" +
                data.age_id
              }
              key={data.age_id}
            >
              <SidebarLabel>{data.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}
