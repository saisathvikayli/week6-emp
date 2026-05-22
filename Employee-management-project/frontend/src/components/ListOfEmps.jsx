import axios from "axios"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router"

function ListOfEmps() {
  const [emps,setEmps]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const navigate=useNavigate()

  const goToEmployee=(empObj) => navigate('/employee',{state:empObj})
  const goToEditEmp=(empObj) => navigate('/editemployee',{state:empObj})

  const goToDeleteEmp=async(id) => {
    try{
      setLoading(true)
      let res=await axios.delete(`https://week6-emp-3dj1.onrender.com/employee-api/employees/${id}`)
      if(res.status===200){ getEmps() }
      else{ throw new Error("Failed to delete employee") }
    }catch(err){ setError(err) }
    finally{ setLoading(false) }
  }

  async function getEmps(){
    try{
      let res=await axios.get("https://week6-emp-3dj1.onrender.com/employee-api/employees")
      if(res.status===200){ setEmps(res.data.payload) }
    }catch(err){ setError(err) }
  }
  
  useEffect(() => { getEmps() },[])
  
  if(loading) return <p className='text-center text-4xl'>Loading...</p>
  if(error) return <p className='text-red-500 text-4xl text-center'>{error.message}</p>
    
  return (
    <div>
      <h1 className="text-4xl text-center p-6 text-amber-700 font-semibold">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-amber-50 border border-amber-200 p-5 rounded-2xl text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="font-semibold text-amber-800">{empObj.name}</p>
            <p className="text-gray-500 text-sm">{empObj.email}</p>
            <div className="flex justify-center p-3 gap-3">
              <button onClick={() => goToEmployee(empObj)} className="bg-amber-200 p-2 rounded-2xl hover:bg-amber-300 transition">View</button>
              <button onClick={() => goToEditEmp(empObj)} className="bg-amber-200 p-2 rounded-2xl hover:bg-amber-300 transition">Edit</button>
              <button onClick={() => goToDeleteEmp(empObj._id)} className="bg-amber-200 p-2 rounded-2xl hover:bg-amber-300 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )          
}

export default ListOfEmps