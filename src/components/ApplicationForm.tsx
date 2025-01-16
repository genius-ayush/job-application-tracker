
import { Application } from "@/types"
import { useState } from "react";

interface ApplicationFormProps{
  application ?: Application ; 
  onSubmit : (data : Application)=> void ; 
  onClose : ()=> void ; 
}

function ApplicationForm({application , onSubmit , onClose} : ApplicationFormProps) {

  const [formData , setFormData] = useState<Application>(application || ({id:Date.now() , jobTitle: '' , company:'' , status: 'In Progress' , applicationDate: new Date().toISOString().split('T')[0]}))

  let handleSubmit = (e : React.FormEvent)=>{
    e.preventDefault() ; 
    onSubmit(formData)
    onClose() ; 
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">Job Title</label>
        <input type="text" value={formData.jobTitle} onChange={(e)=>setFormData({...formData , jobTitle:e.target.value})} className="w-full p-2 border rounded" required/>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <input type="text" className="w-full p-2 border rounded" value={formData.company} onChange={(e)=>setFormData({...formData , company: e.target.value})} required/>
      </div>

      <div>
        <label className="text-sm block font-medium mb-1">Status</label>
        <select className="w-full p-2 border rounded" value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value as Application['status']})}>
          <option>In Progress</option>
          <option>Accepted</option>
          <option>Rejected</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Application Date</label>
        <input type="date" className="w-full p-2 border rounded" value={formData.applicationDate} onChange={(e)=> setFormData({...formData , applicationDate:e.target.value})}/>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="px-2 py-2 border rounded" onClick={onClose}>Cancel</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">Save</button>
      </div>
    </form>
  )
}

export default ApplicationForm