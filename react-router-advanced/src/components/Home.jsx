import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to React Router Advanced</h1>
      <nav style={{ marginTop: "1rem" }}>
        <Link to="/profile/details" style={{ marginRight: "1rem" }}>
          Profile Details
        </Link>
        <Link to="/profile/settings">Profile Settings</Link>
      </nav>
    </div>
  );
}

export default Home;
