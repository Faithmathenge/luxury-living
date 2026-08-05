function Form() {
  // Event when name changes
  const nameOnChange = (e) => {
    console.log("NAME IS", e.target.value);
  };

  // Event when email changes
  const emailOnChange = (e) => {
    console.log("EMAIL IS", e.target.value);
  };

  // Event when password changes
  const passwordOnChange = (e) => {
    console.log("PASSWORD IS", e.target.value);
  };

  // Submit button event
  const onSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>

        <div>
          <input onChange={nameOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>

        <div>
          <input onChange={emailOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>

        <div>
          <input type="password" onChange={passwordOnChange} />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>
    </div>
  );
}

export default Form;
