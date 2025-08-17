import PageHeader from "../../components/PageHeader/PageHeader";

function Home() {
  return (
    <div>
      <PageHeader header="Home" subHeader="This is a summary of things you need to know about this web application." />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Welcome to the IP Management System</h5>
          <hr/>
          <p className="card-text">This application allows you to manage IP addresses, view audit logs, and perform various administrative tasks.</p>
          <p className="card-text">Use the navigation menu to access different sections of the application.</p>
          <hr/>
          <p className="card-text">
            Demo project created by <strong>Luis Caringal</strong> for his application for <strong>Senior Full Stack Developer</strong> role at <strong>Techlint</strong>. This project uses <strong>ReactJS</strong> as its frontend framework,
            and <strong>PHP Laravel</strong> for the backend server. The database used is <strong>MySQL</strong>. This project is contained in a <strong>Docker</strong> container, which can be run locally or deployed to a server.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;