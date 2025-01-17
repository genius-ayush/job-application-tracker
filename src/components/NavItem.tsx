import { LucideIcon } from "lucide-react"

interface NavItemsProps{
    Icon : LucideIcon ; 
    label : string ; 
    isActive ?: boolean ; 
}

function NavItem({Icon , label } : NavItemsProps) {
  return (
    <button  className={`flex items-center px-4 py-2 space-x-2 w-full `}>
        <Icon/>
        <span>{label}</span>
    </button>
  )
}

export default NavItem