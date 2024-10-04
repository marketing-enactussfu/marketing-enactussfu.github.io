import React, { useState } from 'react';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  // Define form fields
  const formFields = [
    {label: 'First Name', name: 'firstName', type: 'text',placeholder: 'John',required: true,},
    {label: 'Last Name',name: 'lastName', type: 'text', placeholder: 'Smith',required: true,},
    { label: 'Phone',name: 'phone',type: 'tel',placeholder: '+1 (000) 000 0000',required: true,},
    {label: 'Email',name: 'email',type: 'email',placeholder: 'johnsmith@example.com',required: true},
  ];

  return (
    <div className="max-w-lg mx-auto p-8 space-y-5 ">
      <div className='sm:text-md text-base text-[#D00200] font-semibold'>Sponsorship</div>
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">Become a Partner</h1>
      <p className="text-gray-600 mb-8 sm:text-md text-base">
        If you would like to partner with us, fill out the form below and one of our staff members will get back to you.
      </p>

      <p className="text-gray-600 mb-8 sm:text-md text-base flex form-sm:flex-row  flex-col gap-1">Learn about our <a className = 'text-[#E72422] flex flex-row items-center gap-1' >Sponsorship Package 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a></p>

     

      {isSubmitted && (
        <p className="bg-green-100 text-green-600 p-3 rounded mb-4 sm:text-md text-base">
          Thank you! Your submission has been received. We will contact you soon.
        </p>
      )}


      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

      <div className = 'flex sm:flex-row sm:gap-5 flex-col gap-3'>
        {formFields
        .filter((field)=>['firstName','lastName'].includes(field.name))
        .map((field, index) => (
            <div key={index} className={index < 2 ? 'flex-1' : ''}>
              <label className="block text-xs sm:text-sm font-medium text-[#181818]" htmlFor={field.name}>
              <span className = 'font-semibold'>{field.label}</span> <span  className="text-[#5C5C5C] font-light">(required)</span>
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="mt-1 sm:p-2 p-1  border border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500 sm:placeholder:text-sm text-xs hover:border-red-400 sm:placeholder:text-sm text-xs hover:border-red-400 sm:placeholder:text-sm text-xs"
                placeholder={field.placeholder}
              />
            </div>
          ))}
      </div>

   
        {formFields
        .filter((field)=>!['firstName','lastName'].includes(field.name))
        .map((field, index) => (
          <div key={index} className={index < 2 ? 'flex-1' : ''}>
            <label className="block text-xs sm:text-sm font-medium text-[#181818]" htmlFor={field.name}>
            <span className = 'font-semibold'>{field.label}</span> <span  className="text-[#5C5C5C] font-light">(required)</span>
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              // className="mt-1 sm:p-2 p-1  border border-gray-300 rounded w-full focus:ring-blue-500 focus:border-blue-500 sm:placeholder:text-sm text-xs"
              className="mt-1 sm:p-2 p-1 border border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500 sm:placeholder:text-sm text-xs hover:border-red-400"
              placeholder={field.placeholder}
            />
          </div>
        ))}

        {/* Textarea for the message */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
          <span className = 'font-semibold'>Message</span> <span className="text-[#5C5C5C] font-light">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-red-500 focus:border-red-500 sm:placeholder:text-sm text-xs hover:border-red-400 sm:placeholder:text-sm text-xs"
            placeholder="Message about why you would like to partner with us."
            rows="4"
          />
        </div>

        <button
          className="session-button sm:text-md text-base font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;

