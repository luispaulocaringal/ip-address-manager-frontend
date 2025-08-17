function IPDetails({ data } : { data:any }) {
  return (
    <>
      <h5 className="card-title">IP Address: {data.ipAddress}</h5>
      <p className="card-text"><strong>ID:</strong> {data.id}</p>
      <p className="card-text"><strong>Date/Time:</strong> {data.dateTime}</p>
      <p className="card-text"><strong>Label:</strong> {data.label}</p>
      <p className="card-text"><strong>Comment:</strong> {data.comment}</p>
    </>
  );
}

export default IPDetails;