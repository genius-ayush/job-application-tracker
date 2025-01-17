
import './App.css'
import NavItem from './components/NavItem'
import { Briefcase, NotepadText, User } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Building } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Bell } from 'lucide-react';
import ApplicationTable from './components/ApplicationTable';

import Analytics from './components/Analytics';
import Landing from './components/Landing';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    
    <div className='flex h-screen bg-gray-100'>
      <nav className='w-64 bg-white shadow-sm '>
        <div className='p-6 flex items-center gap-1'>
        <Briefcase className='text-blue-400'/>
          <h1 className='text-xl font-bold'>JobTracker</h1>
        </div>

        <div className='space-y-2'>
          <NavLink to={"/applications"}  className={({ isActive }) => {
            return isActive ? "bg-blue-50 text-blue-600" : "text-gray-600";
          }}>
            <NavItem Icon={NotepadText} label='Applications' />
          </NavLink>

          <NavLink to={"/analytics"} className={({ isActive }) => {
            return isActive ? "text-blue-600 bg-blue-100" : "text-gray-600 bg-white";
          }}>
          <NavItem Icon={ChartNoAxesColumnIncreasing} label='Analytics' />
          </NavLink>

          <NavLink to={"/calendar"} className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-600";
          }}>
          <NavItem Icon={Calendar} label='Calendar' />
          </NavLink>

          <NavLink to={"/companies"} className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-600";
          }}>
          <NavItem Icon={Building} label='Companies' />
          </NavLink>

          <NavLink to={"/settings"} className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-600";
          }}>
          <NavItem Icon={Settings} label='Settings' />
          </NavLink>
        </div>
      </nav>

      <div className='flex-1 overflow-auto'>
        <header className='bg-white shadow-sm p-4 flex justify-between items-center'>
          <div className='space-x-2'>
            <input type='text' placeholder='Search...' className='px-4 py-2 border rounded-lg' />
          </div>

          <div className='flex items-center space-x-4'>
            <button>
              <Bell size={20} />
            </button>

            <button>
              <User size={20} />
            </button>
          </div>
        </header>

        <main className='p-6'>

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/applications' element={<ApplicationTable />} />
            <Route path='/analytics' element={<Analytics />} />
            
          </Routes>

        </main>
      </div>
    </div>
  )
}

export default App
