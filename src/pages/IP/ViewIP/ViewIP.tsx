import { Link, useLoaderData } from "react-router-dom";

import PageHeader from "../../../components/PageHeader/PageHeader.tsx";
import Card from "../../../components/Card/Card.tsx";
import IPDetails from "../../../components/IPDetails/IPDetails.tsx";

// Temporary data import for demonstration purposes
import { ipListData as data } from "../../../data/data.ts";

import pen from "../../../assets/pen.svg";
import trash from "../../../assets/trash.svg";

function ViewIP() {
  const data = useLoaderData();

  const actionButtons = (
    <>
      <Link className="mx-1" to="edit"><img className="action-icon" src={pen} height={25} alt="Edit" title="Edit"/></Link>
      <Link className="mx-1" to="delete"><img className="action-icon" src={trash} height={25} alt="Delete" title="Delete"/></Link>
    </>
  )

  return (
    <div>
      <PageHeader header="IP Details" subHeader="This is the detail page for a specific IP address." />
      <Card
        actionButtons={actionButtons}
      >
        <IPDetails data={data} />
      </Card>
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