import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="container-fluid">
      <h2>An error occured.</h2>
      <p>Page not found. Go back to <Link to="/">Home</Link>.</p>
    </div>
  )
}

export default Error;