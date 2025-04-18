
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin" className="block py-2 px-4 hover:bg-gray-700">Home</Link></li>
        <li><Link to="/admin/category" className="block py-2 px-4 hover:bg-gray-700">Category of Books</Link></li>
        <li><Link to="/admin/reports" className="block py-2 px-4 hover:bg-gray-700">Reports</Link></li>
        <li><Link to="/admin/access" className="block py-2 px-4 hover:bg-gray-700">Admin Access</Link></li>
        <li><Link to="/admin/active-users" className="block py-2 px-4 hover:bg-gray-700">Active Users</Link></li>
        <li><Link to="/admin/memberships" className="block py-2 px-4 hover:bg-gray-700">Master Memberships</Link></li>
        <li><Link to="/admin/movies" className="block py-2 px-4 hover:bg-gray-700">Master Movies</Link></li>
        <li><Link to="/admin/books" className="block py-2 px-4 hover:bg-gray-700">Master Books</Link></li>
        <li><Link to="/admin/overdue-returns" className="block py-2 px-4 hover:bg-gray-700">Overdue Returns</Link></li>
        <li><Link to="/admin/pending-requests" className="block py-2 px-4 hover:bg-gray-700">Pending Requests</Link></li>
        <li><Link to="/admin/transactions/check" className="block py-2 px-4 hover:bg-gray-700">Check Book Availability</Link></li>
        <li><Link to="/admin/transactions/issue" className="block py-2 px-4 hover:bg-gray-700">Issue Book</Link></li>
        <li><Link to="/admin/transactions/return" className="block py-2 px-4 hover:bg-gray-700">Return Book</Link></li>
        <li><Link to="/admin/transactions/fine" className="block py-2 px-4 hover:bg-gray-700">Fine Payment</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
