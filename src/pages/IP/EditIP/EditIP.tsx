import { useLoaderData } from "react-router-dom";

import PageHeader from "../../../components/PageHeader/PageHeader";
import IPForm from "../../../components/IPForm/IPForm";

function EditIP() {
  const data = useLoaderData();

  return (
    <div>
      <PageHeader header="Edit IP" subHeader="This is the Edit IP page." />
      <IPForm data={data}/>
    </div>
  );
}

export default EditIP;