import React, { Component } from 'react'
import './register.css'


export default class Register extends Component {
  render() {
    return (
      <div className='all'>
      <div className='container' >
   <div className='box' style={{width:'400px'}}>
   <div class="">
  <label for="exampleFormControlInput1" class="form-label"><span>
    <b style={{color:'grey',fontSize:'20px'}}>Enter your full name:</b></span></label>
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style={{fontWeight:'600px'}}>Enter your email address:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your phone number:</label>
  <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your address:</label>
  <input type="address" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your password:</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"/>
</div>
    </div> 
<button type="submit" formaction="/action_page2.php" class="btn btn-outline-primary">Submit</button>
      </div>
      </div>
    )
  }
}
