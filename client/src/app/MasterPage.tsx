import React from 'react'
import Navbar from "@/app/(components)/Navbar";

const MasterPage = ({children}:{children: React.ReactNode}) => {
    return (
        <div className={`light flex bg-gray-50 text-gray-900 min-h-screen`}>
           Sidebar
           <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}>
           {children}
           </main>
           
       <Navbar/>
           Master Page 
        </div>
    )
};


export default MasterPage;