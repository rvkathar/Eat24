import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count = {count2}</h1>

      <h3>Name: {props.name}</h3>
      <h3>Location: Pune</h3>
      <h3>Contact: @gmail</h3>
    </div>
  );
};

export default User;
