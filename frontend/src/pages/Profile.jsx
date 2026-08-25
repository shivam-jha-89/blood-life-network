export default function Profile() {
  const token = localStorage.getItem("token");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-xl w-96">
        <h2 className="text-xl font-bold mb-3">Profile</h2>
        {token ? (
          <p>Logged in! Token: {token.substring(0, 10)}...</p>
        ) : (
          <p>Please login first</p>
        )}
      </div>
    </div>
  );
}
