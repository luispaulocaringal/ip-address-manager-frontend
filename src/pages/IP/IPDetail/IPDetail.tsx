import { Link, useLoaderData } from "react-router-dom";

// Temporary data import for demonstration purposes
import { ipListData as data } from "../../../data/data.ts";

function IPDetail() {
  const ipDetail = useLoaderData();

  return (
    <div>
      <h1>IP Detail Page</h1>
      <p>This is the detail page for a specific IP address.</p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">IP Address: {ipDetail.ipAddress}</h5>
          <p className="card-text"><strong>ID:</strong> {ipDetail.id}</p>
          <p className="card-text"><strong>Date/Time:</strong> {ipDetail.dateTime}</p>
          <p className="card-text"><strong>Label:</strong> {ipDetail.label}</p>
          <p className="card-text"><strong>Comment:</strong> {ipDetail.comment}</p>
          <button className="btn btn-primary me-2">Edit</button>
          <Link className="btn btn-secondary me-2" to="..">Back</Link>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default IPDetail;

export function loader({ params }: { params: any}) {
  const ipId = params.id;
  const ipDetail = data.find(ip => ip.id === parseInt(ipId, 10));
  
  if (!ipDetail) {
    throw new Error(`IP with ID ${ipId} not found`);
  }
  
  return ipDetail;
}