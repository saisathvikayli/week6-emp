import { useLocation } from "react-router"

function Employee() {
  const{ state }=useLocation()

  return (
    <div className="bg-amber-50 border border-amber-200 shadow-2xl rounded-3xl p-10 w-full max-w-md transform transition duration-300 hover:scale-105">
      <h1 className="text-3xl font-bold text-amber-700 mb-6">Employee Details</h1>
      <p className="mb-2"><span className="font-semibold text-amber-800">Name:</span> {state.name}</p>
      <p className="mb-2"><span className="font-semibold text-amber-800">Email Id:</span> {state.email}</p>
      <p className="mb-2"><span className="font-semibold text-amber-800">Mobile Number:</span> {state.mobile}</p>
      <p className="mb-2"><span className="font-semibold text-amber-800">Designation:</span> {state.designation}</p>
      <p className="mb-2"><span className="font-semibold text-amber-800">Company Name:</span> {state.companyName}</p>
    </div>
  )
}

export default Employee