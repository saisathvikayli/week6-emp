import { useNavigate } from "react-router"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center p-10 bg-amber-100 rounded-3xl shadow-xl max-w-lg border border-amber-300 mb-10">
        <div className="text-6xl mb-4">👩‍💻</div>
        <h1 className="text-4xl font-bold text-amber-700 mb-3">Employee Manager</h1>
        <p className="text-gray-500 text-lg mb-6">Manage your employees effortlessly — create, view, edit, and delete records all in one place.</p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        <div onClick={() => navigate('/create-emp')} className="cursor-pointer bg-amber-100 border border-amber-300 rounded-2xl p-6 text-center hover:bg-amber-200 transition hover:-translate-y-1 transform shadow-md">
          <div className="text-4xl mb-3">🤚</div>
          <h2 className="text-xl font-semibold text-amber-800">Add Employee</h2>
          <p className="text-gray-500 text-sm mt-2">Create a new employee record</p>
        </div>
        <div onClick={() => navigate('/listofemps')} className="cursor-pointer bg-amber-100 border border-amber-300 rounded-2xl p-6 text-center hover:bg-amber-200 transition hover:-translate-y-1 transform shadow-md">
          <div className="text-4xl mb-3">👥</div>
          <h2 className="text-xl font-semibold text-amber-800">View Employees</h2>
          <p className="text-gray-500 text-sm mt-2">Browse all employee records</p>
        </div>
        <div className="bg-amber-100 border border-amber-300 rounded-2xl p-6 text-center shadow-md">
          <div className="text-4xl mb-3">📜</div>
          <h2 className="text-xl font-semibold text-amber-800">Manage Records</h2>
          <p className="text-gray-500 text-sm mt-2">Edit or delete existing records</p>
        </div>
      </div>
    </div>
  )
}

export default Home