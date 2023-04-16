import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../config/Firebase";
import { getAuth, signOut } from "firebase/auth";
import { FormContainer ,Button } from "./FormComponents";
import { useNavigate } from "react-router-dom";
import { FormIcon } from "./FormComponents";
import { Alert } from "./FormComponents";
export function LoggedIn() {
  const [formError, setFormError] = useState("");
    const redirect = useNavigate();
  const [userName, setUserName] = useState("");


  function Signout(){
    const logout = getAuth();
    signOut(logout).then(() => {
        redirect("/");
    }).catch((err) => {
      setFormError(err.message);
    });
    
} 

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUserName(user.displayName);
        
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <FormContainer
      text={
        <>
        <FormIcon/>
          <p className="text-3xl text-bold text-sky-600">Welcome {userName}</p>
          <Alert text={formError}/>
        <Button onClick={Signout} text="Log Out"/>
        </>
      }
    />
  );
}
