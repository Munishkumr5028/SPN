import React from 'react'
import './Admission.css'

function Admission() {
  return (
    <>
     <div className="login-container">
        <h2>Student Register</h2>
        <form id="loginForm" onsubmit="return validateForm()">
            <div className="form-group">
                <input type="text" id="name" name="name" required placeholder="Student Name"/>
            </div>
    
            <div classNameName="form-group">
                <input type="email" id="email" name="email" required placeholder="Student Email"/>
                <div id="emailError" classNameName="error"></div>
            </div>
    
            <div classNameName="form-group">
                <div classNameName="mobile-wrapper">
                    <select id="countryCode" classNameName="country-code" disabled>
                        <option value="+91" selected>+91</option>
                    </select>
                    <input type="tel" id="mobile" name="mobile" maxlength="10" required placeholder="Student Mobile Number *"/>
                </div>
                <div id="mobileError" classNameName="error"></div>
            </div>
    
            <div classNameName="form-group">
                <select id="subject" name="subject" required>
                    <option value="">--Select Subject--</option>
                    <option value="BCA">BCA</option>
                    <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
                    <option value="B.A. English">B.A. English</option>
                    <option value="B.Com">B.Com</option>
                    <option value="BBA">BBA</option>
                    <option value="B.Sc.">B.Sc.</option>
                    <option value="B.A.">B.A.</option>
                    <option value="B.Sc.Medical">B.Sc.Medical</option>
                    <option value="M.A.">M.A.History</option>
                    <option value="B.Sc.Medical">M.A.English</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="M.Com.">B.Com.</option>
                    <option value="M.Sc.">M.sc.Mathematics</option>
                    <option value="M.Sc.">M.Sc.Physics</option>
                    <option value="M.Sc.">M.Sc.Chemistry</option>
                </select>
            </div>
    
            <button type="submit" classNameName="submit-btn">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Admission