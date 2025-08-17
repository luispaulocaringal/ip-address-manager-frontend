import { Link, useLoaderData } from "react-router-dom";

import IPDetails from "../../../components/IPDetails/IPDetails.tsx";

// Temporary data import for demonstration purposes
import { ipListData as data } from "../../../data/data.ts";

function ViewIP() {
  const data = useLoaderData();

  return (
    <div>
      <h1>IP Detail Page</h1>
      <p>This is the detail page for a specific IP address.</p>
      <div className="card">
        <div className="card-body">
          <IPDetails data={data} />
          <Link className="btn btn-primary btn-sm me-2 my-1" to="edit">Edit</Link>
          <Link className="btn btn-secondary btn-sm me-2" to="..">Back</Link>
          <Link className="btn btn-danger btn-sm my-1" to="delete">Delete</Link>
        </div>
      </div>
    </div>
  );
}

export default ViewIP;

export function loader({ params }: { params: any}) {
  const ipId = params.id;
  const ipDetail = data.find(ip => ip.id === parseInt(ipId, 10));
  
  if (!ipDetail) {
    throw new Error(`IP with ID ${ipId} not found`);
  }
  
  return ipDetail;
}