import React, { useState } from 'react';

export default function Contact() {

  const [data, setData] = useState({
    name:'',
    email:'',
    number:'',
    msg:''
  })

  const InputEvent = (e)=>{
    const {name, value} = e.target;
    setData((preVal)=>{
      return {
        ...preVal,
        [name]: value,
      }
    });
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`Name: ${data.name} \nEmail: ${data.email} \nPhone No.: ${data.number} \nMessage: ${data.msg}`);
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='name' value={data.name} onChange={InputEvent} placeholder="Enter your Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name='number' value={data.number} onChange={InputEvent} placeholder="Enter your Phone No." />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={InputEvent} rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}