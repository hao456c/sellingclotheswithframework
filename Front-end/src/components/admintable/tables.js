import React from "react";
//Components
import Tableform from "./tableform";
export default function Tables({ array, name, type }) {
  // console.log(array);
  return (
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
      <div className="container-fluid">
        {/* Page Heading */}
        
        {/* DataTales Example */}
        
        <Tableform name={name} array={array} type={type} />
      </div>
    </div>
  );
}
