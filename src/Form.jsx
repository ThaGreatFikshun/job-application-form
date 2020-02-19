import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './form.css';
import '.logo.svg'

class Form extends React.Component {
    render(){
        return (
 <div className = 'container change-width'>
     <div id="heading"><h1>JOB APPLICATION FORM</h1></div>

          <legend><span></span> Personal Details</legend>
          <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="surname" />
    </div>
    </div>
    <div className = 'row margin-difference'>
    <div class="col">
      <input type="text" class="form-control" placeholder="state" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="city" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="zip code" />
    </div>

  </div><br />
  <legend><span></span>ANY PLACE PREVIOUSLY WORKED</legend>
  <div class="row ">
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label class="form-check-label" for="gridRadios1">
            YES
          </label>

        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label class="form-check-label" for="gridRadios2">
            NO
          </label>
        </div>
        </div>
  </div><br/>
  <legend>LAST HELD POSITION</legend>
  <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Employer/Company Name" />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Address" />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Phone Number like 07123456789" />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Email like fikshun@gmail.com" />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Which Responsibilities Did You Take...like Cashier" />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
    <label for="birthday">From:</label>
  <input type="date" id="birthday" name="birthday" />   

  
  <label for="birthday">To:</label>
  <input type="date" id="birthday" name="birthday" />
    </div>
    
</div><br />
    <legend>PERSONAL CONTACT</legend>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Full Names like Fikshun.." />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Phone Number like 07123456.." />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Address...P.O BOX" />
    </div>
    </div>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Email Address like fikshun@gmail.com" />
    </div>
    </div><br />
    <legend>DOCUMENTS TO ATTACH</legend>
    <div class="row margin-difference">
    <div class="col">
    <label>Attach Resume</label><br/>
    <input type="file" class="resume" id="resume" />
    </div>
    <div class="col">
    <label>Attach Any Other Documents</label><br/>
    <input type="file" class="resume" id="resume" />
    </div>

    </div>
    <div class="row margin-difference">
     <div class="col">
    <input type="text" class="form-control" placeholder="have you filled all the section?
    if yes, click Apply button below.." disabled/>
    </div>
    </div>
    <div class="row margin-difference" id="bttn">
     <div class="btn">
    <input type="submit" class="form-control" placeholder="Apply"/>
    </div>
    </div>
</form>
</div>
         

        //   <legend> ANY PLACE WORKED FOR PREVIOUSLY</legend>
        //   <tr>
        //     <td>
        //   YES:<input name="Relocate" type="radio" defaultValue="Yes" defaultChecked="checked" />  <br />  <br />  
        //   NO:<input name="Relocate" type="radio" defaultValue="No" />
        //   </td></tr>
        //   </fieldset><fieldset>
      
        //   <legend>LAST HELD POSITION</legend>
        //   <tr>
        //     <td>
        //   Employer/Company name: <input type="text" name="field1" placeholder="Enter Company/Employer name" required/><br /></td></tr>
        //   <tr>
        //     <td>Address: <input type="text" name="field2" placeholder="Enter Your Home Addresss "required /><br /></td></tr>
        //     <tr>
        //     <td>Phone: <input type="text" name="field1" placeholder="Enter Your Phone number " required/><br /></td></tr>
        //     <tr>
        //     <td>Email: <input type="text" name="field2" placeholder="Enter Your Email Address " required /><br /></td></tr>
        //     <tr>
        //     <td>Responsibilities: <input type="text" name="field2" placeholder="what position " required/><br /></td></tr>
        //     <tr>
        //     <td>From : <input type="date" name="field1" placeholder="date"  required/> To: <input type="date" name="field1" placeholder="date or year " required/></td></tr>
        //     </fieldset><fieldset>
        //   <legend>PERSONAL CONTACT</legend>

        //   <tr>
        //     <td>Full name:<input type="text" name="field1" placeholder="Enter Your Full name" required/><br/></td></tr>
        //     <tr>
        //     <td>Phone Number:<input type="text" name="field1" placeholder="Enter Your Phone number " required/><br/></td></tr>

        //     <tr>
        //     <td>Address:<input type="text" name="field2" placeholder="Enter Your Home Addresss " required/><br/></td></tr>
        //     <tr>
        //     <td>Email Address:<input type="email" name="field2" placeholder="Enter Your Email Address " required/><br/></td></tr>
        //     <tr>
        //     <td>Attach Resume
        //   <input type="file" class="resume" id="resume"></input> </td>
        //   <td>Attach Any other Document
        //   <input type="file" class="document" id="documents"></input></td></tr>
        //   </fieldset>
        // <div id="submit">
        // <input type="submit" value="Apply" /></div>
          
        //  </div>
          
        );

    }

          
} export default Form;
    
  
