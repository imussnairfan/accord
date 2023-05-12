import "./list.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot, snapShot } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase';
import delete_icon from '../navicon/delete.png';
import add_user_icon from '../navicon/add_user.png';

const Employee_List = () => {
    const [data, setData] = useState([]);

    useEffect (() => {
      /*const fetchData = async () =>{
        let list = []
        try{
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()});
          });
          setData(list);
        } catch(error){
          console.log(error);
        }
      };
      fetchData();*/
      const unsub = onSnapshot(
        collection(db, "users"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) =>{
            list.push({id: doc.id, ...doc.data()});
          });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );

      return () => {
        unsub();
      }
    },[]);

  const handleDelete = async (id) => {
    try{
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    }catch(error){
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 60,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                <Link to="/employees" style={{ textDecoration: "none" }}>
                  <div className="viewButton">
                    <img className="delete_icon" src={delete_icon} alt="delete"/>
                  </div>
                </Link>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <label className="em_head">Employee Management</label>
      <div className="datatableTitle">
        <Link to="/register" className="link">
          <span className="link_span">Add New Employee</span>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Employee_List;