import { Link } from "react-router-dom";

import Table from "../../../components/Table/Table";

import { ipListData as data } from "../../../data/data.ts";

interface DataRow {
  id: number;
  ipAddress: string;
  dateTime: string;
  label: string;
}

interface Column {
  name: string;
  selector: (row: DataRow) => any;
  wrap: boolean;
  maxWidth: string;
}

function IPList() {
  const columns: Column[] = [
    {
      name: 'IP ID',
      selector: row => row.id,
      wrap: true,
      maxWidth: '50px',
    },
    {
      name: 'IP Address',
      selector: row => row.ipAddress,
      wrap: true,
      maxWidth: '150px',
    },
    {
      name: 'Date/Time',
      selector: row => row.dateTime,
      wrap: true,
      maxWidth: '200px',
    },
    {
      name: 'Label',
      selector: row => row.label,
      wrap: true,
      maxWidth: 'auto',
    },
    {
      name: 'Actions',
      selector: row => (
        <div>
          <Link className="btn btn-primary btn-sm me-2 my-1" to={`${ row.id }`}>View</Link>
          <Link className="btn btn-secondary btn-sm me-2 my-1" to={`edit/${ row.id }`}>Edit</Link>
          <button className="btn btn-danger btn-sm my-1">Delete</button>
        </div>
      ),
      wrap: true,
      maxWidth: '300px',
    },
  ];

  return (
    <div>
      <h1>IP List</h1>
      <p>View all IP Address of all sessions made by the users.</p>
      <Link className="btn btn-primary mb-3 float-end" to="add">Add IP</Link>
      <Table data={data} columns={columns}/>
    </div>
  );
}

export default IPList;