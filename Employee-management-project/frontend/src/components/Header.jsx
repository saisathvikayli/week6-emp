import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end gap-6 p-5 text-2xl bg-amber-300">
        <NavLink to='' className={({isActive}) => isActive?"text-amber-800 font-bold":""}>Home</NavLink>
        <NavLink to='create-emp' className={({isActive}) => isActive?"text-amber-800 font-bold":""}>CreateEmp</NavLink>
        <NavLink to='listofemps' className={({isActive}) => isActive?"text-amber-800 font-bold":""}>List of Employees</NavLink>
    </nav>
  )
}

export default Header