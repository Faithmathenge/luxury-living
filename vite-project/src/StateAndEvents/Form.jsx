import { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("Name:", input.name);
    console.log("Email:", input.email);
    console.log("Phone:", input.phone);
    console.log("Password:", input.password);
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input name="name" value={input.name} onChange={handleChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input name="email" value={input.email} onChange={handleChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Phone</label>
        </div>
        <div>
          <input name="phone" value={input.phone} onChange={handleChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>

      <hr />

      <h2>Name: {input.name}</h2>
      <h2>Email: {input.email}</h2>
      <h2>Phone: {input.phone}</h2>
      <h2>Password: {input.password}</h2>
    </div>
  );
}

export default Form;
