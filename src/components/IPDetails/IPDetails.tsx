function IPDetails({ data } : { data:any }) {
  return (
    <>
      <h5 className="card-title my-1">IP Address: {data.ipAddress}</h5>
      <p className="card-text my-1"><strong>ID:</strong> {data.id}</p>
      <p className="card-text my-1"><strong>Date/Time:</strong> {data.dateTime}</p>
      <p className="card-text my-1"><strong>Label:</strong> {data.label}</p>
      <p className="card-text my-1"><strong>Comment:</strong> {data.comment}</p>
    </>
  );
}

export default IPDetails;