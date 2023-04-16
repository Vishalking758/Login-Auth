import { useState } from "react";
import {
  Alert,
  FormIcon,
  InputPassword,
  InputText,
  FormContainer,
  Button,
} from "./FormComponents";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../config/Firebase";



function Login() {
  const redirect = useNavigate();
  const [formError, setFormError] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [value, setValue] = useState({
    mail: "",
    password: "",
  });
    auth.onAuthStateChanged((user) => {
      if (user) {
        redirect("/LoggedIn");
      }
    });


  const submission = () => {
    if (!value.mail || !value.password) {
      setFormError("Fill all fields !");
      return;
    }
    setDisabledBtn(true);
    setFormError("");
    signInWithEmailAndPassword(auth, value.mail, value.password)
      .then(async (resp) => {
        const user = resp.user;
        setDisabledBtn(false);
        console.log(user);
        redirect("/LoggedIn");
      })
      .catch((err) => {
        setFormError(err.message);
        setDisabledBtn(false);
      });
  };

  return (
    <FormContainer
      text={
        <>
          {" "}
          <FormIcon text="login" />
          <form>
            <InputText
              label="Email"
              onChange={(event) =>
                setValue((prev) => ({ ...prev, mail: event.target.value }))
              }
            />

            <InputPassword
              label="Password"
              onChange={(event) =>
                setValue((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
            />

            <Alert text={formError} />

            <Button text="login" onClick={submission} disabled={disabledBtn} />
          </form>
          <p className="text-sky-500 mt-6 p-1">
            You don't have an account?
            <Link
              to="/signup"
              className="font-bold pl-3 text-sky-400 font-mono"
            >
              SignUp
            </Link>
          </p>
        
          
        </>
      }
    />
  );
}

export default Login;
