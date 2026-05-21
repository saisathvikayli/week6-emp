function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-10 bg-white rounded-3xl shadow-xl max-w-lg">
        <div className="text-6xl mb-4">👥</div>
        <h1 className="text-4xl font-bold text-indigo-700 mb-3">Welcome to EmpManager</h1>
        <p className="text-gray-500 text-lg mb-6">Manage your employees effortlessly — create, view, edit, and delete records all in one place.</p>
        <div className="flex justify-center gap-4">
          <a href="/listofemps" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">View Employees</a>
          <a href="/createemp" className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition">Add Employee</a>
        </div>
      </div>
    </div>
  )
}

export default Home