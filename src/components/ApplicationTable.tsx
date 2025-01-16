import { useEffect, useState } from "react";
import { Application } from "../types"
import { getStoredApplications , savedApplications} from "../utils/storage";
import { Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle, } from "./ui/dialog";
import ApplicationForm from "./ApplicationForm";

// interface ApplicationTableProps{
//   applications : Application[] ;  
//   onEdit : (application: Application) => void ; 
//   onDelete : (application : Application) => void ; 
// }

function ApplicationTable() {

  const [applications , setApplications] = useState<Application[]>(()=> getStoredApplications()) ; 
  const [isDialogOpen , setIsDialogOpen] = useState(false) ; 
  const [editingApplication , setEditingApplication] = useState<Application | null>(null) ; 

  useEffect(() => {
    if (applications) {
      savedApplications(applications);
    }
  }, [applications]);

  const handleSubmit = ()=>{

  }
  return (
    <div>
      

      <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Job Applications</h2>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={()=>setIsDialogOpen(true)}>Add Application</button>
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
              applications.map((app)=>(
                <tr>
                  <td>{app.jobTitle}</td>
                  <td>{app.company}</td>
                  <td>
                    <span>{app.status}</span>
                  </td>

                  <td>{app.applicationDate}</td>
                  <td>
                    <button >Edit</button>
                    <button >Delete</button>
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
          <ApplicationForm onSubmit={handleSubmit} onClose={()=> setIsDialogOpen(false)}/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ApplicationTable