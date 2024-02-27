import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all form fields are filled
    if (formData.firstName && formData.lastName && formData.email) {
      // Add your sign-up logic here, for example, send the form data to a server
      console.log('Form submitted:', formData);
      // Reset the form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
      // Set a success message
      setSubmitMessage('Formularen blev sendt med succes!');
    } else {
      // Set an error message
      setSubmitMessage('Please fill in all fields');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Tilmeld</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              Fornavn
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Efternavn
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          {/* No password field */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo"
          >
            Tilmeld
          </button>
        </form>
        {/* Display the submit message */}
            {submitMessage && (
            <div className={`mt-4 text-${submitMessage.includes('successfully') ? 'green' : 'red'}-500`}>
                {submitMessage}
            </div>
            )}

      </div>
    </div>
  );
};

export default SignUp;
