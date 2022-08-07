import React, { useState, useEffect } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import api from "./api";
//Route

//Components
import Header from "./adminheader/header";
import Sidebar from "./adminsidebar/sidebar";
import Tables from "./admintable/tables";


export default function Tableadmin({ type }) {
  document.title = "Admin";
  const search = useLocation().search;
  const orderid = new URLSearchParams(search).get("orderid");
  const orderconfirm = new URLSearchParams(search).get("orderconfirm");
  const [Posts, setPosts] = useState([]);
  
  useEffect(() => {
        if(type=="cates"){
          api
          .APIPost("category?" + window.sessionStorage.getItem("category"))
          .then((res) => {
            setPosts(res.data.category);
          }); 
        }
        if(type=="products"){
          api
          .APIPost("admin/products?" + window.sessionStorage.getItem("allproduct"))
          .then((res) => {
            setPosts(res.data.allproduct);
          }); 
        }
        if(type =="orders"){
        
          if(orderid==null){
          api
        .APIPost("admin/orders?" + window.sessionStorage.getItem("orderbill"))
        .then((res) => {
          setPosts(res.data.orderbill);
      
        }); 
      }
        else{
          api.APIPost("orderdetailhistory?orderid=" + orderid).then((res) => {
            setPosts(res.data.orderbilldetails);
          });
        }
        }
        if(type == "customers"){
    api
        .APIPost("admin/customers?" + window.sessionStorage.getItem("customer"))
        .then((res) => {
          setPosts(res.data.customer);
        });
        
        };  
  if(type == "staffs"){
    api
        .APIPost("admin/staffs?" + window.sessionStorage.getItem("accounts"))
        .then((res) => {
          setPosts(res.data.accounts);
        });
        
        };    
  }, [type, search, orderid]);
  // const reload = () => {
  //   window.location.reload();
  // }

  console.log(Posts);
  const posts_order = () => {
    if(orderid==null)
    return (
      <Tables type={"Order"} name={"Order"} array={Posts}></Tables>
    )
    else return (
      <Tables type={"Order_detail"} name={"Order_detail"} array={Posts}></Tables>
    )
  }
  return (
    <>
      <div>
        <div>
          <link
            href="vendor/fontawesome-free/css/all.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <link href="css/sb-admin-2.min.css" rel="stylesheet" />
          <link
            href="vendor/datatables/dataTables.bootstrap4.min.css"
            rel="stylesheet"
          />
        </div>
        <div id="wrapper">
          <Sidebar />
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <Header />
              {/* End of Topbar */}
              {/* Begin Page Content */}
              {type === "staffs" && <Tables type={"Staff"} array={Posts} name={"Staff"}></Tables>}
              {type === "customers" && <Tables type={"Customer"} array={Posts} name={"Customer"}></Tables>}
              {type === "cates" && <Tables  type={"Category"} array={Posts} name={"Category"}></Tables>}
              {type === "products" && <Tables type={"Product"} array={Posts} name={"Product"}></Tables>}
              {type === "orders" && posts_order() }
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2020</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" />
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
