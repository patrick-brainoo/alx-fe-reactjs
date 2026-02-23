import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details" style={{ marginRight: "1rem" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <div style={{ marginTop: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
