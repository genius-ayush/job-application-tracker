import { useState } from "react";
import { Card, CardContent } from "./ui/card"
import { Application } from "@/types";
import { getStoredApplications } from "@/utils/storage";

function Analytics() {
  const applications = useState<Application[]>(() => getStoredApplications());
  console.log(applications[0]) ; 
  const stats ={
    total : applications[0].length ,
    inProgress : applications[0].filter(app=>app.status === 'In Progress').length  , 
    accepted : applications[0].filter(app=>app.status === 'Accepted').length  , 
    rejected : applications[0].filter(app=>app.status === 'Rejected').length  , 

  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-medium mb-2">Total Applications</h3>
          <p className="text-3xl font-bold">{stats.total}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="text-lg font-medium mb-2">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.inProgress}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="text-lg font-medium mb-2">Accepted</h3>
          <p className="text-3xl font-bold text-green-600">{stats.accepted}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="text-lg font-medium mb-2">Rejected</h3>
          <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
        </CardContent>
      </Card>

      
    </div>
  )
}

export default Analytics