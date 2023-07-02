import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import "./Form.css";

// function Form() {
//   return (
//     <div className="form-container">
//       <form action="/submit" method="POST">
//         <div className="form-text">Apply For This Job</div>
//         <label htmlFor="first-name">First Name*</label>
//         <label htmlFor="last-name">Last Name* </label>
//         <input type="text" id="first-name"/>
//         <input type="text" id="last-name"/>
//         <label htmlFor="phone" id="phone">Phone*</label>
//         <label htmlFor="email">Email*</label>
//         <input type="text" id="phone" placeholder="123-456-789"/>
//         <input type="text" id="email" placeholder="ex: info@mysite.com"/>
//         <label htmlFor="link-resume">Link to CV/Resume *</label>
//         <input type="text" id="link-resume"/>
//         <label htmlFor="linkedin">LinkedIn URL</label>
//         <label htmlFor="other-website">Other Website</label>
//         <input type="text" id="linkedin"/>
//         <input type="text" id="other-website"/>
//         <label htmlFor="additional-comments">Additonal Comments</label>
//         <input type="text" id="additional-comments" placeholder="Add anything else you want to share"/>
//         <Button>Apply now</Button>
//       </form>
//     </div>
//   );
// };
function Form() {
  return (
    <div className="form-container">
      <form action="/submit" method="POST" className="form-grid">
      <table>
<thead>
  <tr>
    <th><label htmlFor="first-name">Apply to Job</label></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><label htmlFor="first-name">First Name*</label></td>
    <td><label htmlFor="last-name">Last Name* </label></td>
  </tr>
  <tr>
    <td><input type="text" id="first-name" required /></td>
    <td><input type="text" id="last-name" required /></td>
  </tr>
  <tr>
    <td><label htmlFor="phone" id="phone">Phone*</label></td>
    <td><label htmlFor="email">Email*</label></td>
  </tr>
  <tr>
    <td><input type="text" id="phone" placeholder="123-456-789" required/></td>
    <td><input type="text" id="email" placeholder="ex: info@mysite.com" required/></td>
  </tr>
  <tr>
    <td ><label htmlFor="link-resume">Link to CV/Resume *</label></td>
  </tr>
  <tr>
    <td ><input type="text" id="link-resume" className="extra-input-width" required/></td>
  </tr>
  <tr>
    <td><label htmlFor="linkedin">LinkedIn URL</label></td>
    <td><label htmlFor="other-website">Other Website</label></td>
  </tr>
  <tr>
    <td><input type="text" id="linkedin"/></td>
    <td><input type="text" id="other-website"/></td>
  </tr>
  <tr>
    <td><label htmlFor="additional-comments">Additonal Comments</label></td>
    <td></td>
  </tr>
  <tr>
    <td><input type="text" id="additional-comments" className="extra-input-width" placeholder="Add anything else you want to share"/></td>
  </tr>
  <tr>
    <td><Button>Apply now</Button></td>
    <td></td>
  </tr>
</tbody>
</table>
      </form>
    </div>
  );
}


export default Form;

// Attach Resume*
// Implement different language options
// Add pages and show what represents it [My info, my experience, application questions, Terms and condtions, Review]
