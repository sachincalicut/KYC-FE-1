import React from 'react';


// Get the current year
const currentYear: number = new Date().getFullYear();

const Footer = () => {
  return (
    <>
    <footer className='w-full static bottom-0 bg-gray-100 border p-6'>
        <p className='text-center text-sm text-gray'>
            &copy;&nbsp;<span>{currentYear}</span>&nbsp;Copyright, All right reserved.
        </p>
    </footer>
    </>
  )
}

export default Footer;