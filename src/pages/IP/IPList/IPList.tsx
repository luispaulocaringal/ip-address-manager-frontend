import { Link, useLoaderData } from "react-router-dom";

import PageHeader from "../../../components/PageHeader/PageHeader";
import IPActionButtons from "../../../components/IPActionButtons/IPActionButtons.tsx";
import Table from "../../../components/Table/Table";

import { ipListData as data } from "../../../data/data.ts";

interface DataRow {
  id: number;
  ipAddress: string;
  dateTime: string;
  label: string;
}

interface Column {
  name: string;
  selector: (row: DataRow) => any;
  wrap: boolean;
  maxWidth: string;
  center?: boolean;
}

function IPList() {
  const data = useLoaderData() as DataRow[];

  const columns: Column[] = [
    {
      name: 'IP ID',
      selector: row => row.id,
      wrap: true,
      maxWidth: '50px',
    },
    {
      name: 'IP Address',
      selector: row => row.ipAddress,
      wrap: true,
      maxWidth: '150px',
    },
    {
      name: 'Date/Time',
      selector: row => row.dateTime,
      wrap: true,
      maxWidth: '200px',
    },
    {
      name: 'Label',
      selector: row => row.label,
      wrap: true,
      maxWidth: 'auto',
    },
    {
      name: 'Actions',
      selector: row => (
        <div>
          <IPActionButtons id={row.id} />
        </div>
      ),
      wrap: true,
      maxWidth: '150px',
      center: true,
    },
  ];

  return (
    <div>
      <PageHeader header="IP List" subHeader="View all IP Address of all sessions made by the users." />
      <Link className="btn btn-primary btn-sm mb-3 float-end" to="add">Add IP</Link>
      <Table data={data} columns={columns}/>
    </div>
  );
}

export default IPList;

export function loader() {
  return data;
}