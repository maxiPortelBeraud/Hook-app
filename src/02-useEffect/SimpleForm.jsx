import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "NavixaM",
    email: "navixam@google.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("useEffect called!");
  }, []);

  useEffect(() => {
    //console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    //console.log("email changed!");
  }, [email]);

  useEffect(() => {}, []);
  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        username === 'NavixaM2' && <Message />
      }
    </>
  );
};
