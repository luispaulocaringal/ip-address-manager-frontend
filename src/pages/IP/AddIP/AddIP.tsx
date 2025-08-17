import IPForm from "../../../components/IPForm/IPForm";
import PageHeader from "../../../components/PageHeader/PageHeader";

function AddIP() {
  return (
    <div>
      <PageHeader header="Add IP" subHeader="This is the Add IP page." />
      <IPForm/>
    </div>
  );
}

export default AddIP;