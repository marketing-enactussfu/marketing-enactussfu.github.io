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
      <div className='text-sm text-[#D00200] font-semibold text-red'>Sponsorship</div>
      <h1 className="text-3xl font-bold text-black mb-4">Become a Partner</h1>
      <p className="text-gray-600 mb-8">
        If you would like to partner with us, fill out the form below and one of our staff members will get back to you.
      </p>

      {isSubmitted && (
        <p className="bg-green-100 text-green-600 p-3 rounded mb-4">
          Thank you! Your submission has been received. We will contact you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {formFields.map((field, index) => (
          <div key={index} className={index < 2 ? 'flex-1' : ''}>
            <label className="block text-sm font-medium text-gray-700" htmlFor={field.name}>
              {field.label} <span className="text-gray-400">(required)</span>
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-blue-500 focus:border-blue-500"
              placeholder={field.placeholder}
            />
          </div>
        ))}

        {/* Textarea for the message */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message <span className="text-gray-400">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-blue-500 focus:border-blue-500"
            placeholder="Message about why you would like to partner with us."
            rows="4"
          />
        </div>

        <button
          className="session-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;

