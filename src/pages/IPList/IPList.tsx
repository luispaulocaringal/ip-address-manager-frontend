import { Link } from "react-router-dom";

import Table from "../../components/Table/Table";

interface DataRow {
  id: number;
  ipAddress: string;
  label: string;
}

interface Column {
  name: string;
  selector: (row: DataRow) => any;
}

function IPList() {
  const columns: Column[] = [
    {
      name: 'IP Address',
      selector: row => row.ipAddress,
    },
    {
      name: 'Label',
      selector: row => row.label,
    },
    {
      name: 'Actions',
      selector: row => (
        <div>
          <Link className="btn btn-primary btn-sm me-2" to={`${ row.id }`}>View</Link>
          <Link className="btn btn-secondary btn-sm me-2" to={`edit/${ row.id }`}>Edit</Link>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      ),
    },
  ];
  
  const data = [
      {
      id: 1,
      ipAddress: "192.168.1.1",
      label: "Brodie's IP",
      comment: "IP Address of Brodie's tablet.", 
    },
    {
      id: 2,
      ipAddress: "192.168.1.2",
      label: "Luis' IP",
      comment: "IP Address of Luis' laptop.", 
    },
  ];

  return (
    <div>
      <h1>IP List</h1>
      <p>View all IP Address of all sessions made by the users.</p>
      <Table data={data} columns={columns}/>
    </div>
  );
}

export default IPList;