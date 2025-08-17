import { Form, Link, useLoaderData } from "react-router-dom";

import PageHeader from "../../../components/PageHeader/PageHeader.tsx";
import IPDetails from "../../../components/IPDetails/IPDetails";

// Temporary data import for demonstration purposes
import { ipListData as data } from "../../../data/data.ts";

function DeleteIP() {
  const data = useLoaderData();

  return (
    <div>
      <PageHeader header="Delete IP" subHeader="This page will allow you to delete an IP address." />
      <div className="card shadow">
        <div className="card-body">
          <IPDetails data={data} />
          <Form method="delete">
            <div className="alert alert-danger mt-3" role="alert">
              <h6>Are you sure you want to delete this IP address? This action cannot be undone.</h6>
              <p>Please enter your password to confirm the deletion.</p>
              <div className="form-group mb-3">
                <label htmlFor="ipAddress">Password</label>
                <input className="form-control form-control-sm" type="password" id="password" name="password"/>
              </div>
              <button type="submit" className="btn btn-danger btn-sm me-2">Delete</button>
              <Link className="btn btn-secondary btn-sm" to="/ip-list">Cancel</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DeleteIP;

export function action({ params }: { params: any }) {
  const ipId = params.id;
  const ipDetail = data.find(ip => ip.id === parseInt(ipId, 10));

  if (!ipDetail) {
    throw new Error(`IP with ID ${ipId} not found`);
  }

  return ipDetail;
}