import { Routes, Route, Link } from "react-router-dom";

// Nested components
function ProfileDetails() {
  return <div className="p-4">This is your profile details.</div>;
}

function ProfileSettings() {
  return <div className="p-4">This is your profile settings.</div>;
}

// Main Profile component with nested routes
export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>

      {/* Navigation links for nested routes */}
      <nav className="mb-6">
        <Link
          to="details"
          className="mr-4 text-blue-500 hover:underline"
        >
          Details
        </Link>
        <Link
          to="settings"
          className="text-blue-500 hover:underline"
        >
          Settings
        </Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        {/* Default route */}
        <Route path="*" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
}
