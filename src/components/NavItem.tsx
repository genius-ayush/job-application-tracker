import { LucideIcon } from "lucide-react"

interface NavItemsProps{
    Icon : LucideIcon ; 
    label : string ; 
    isActive ?: boolean ; 
    onClick ?: ()=>void; 
}

function NavItem({Icon , label , isActive , onClick} : NavItemsProps) {
  return (
    <button onClick={onClick} className={`flex items-center px-4 py-2 space-x-2 w-full ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
        <Icon/>
        <span>{label}</span>
    </button>
  )
}

export default NavItem