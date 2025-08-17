import { useNavigate } from "react-router-dom";

import back from "../../assets/back.svg";

function ActionButtons({ actionButtons }: { actionButtons?: React.ReactNode }) {
  let navigate = useNavigate();

  return (
    <div className="d-flex">
      <img className="action-icon me-2 my-auto" src={back} height={25} alt="Back" title="Back" onClick={() => navigate(-1)}/>
      <div className="vr"></div>
      <div className="ms-3">
        {actionButtons}
      </div>
    </div>
  );
}

export default ActionButtons;