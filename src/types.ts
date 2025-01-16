export interface Application{
    id: number ;
    jobTitle : string ; 
    company : string ; 
    status : "In Progress" | "Accepted" | "Rejected" ;
    applicationDate : string ; 
}