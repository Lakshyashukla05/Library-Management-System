
function DashboardHome() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome, Admin</h2>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
          <p className="text-2xl text-blue-600">250</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Overdue Returns</h3>
          <p className="text-2xl text-red-600">15</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Books</h3>
          <p className="text-2xl text-green-600">1200</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow cursor-pointer">
          <h4 className="text-xl font-semibold">Add/Update Books</h4>
          <p>Add or update books in the library.</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow cursor-pointer">
          <h4 className="text-xl font-semibold">User Management</h4>
          <p>Manage user memberships.</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow cursor-pointer">
          <h4 className="text-xl font-semibold">Issue/Return</h4>
          <p>Manage issuing and returning books.</p>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
