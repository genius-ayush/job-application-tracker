
import './App.css'
import NavItem from './components/NavItem'
import { NotepadText, User } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Building } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Bell } from 'lucide-react';
import ApplicationTable from './components/ApplicationTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {



  return (

    <div className='flex h-screen bg-gray-100'>
      <nav className='w-64 bg-white shadow-sm'>
        <div className='p-6'>
          <h1 className='text-xl font-bold'>JobTracker</h1>
        </div>

        <div className='space-y-2'>
          <NavItem Icon={NotepadText} label='Applications' isActive={true} />

          <NavItem Icon={ChartNoAxesColumnIncreasing} label='Analytics' isActive={false} />

          <NavItem Icon={Calendar} label='Calendar' isActive={false} />

          <NavItem Icon={Building} label='Companies' isActive={false} />

          <NavItem Icon={Settings} label='Settings' isActive={false} />
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
          <Router>
            <Routes>
              <Route path='/' element={<ApplicationTable />} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>

  )
}

export default App
