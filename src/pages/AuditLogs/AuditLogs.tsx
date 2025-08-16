import Table from "../../components/Table/Table";

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
  
  const data = [
    {
      id: 1,
      ipAddress: "192.168.1.1",
      dateTime: "2023-10-01 12:14:52",
      comment: "Changed Label: Brodie's IP -> Disabled user",
      user: "Super Admin", 
    },
    {
      id: 2,
      ipAddress: "192.168.1.2",
      dateTime: "2023-10-02 18:39:13",
      comment: "Changed Comment: IP Address of Brodie's tablet. -> Disabled user",
      user: "Brodie", 
    },
  ];

  return (
    <div>
      <h1>Audit Logs</h1>
      <p>This page will display audit logs.</p>
      <Table data={data} columns={columns}/>
    </div>
  );
}

export default AuditLogs;