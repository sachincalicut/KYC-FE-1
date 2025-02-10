import React from 'react';
import Header from "@/app/(components)/header/page";
import Banner from "../banner/page";
import Footer from "../footer/page";
import UserData from "../users/page";
const Dashboard = () => {
  return (
    <>
    <Header />
    <Banner />
    
    <div className="p-10 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      
        <UserData />
      </div>
       
    </div>
    <Footer />
    </>
    
  
  )
}

export default Dashboard;




