import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function CreateEmp() {
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()

  const onFormSubmit=async (newEmpObj) => {
    try{
      setLoading(true)
      let res= await fetch('https://week6-emp-3dj1.onrender.com/employee-api/employees',{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(newEmpObj)
      })
      if(res.status===201){
        navigate("/listofemps")
      }else{
        let errorRes=await res.json()
        throw new Error(errorRes.message || "Something went wrong")
      }
    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }
  }

  if(loading) return <p className='text-center text-4xl'>Loading...</p>
  if(error) return <p className='text-red-500 text-4xl text-center'>{error.message}</p>
  
  return (
    <div className='bg-amber-100 p-5 pt-7 rounded-3xl max-w-svh m-auto shadow-2xl border border-amber-300'>
      <h1 className='text-5xl text-center text-amber-700'>Create New Employee</h1>
      <form className='w-full max-w-md mx-auto p-5' onSubmit={handleSubmit(onFormSubmit)}>
        <input type='text' placeholder='Enter Name' {...register("name")} className='mb-3 border border-amber-300 p-3 w-full rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400' /> 
        <input type='email' placeholder='Enter Email' {...register("email")} className='mb-3 border border-amber-300 p-3 w-full rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400' /> 
        <input type='tel' placeholder='Enter Mobile Number' {...register("mobile")} className='mb-3 border border-amber-300 p-3 w-full rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400' /> 
        <input type='text' placeholder='Enter Designation' {...register("designation")} className='mb-3 border border-amber-300 p-3 w-full rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400' /> 
        <input type='text' placeholder='Enter Company Name' {...register("companyName")} className='mb-3 border border-amber-300 p-3 w-full rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400' />
        <button type='submit' className='mb-3 border border-amber-400 rounded-2xl p-3 block mx-auto bg-amber-300 hover:bg-amber-400 transition text-amber-800 font-semibold'>Add Emp</button> 
      </form>
    </div>
  )
}

export default CreateEmp