import { Form, Link } from "react-router-dom";

function IPForm({ data } : { data?:any }) {
  return (
    <div className="card shadow rounded p-3">
      <div className="card-body">
        <Form method="post">
          <div className="row mb-3">
            <div className="form-group col-md-12">
              <label htmlFor="ipAddress">IP Address (IPv4/IPv6):</label>
              <input className="form-control" type="text" id="ipAddress" name="ipAddress" defaultValue={data?.ipAddress}/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col-md-12">
              <label htmlFor="label">Label:</label>
              <input className="form-control" type="text" id="label" name="label" defaultValue={data?.label}/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col-md-12">
              <label htmlFor="comments">Comments:</label>
              <textarea className="form-control" id="ipAddcommentsress" name="comments" defaultValue={data?.comment}></textarea>
            </div>
          </div>
          <div>
            <button className="btn btn-primary btn-sm" type="submit">Submit</button>
            <Link className="btn btn-danger btn-sm ms-2" to="..">Cancel</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default IPForm;

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const ipAddress = formData.get("ipAddress");
  const label = formData.get("label");
  const comments = formData.get("comments");
  // Here you would typically handle the form submission, e.g., save to a database
  console.log("IP Address:", ipAddress);
  console.log("Label:", label);
  console.log("Comments:", comments);
  return { success: true, message: "IP Address submitted successfully!" };
  // In a real application, you would return a redirect or some response
  // indicating success or failure of the operation.
}