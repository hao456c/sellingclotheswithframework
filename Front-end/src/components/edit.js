
import React from "react";
//Components
import Header from "./adminheader/header";
import Sidebar from "./adminsidebar/sidebar";
export default function Edit() {
  document.title = "Edit";
  return (
      <>
        <div>
            <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
            <link href="css/sb-admin-2.min.css" rel="stylesheet" />
            <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" />
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                    {/* Topbar */}
                        <Header />
                        {/* End of Topbar */}
                        <div className="container" style={{marginLeft: 100}}>
                            <h2 style={{color: 'red'}}>Add Product:</h2>
                            <span id="thongbao" style={{color: 'red', display: 'none'}}>Fill Full Infor</span>
                            <form id="form" action encType="multipart/form-data" method="POST">
                                <br /><p style={{color: 'green'}}>Product Name:</p><input type="text" name="FoodName" /><br />
                                <p style={{color: 'green'}}>Price: </p><input type="number" name="Price" /><br />
                                <p style={{color: 'green'}}>Description: </p>
                                <textarea className="mota" name="Description" id cols={80} rows={10} defaultValue={""} style={{width:'55%'}}/> 
                                <p style={{color: 'green'}}>Quantity: </p><input type="number" name="Quantity" /><br />
                                <p style={{color: 'green'}}>Image_Name:</p><input type="file" name="Image_Name" required  /><br />
                                <p style={{color: 'green'}}>Category ID:</p><select name="CategoryID" id>            
                                <option value>1</option>
                                </select><br /> 
                                <br /><input type="submit" defaultValue="Add product" style={{backgroundColor: 'crimson', color: 'white'}} />   
                            </form>  
                            <button style={{backgroundColor: 'blue'}}><a href="{{ asset('admin/product/index') }}" style={{color: 'white'}}>back</a></button><br />   
                        </div>
                    </div>
                    <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                <span>Copyright © Your Website 2020</span>
                                </div>
                            </div>
                    </footer>
                </div>
            </div>
        </div>
      </>
  )
}

