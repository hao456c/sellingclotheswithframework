import React from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import api from "../api";
//Array, name is a table name, type is a type table
export default function Tableform({ name, array, type}) {
  const arrName = name; 
  let arrayids = [];
  console.log(array);
  const checkboxmultidelete = () =>{
    if(arrayids.length!==0){
    if(type=="Customer"){
      arrayids.forEach(e =>{
        api
        .APIPost("delete_customer?id="+e);
      })
      
    }
    else if(type=="Staff"){
      arrayids.forEach(e =>{
      api
      .APIPost("delete_account?id="+e)
    })
    }
    else if(type=="Product"){
      arrayids.forEach(e =>{
      api
      .APIPost("delete_product?id="+e)
    })
    }
    else if(type=="Category"){
      arrayids.forEach(e =>{
        api
        .APIPost("delete_category?id="+e)
        
        })
      
    }
    window.location.reload();
  }
    else alert("choose an object to delete!!");
    
  }
  const thtable = () =>{
      if(name=="Customer"||name=="Staff"){
        return(
          <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Image</th>
                  <th>Updatetime</th>
                  <th>
                    <button onClick={checkboxmultidelete} className="btn btn-danger">Delete</button>
                  </th>
                  <th></th>
                </tr>
        )
      }
      else if(name=="Category"){
        return(
          <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Updatetime</th>
                  <th>
                    <button onClick={checkboxmultidelete} className="btn btn-danger">Delete</button>
                  </th>
                  <th></th>
                </tr>
        )
      }
      else if(name=="Order"){
        return(
          <tr>
                  <th>ID</th>
                  <th>CustomerID</th>
                  <th>Total</th>
                  
                  <th>Date</th>
                  <th>Status</th>
                  <th>Confirm</th>
                  <th>Detail</th>
                  
                </tr>
        )
      }
      else if(name=="Order_detail"){
        return(
          <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th>Date</th>
                </tr>
        )
      }
      else if(name=="Product"){
        return(
          <tr>
                  <th>ID</th>
                  <th>Image</th>
                  
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>
                    <button onClick={checkboxmultidelete} className="btn btn-danger">Delete</button>
                  </th>
                  <th></th>
                </tr>
        )
      }
  }
//   function isCheckedById(id) {
//     var checked = $("input[@id=" + id + "]:checked").length;
//     alert(checked);

//     if (checked == 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

  const checkboxdelete = event =>{
    const id=event.target.value;
    const index=arrayids.indexOf(id);
    if(index=== -1)
     arrayids.push(id);
     else arrayids.splice(index,1);
     console.log(arrayids);
  }
  const check = (data) =>{
    if(data==0){
      return(
        "processing"
      )
    }
    else{
      return(
        "completed"
      )
    }
  }
  
  
  const checkconfirm = (id) =>{
    api
    .APIPost("admin/orders_confirm?id="+id)
    .then(res=>{
      alert("confirm successfully");
      
    })

  }
  return (
    <>
    
      {/* <form  id="form"  > */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6
            style={{ float: "left", width: "60%" }}
            className="m-0 font-weight-bold text-primary"
          >
            {name}
          </h6>
          <span style={{ float: "left", width: "40%", textAlign: "right" }}>
          <Link
                            style={{ textDecoration: "none" }}
                             to="/add"
                            
                          >
                            <button className="btn btn-success">Add</button>
                          </Link>
            
          </span>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table
              class="table table-bordered"
              
              width="100%"
              cellSpacing="0"
            >
              <thead>
                {thtable()}
              </thead>

              <tbody>
                {
                 array.map((data) => {
                   if(type=="Customer"){
                     return (
                       <tr>
                         <td>{data.customer_id}</td>
                         <td>{data.name}</td>
                         <td>{data.email}</td>
                         <td>{data.phone}</td>
                         <td>{data.image}</td>
                         <td>{data.updated_at}</td>
                         <td>
                             <input id={"checkbox"+data.customer_id} onChange={checkboxdelete} type="checkbox" name="staff" value={data.customer_id} />
                         </td>
                         <td>
                           <button className="btn btn-warning">Edit</button>
                         </td>
                       </tr>
                     );
                   }
                   else if(type=="Staff"){
                     return (
                       <tr>
                         <td>{data.user_id}</td>
                         <td>{data.name}</td>
                         <td>{data.email}</td>
                         <td>{data.phone}</td>
                         <td>{data.image}</td>
                         <td>{data.updated_at}</td>
                         <td>
                             <input id={"checkbox"+data.user_id} onChange={checkboxdelete} type="checkbox" name="staff" value={data.user_id} />
                         </td>
                         <td>
                           <button className="btn btn-warning">Edit</button>
                         </td>
                       </tr>
                     );
                   }
                   else if(type=="Category"){
                    return (
                      <tr>
                        <td>{data.category_id}</td>
                        <td>{data.name}</td>
                        <td>{data.updated_at}</td>
                        <td>
                            <input id={"checkbox"+data.category_id} onChange={checkboxdelete} type="checkbox" name="staff" value={data.category_id} />
                        </td>
                        <td>
                          <button className="btn btn-warning">Edit</button>
                        </td>
                      </tr>
                    );
                  }
                   else if(type=="Product"){
                    return (
                      <tr>
                        <td>{data.product_id}</td>
                        <td>{data.image}</td>
                        <td>{data.name}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                        <td>
                            <input id={"checkbox"+data.user_id} onChange={checkboxdelete} type="checkbox" name="staff" value={data.product_id} />
                        </td>
                        <td>
                          <Link
                            style={{ textDecoration: "none" }}
                             to="/edit">
                          <button  className="btn btn-warning">Edit</button>
                          </Link>
                        </td>
                      </tr>
                    );
                  }
                   else if(type=="Order"){
                    return (
                      
                      <tr>
                        <td>{data.order_id}</td>
                        <td>{data.customer_id}</td>
                        <td>{data.total}</td>
                        <td>{data.created_at}</td>
                        <td>{check(data.status)}</td>
                        <td>
                        <input id={data.order_id} name={data.order_id} type="button" onClick={()=>checkconfirm(data.order_id)} value="Confirm Order's Status" className="btn-success" />
                         </td>
                        <td>
                          <Link
                            style={{ textDecoration: "none" }}
                             to={"/admin_orders?orderid=" + data.order_id}
                            
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                      
                    );
                   }
                   else if(type=="Order_detail"){
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price}</td>
                        <td>{data.subtotal}</td>
                        <td>{data.created_at}</td>
                      </tr>
                    );
                   }
                   })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </form> */}
    </>
  );
}
