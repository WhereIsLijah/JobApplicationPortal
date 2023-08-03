import React from 'react';
import { useState } from 'react';
import { Button } from './Button';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    linkresume: '',
    linkedin: '',
    otherwebsite: '',
    additionalcomments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      try{
        const response = await fetch("ParseUrlHere", {
          method:"POST",
            headers: {
              'Content-Type': 'application/json',
            },
          body : JSON.stringify(formData),
        });
        if (response.ok) {
          console.log("Request Successful");
        }
          else{
          console.log("Request failed");
          }
         } catch(err) {
          console.log("err");
      }
    };
    

  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>
                <label>Apply to Job</label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstname">First Name *</label>
              </td>
              <td>
                <label htmlFor="lastname">Last Name *</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone">Phone *</label>
              </td>
              <td>
                <label htmlFor="email">Email *</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123-456-789"
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ex: info@mysite.com"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="linkresume">Link to CV/Resume *</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="linkresume"
                  name="linkresume"
                  value={formData.linkresume}
                  onChange={handleChange}
                  className="extra-input-width"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="linkedin">LinkedIn URL</label>
              </td>
              <td>
                <label htmlFor="otherwebsite">Other Website</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="otherwebsite"
                  name="otherwebsite"
                  value={formData.otherwebsite}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="additionalcomments">Additional Comments</label>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  id="additionalcomments"
                  className="extra-input-width"
                  placeholder="Add anything else you want to share"
                  name="additionalcomments"
                  value={formData.additionalcomments}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button>Apply now</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Form;


// Implement different language options
// Add pages and show what represents it [My info, my experience, application questions, Terms and condtions, Review]
// To handle sensitive data https://www.geeksforgeeks.org/protecting-sensitive-information-while-deploying-django-project/
