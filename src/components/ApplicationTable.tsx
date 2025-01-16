import { useEffect, useState } from "react";
import { Application } from "../types"
import { getStoredApplications, saveApplications } from "../utils/storage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import ApplicationForm from "./ApplicationForm";
import { SquarePen, Trash2 } from "lucide-react";


function ApplicationTable() {

  const [applications, setApplications] = useState<Application[]>(() => getStoredApplications());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingApplication, setEditingApplication] = useState<Application | null>(null);

  useEffect(() => {
    if (applications) {
      console.log("changed") ; 
      saveApplications(applications);
    }
  }, [applications]);

  const handleSubmit = (formData: Application) => {
    const newApplications = editingApplication
      ? applications.map(app => app.id === editingApplication.id ? formData : app)
      : [...applications, { ...formData, id: Date.now() }];

    setApplications(newApplications);
    setEditingApplication(null);
  };

  const handleEdit = (application : Application)=>{
    setEditingApplication(application) ; 
    setIsDialogOpen(true) ; 
  }

  const handleDelete =(application : Application)=>{
    const newApplications = applications.filter(app=>app.id !== application.id) ;
    setApplications(newApplications) ; 
  }

  const getStatusColor = (status: Application['status'])=>{
    
    if(status === 'In Progress'){
      
      return 'bg-yellow-100 text-yellow-800'

    }else if(status === 'Accepted'){

      return 'bg-green-100 text-green-800'

    }else if(status === 'Rejected'){
      return 'bg-red-100 text-red-800'
    }else{
      return 'bg-gray-100'
    }
  }

  return (
    <div>


      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Job Applications</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => setIsDialogOpen(true)}>Add Application</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-4">Job Title</th>
              <th className="p-4">Company</th>
              <th className="p-4">Status</th>
              <th className="p-4">Application</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              applications.map((app) => (
                <tr key={app.id} className="border-t">
                  <td className="p-4">{app.jobTitle}</td>
                  <td className="p-4">{app.company}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(app.status)}`}>{app.status}</span>
                  </td>

                  <td className="p-4">{app.applicationDate}</td>
                  <td className="p-4 flex gap-4">
                    <button onClick={()=>handleEdit(app)}> <SquarePen className="text-blue-500" size={16}/></button>
                    <button onClick={()=>handleDelete(app)}><Trash2 className="text-red-600" size={16}/></button>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingApplication ? 'Edit Application' : 'Add Application'}
            </DialogTitle>
          </DialogHeader>
          <ApplicationForm onSubmit={handleSubmit} onClose={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ApplicationTable