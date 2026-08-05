import { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const nameOnChange = (e) => {
    const inputClone = { ...input };
    inputClone.name = e.target.value;
    setInput(inputClone);
  };

  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("name is", input.name);
    console.log("email is", input.email);
    console.log("phone is", input.phone);
    console.log("password is", input.password);
  };

  console.log(input);

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>

        <div>
          <input value={input.name} onChange={nameOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>

        <div>
          <input
            value={input.email}
            onChange={(e) => {
              const inputClone = { ...input };
              inputClone.email = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>

      <main>
        <div>
          <label>Phone</label>
        </div>

        <div>
          <input
            value={input.phone}
            onChange={(e) => {
              const inputClone = { ...input };
              inputClone.phone = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>

        <div>
          <input
            type="password"
            value={input.password}
            onChange={(e) => {
              const inputClone = { ...input };
              inputClone.password = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>

      <ul>
        <li>Name: {input.name}</li>
        <li>Email: {input.email}</li>
        <li>Phone: {input.phone}</li>
        <li>Password: {input.password}</li>
      </ul>
    </div>
  );
}

export default Form;
