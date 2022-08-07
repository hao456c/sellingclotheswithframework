import React from "react";
//Components
import Tableform from "./tableform";
export default function StatTables({ dataType }) {
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
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the .
        </p>
        {/* DataTales Example */}
        <Tableform name={dataType} />
      </div>
    </div>
  );
}