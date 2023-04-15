import React, { useState } from "react";
import {
  Alert,
  FormIcon,
  InputPassword,
  InputText,
  FormContainer,
  Button,
} from "./FormComponents";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
// import { , createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const redirect = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const submission = () => {
    if (!value.name || !value.email || !value.password) {
      setFormError("Fill all fields !");
      return;
    }
    setDisabledBtn(true);
    setFormError("");

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (resp) => {
        // Signed in
        const user = resp.user;
        setDisabledBtn(false);
        await updateProfile(user, {
          displayName: value.name,
        });
        redirect("/LoggedIn");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        setDisabledBtn(false);
        const errorMessage = error.message;
        setFormError(errorMessage);
        console.log();
      });
  };

  return (
    <FormContainer
      text={
        <>
          <FormIcon text="SignUp" />

          <form>
            <InputText
              label="Full Name"
              onChange={(event) =>
                setValue((prev) => ({ ...prev, name: event.target.value }))
              }
            />

            <InputText
              label="Mail"
              onChange={(event) =>
                setValue((prev) => ({ ...prev, email: event.target.value }))
              }
            />

            <InputPassword
              label="Password"
              onChange={(event) =>
                setValue((prev) => ({ ...prev, password: event.target.value }))
              }
            />

            <Alert text={formError} />

            <Button
              text="SignUp"
              type="button"
              onClick={submission}
              disabled={disabledBtn}
            />
          </form>
          <p className="text-sky-500 mt-6 p-1">
            You have an account ?
            <Link to="/" className="font-bold pl-3 text-sky-400 font-mono">
              Login
            </Link>
          </p>
        </>
      }
    />
  );
}
export default SignUp;
