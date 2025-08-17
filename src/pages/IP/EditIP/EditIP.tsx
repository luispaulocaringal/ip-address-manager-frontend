import { useLoaderData } from "react-router-dom";

import IPForm from "../../../components/IPForm/IPForm";

function EditIP() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Edit IP</h1>
      <p>This is the Edit IP page.</p>
      <IPForm data={data}/>
    </div>
  );
}

export default EditIP;