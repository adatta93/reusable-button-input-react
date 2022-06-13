import React from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const handleClick = (a) => {
    console.log("clicked", a);
  };
  return (
    <div className="app-container">
      <Button onClick={() => handleClick("e")}></Button>
      <Button hovered label="Button Focus"></Button>
      <Button disabled label="Button Disable"></Button>
      <br />
      <br />
      <Button variant="outline" label="Outline"></Button>
      <Button variant="outline" hovered label="Outline Focus"></Button>
      <Button variant="outline" disabled label="Outline Disabled"></Button>
      <br />
      <br />
      <Button variant="text" label="Text"></Button>
      <Button variant="text" hovered label="Text Focus"></Button>
      <Button variant="text" disabled label="Text Disable"></Button>
      <br />
      <br />
      <Button noShadow label="No Shadow"></Button>
      <Button noShadow label="No Shadow" color="primary"></Button>
      <Button noShadow label="No Shadow" color="secondary"></Button>
      <br />
      <br />
      <Button variant="default" label="Primary" color="primary"></Button>
      <Button hovered label="Primary Focus" color="primary"></Button>
      <Button disabled label="Primary Disable" color="primary"></Button>
      <Button variant="outline" label="Primary Outline" color="primary" />
      <Button
        variant="outline"
        label="Outline Disable"
        disabled
        color="primary"
      />
      <Button variant="text" label="Primary Text" color="primary" />
      <Button variant="text" label="Text Disable" disabled color="primary" />
      <br />
      <br />
      <Button variant="default" label="Secondary" color="secondary"></Button>
      <Button hovered label="Secondary Focus" color="secondary"></Button>
      <Button disabled label="Secondary Disable" color="secondary"></Button>
      <Button variant="outline" label="Secondary Outline" color="secondary" />
      <Button
        variant="outline"
        label="Outline Disable"
        disabled
        color="secondary"
      />
      <Button variant="text" label="Secondary Text" color="secondary" />
      <Button variant="text" label="Text Disable" disabled color="secondary" />
      <br />
      <br />
      <Button variant="default" label="Danger" color="danger"></Button>
      <Button hovered label="Danger Focus" color="danger"></Button>
      <Button disabled label="Danger Disable" color="danger"></Button>
      <Button variant="outline" label="Danger Outline" color="danger" />
      <Button
        variant="outline"
        label="Outline Disable"
        disabled
        color="danger"
      />
      <Button variant="text" label="Danger Text" color="danger" />
      <Button variant="text" label="Text Disable" disabled color="danger" />
      <br />
      <br />
      <Button label="Small" color="primary" size="sm" />
      <Button label="Medium" color="primary" size="md" />
      <Button label="Large" color="primary" size="lg" />
      <Button variant="outline" label="Small" color="primary" size="sm" />
      <Button variant="outline" label="Medium" color="primary" size="md" />
      <Button variant="outline" label="Large" color="primary" size="lg" />
      <Button variant="text" label="Small" color="primary" size="sm" />
      <Button variant="text" label="Medium" color="primary" size="md" />
      <Button variant="text" label="Large" color="primary" size="lg" />
      <br />
      <br />
      <Button label="Small" color="primary" startIcon="local_grocery_store" />
      <Button label="Small" color="primary" endIcon="local_grocery_store" />
      <br />
      <br />
      <Button label="Block Normal" color="primary" block size="sm" />
      <Button label="Block Normal" color="primary" block />
      <Button label="Block Normal" color="primary" block size="lg" />
      <Button variant="outline" label="Block Outline" color="primary" block />
      <Button variant="text" label="Block Text" color="primary" block />
    </div>
  );
}

export default App;
