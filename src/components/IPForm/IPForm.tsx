import { Form } from "react-router-dom";

function IPForm() {
  return (
    <div className="card shadow rounded p-3">
      <div className="card-body">
        <Form method="post">
          <div className="row mb-3">
            <div className="form-group col-md-12">
              <label htmlFor="ipAddress">IP Address (IPv4/IPv6):</label>
              <input className="form-control" type="text" id="ipAddress" name="ipAddress" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col-md-12">
              <label htmlFor="label">Label:</label>
              <input className="form-control" type="text" id="label" name="label" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col-md-12">
              <label htmlFor="comments">Comments:</label>
              <textarea className="form-control" id="ipAddcommentsress" name="comments"></textarea>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default IPForm;