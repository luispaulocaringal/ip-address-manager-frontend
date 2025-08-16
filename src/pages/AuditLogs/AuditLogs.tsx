import Table from "../../components/Table/Table.tsx";

import { auditLogData } from "../../data/data.ts";

interface DataRow {
  id: number;
  ipAddress: string;
  dateTime: string;
  comment: string;
  user: string;
}

interface Column {
  name: string;
  selector: (row: DataRow) => any;
  maxWidth: string;
  wrap: boolean;
}

function AuditLogs() {
  const columns: Column[] = [
    {
      name: 'Log ID',
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
      name: 'Note',
      selector: row => row.comment,
      wrap: true,
      maxWidth: 'auto',
    },
    {
      name: 'User',
      selector: row => row.user,
      wrap: true,
      maxWidth: '200px',
    },
  ];

  return (
    <div>
      <h1>Audit Logs</h1>
      <p>This page will display audit logs.</p>
      <Table data={auditLogData} columns={columns}/>
    </div>
  );
}

export default AuditLogs;