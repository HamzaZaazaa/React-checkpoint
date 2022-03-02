import {form, input, small,label, type} from 'react-bootstrap';
import React from 'react';
import { ReactDOM } from 'react';

function UserForm() {
    return(
  <div>
    <form>
    <div className="row container-fluid">  
    <div className="col">
      <label htmlFor='text' className='mt-2'>First Name</label>
      <input type="text" className='form-control mt-2' placeholder='First name goes here'></input>
    </div>
    <div class="col">
      <label htmlFor='text' className='mt-2'>Last Name</label>
      <input type="text" className='form-control mt-2' placeholder='Last Name goes here'></input>
    </div>
  </div>
  <div  className="form-group mt-5">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email'></input>
    <small id="emailHelp"  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-3" >
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type='password' className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check">
    <input type='checkbox' className="form-check-input" id="exampleCheck1"></input>
    <label  className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"  className="btn btn-primary mt-3">Submit</button>
</form>
  </div>
    );
}
export default UserForm