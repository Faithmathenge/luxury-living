import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function MyComponent() {
  return null; //valid jsx
}

function MyComponent2() {
  return (
    <div>
      <h1>Winter is coming</h1>
      <div></div>
    </div>
  );
}

function MyComponent3() {
  return (
    <>
      <h1>You know nothing Jon snow</h1>
      <p>A lannister always pays his debts</p>
    </>
  );
}

function ParentComponent() {
  return (
    <div>
      <h1>This is the parent component</h1>
      <MyComponent />
      <MyComponent2></MyComponent2>
      <MyComponent3 />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>My first react app</h1>
    <MyComponent />
    <MyComponent2></MyComponent2>
    <MyComponent3 />
    <ParentComponent />
  </StrictMode>,
);
