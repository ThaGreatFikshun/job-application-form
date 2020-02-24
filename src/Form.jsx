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
  <div className = 'row'>
    <div className = 'col'>
  <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Employer/Company Name" />
    </div>
    </div>
    </div>
    <div className = 'col'>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Address" />
    </div>
    </div>
    </div>
    <div className = 'col'>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Phone Number like 07123456789" />
    </div>
    </div>
    </div>
    </div>
    <div className = 'row'>
    <div className = 'col'>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Email like fikshun@gmail.com" />
    </div>
    </div>
    </div>
    <div className = 'col'>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Which Responsibilities Did You Take...like Cashier" />
    </div>
    </div>
    </div>
    </div>
    <div className = 'row'>
    <div className = 'col'>
    <div class="row margin-difference">
    <div class="col">
    <label for="birthday">From:</label>
  <input type="date" id="birthday" name="birthday" />   
  </div>
  <div className = 'col'>
  <label for="birthday">To:</label>
  <input type="date" id="birthday" name="birthday" />
    </div>
    </div>
</div>
</div>
<br />
    <legend>PERSONAL CONTACT</legend>
    <div className='row'>
    <div className='col'>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Full Names like Fikshun.." />
    </div>
    </div>
    </div>
    <div className='col'>
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Phone Number like 07123456.." />
    </div>
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col">
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Address...P.O BOX" />
    </div>
    </div>
    </div>
    <div className="col">
    <div class="row margin-difference">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Your Email Address like fikshun@gmail.com" />
    </div>
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
    <br/><br/>
    <div class="row margin-difference" id="bttn">
     <div class="btn">
    <input type="submit" class="form-control" placeholder="Apply"/>
    </div>
    </div>
    </div>
</form>
</div>
          
        );

    }

          
} export default Form;
    
  
