import { Application } from "../types";

const STORAGE_KEY = "jobApplications" ; 

export const getStoredApplications = (): Application[]=>{

    try{
        const stored = localStorage.getItem(STORAGE_KEY) ;
        return stored ? JSON.parse(stored) : [] ;
    }catch(err){
        console.error("Error loading from local storage" , err) ; 
        return [] ; 
    }
}

export const saveApplications = (applications: Application[]) : void=>{

    try{
        localStorage.setItem(STORAGE_KEY , JSON.stringify(applications)) ; 
    }catch(error){
        console.log('Error saving to localstorage:' , error) ; 
    }
}