import { Link } from "react-router-dom";

import cursor from "../../assets/cursor.svg";
import trash from "../../assets/trash.svg";
import pen from "../../assets/pen.svg";

import "./IPActionButtons.css";

function IPActionButtons({ id }: { id: number }) {
  return (
    <div className="flex items-center gap-2">
      <Link className="mx-1" to={`${ id }`}><img className="action-icon" src={cursor} height={25} alt="View" title="View"/></Link>
      <Link className="mx-1" to={`${ id }/edit`}><img className="action-icon" src={pen} height={25} alt="Edit" title="Edit"/></Link>
      <Link className="mx-1" to={`${ id }/delete`}><img className="action-icon" src={trash} height={25} alt="Delete" title="Delete"/></Link>
    </div>
  );
}

export default IPActionButtons;