import DataTable from "react-data-table-component";

function Table({data, columns } : { data:any, columns:any }) {
  const ExpandedComponent = ({ data } : { data:any }) => (
    <div className="p-3">
      <p><strong>Comment:</strong> {data.comment}</p>
    </div>
  );

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        fixedHeaderScrollHeight="300px"
        highlightOnHover
        pagination
        pointerOnHover
        responsive
        selectableRowsSingle
        striped
        subHeaderWrap
      />
    </div>
  );
}

export default Table;