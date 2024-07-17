

const Contact = () => {

  const config = 
    { email: "bharathifsdmern@gmail.com",
       phone: "+91 9843394837" 
    };
  return (    
    <section className='flex flex-col py-32 px-5 justify-between bg-primary' id="contact">
      <div className='flex flex-col text-white items-center'>
    
        <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[135px]'>Contact:</h1>
        <p className='mb-5'>
              If you want to discuss more in detail, please contact me 
         </p>
         <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
         <p className="py-2"><span className="font-bold">Phone :</span>{config.phone}</p>
            
        </div>
        
    </section>
  )
}

export default Contact