import ActionButtons from "../ActionButtons/ActionButtons";

function Card({ actionButtons, children }: { actionButtons?: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="row mb-4">
          <div className="col-md-12">
            <ActionButtons actionButtons={actionButtons}/>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Card;