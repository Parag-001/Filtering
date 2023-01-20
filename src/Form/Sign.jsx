import React from "react";

const Sign = ({ data, input, submit, error }) => {
  return (
    <>
      <h1 className="text-center my-3">Sign Up Form</h1>
      <form
        action=""
        className="form w-50 mx-auto my-4"
        method="post"
        onSubmit={submit}
      >
        <div className="form-group">
          <label htmlFor="" className="form-label">
            id no:
          </label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            name="num"
            value={input.num}
            onChange={data}
          />
          {error.num ? <span>* Please Enter Id</span> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            name="name"
            value={input.name}
            onChange={data}
          />
          {error.name ? <span>* Please Enter Name</span> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            autoComplete="off"
            name="email"
            value={input.email}
            onChange={data}
          />
          {error.email ? (
            <span>* Please Enter Email Minimum 8 Character</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            PassWord :
          </label>
          <input
            type="password"
            className="form-control"
            autoComplete="off"
            name="password"
            value={input.password}
            onChange={data}
          />
          {error.password ? <span> * Please Enter PassWord</span> : ""}
        </div>
        <div className="div">
          <label htmlFor="" className="form-label">
            Country Of Bussiness :
          </label>
          <br />
          <select
            name="city"
            className="form-control"
            autoComplete="off"
            value={input.city}
            onChange={data}
            id="city"
          >
            <option value="Nothing"></option>
            <option value="UAE">UAE</option>
            <option value="Surat">Surat</option>
            <option value="Vapi">vapi</option>
          </select>
          {error.city ? <span> * Please Enter City</span> : ""}
        </div>
        <br />
        <div className="form-group text-center ">
          <input type="submit" className="btn btn-primary " value="Submit" />
        </div>
      </form>
      <br />
    </>
  );
};

export default Sign;
