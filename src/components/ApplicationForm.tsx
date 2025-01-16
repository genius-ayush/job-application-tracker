
import { Application } from "@/types"
import { useState } from "react";

interface ApplicationFormProps{
  application ?: Application ; 
  onSubmit : ()=> void ; 
  onClose : ()=> void ; 
}

function ApplicationForm({application , onSubmit , onClose} : ApplicationFormProps) {

  const [formData , setFormData] = useState<Application>(application || ({id:Date.now() , jobTitle: '' , company:'' , status: 'In Progress' , applicationDate: new Date().toISOString().split('T')[0]}))
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Job Title</label>
        <input type="text" className="w-full p-2 border rounded"/>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <input type="text" className="w-full p-2 border rounded"/>
      </div>

      <div>
        <label className="text-sm block font-medium mb-1">Status</label>
        <select className="w-full p-2 border rounded">
          <option>In Progress</option>
          <option>Accepted</option>
          <option>Rejected</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Application Date</label>
        <input type="date" className="w-full p-2 border rounded"/>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="px-2 py-2 border rounded" onClick={onClose}>Cancel</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={onSubmit}>Save</button>
      </div>
    </form>
  )
}

export default ApplicationForm