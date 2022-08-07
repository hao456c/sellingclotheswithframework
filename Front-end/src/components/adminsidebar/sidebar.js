import React from "react";

//Routing
import { Link } from "react-router-dom";
//Image
export default function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to="/admin"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseStats"
            aria-expanded="true"
            aria-controls="collapseStats"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Tables</span>
          </a>
          <div
            id="collapseStats"
            className="collapse"
            aria-labelledby="headingStats"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Adminstration:</h6>
              <Link to="/admin_staffs" className="collapse-item">
                Staffs
              </Link>
              <Link to="/admin_customers" className="collapse-item">
                Customers
              </Link>
              <Link to="/admin_cates" className="collapse-item">
                Categories
              </Link>
              <Link to="/admin_products" className="collapse-item">
                Products
              </Link>
              <Link to="/admin_orders" className="collapse-item">
                Orders
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Statistical</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Adminstration:</h6>
              <Link to="/stat_revenue" className="collapse-item">
                Revenue
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        {/* Sidebar Message */}
      </ul>
    </>
  );
}