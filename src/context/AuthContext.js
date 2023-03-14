import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import React, { createContext } from "react";
  import { useNavigate } from "react-router-dom";
  import { auth } from "../auth/firebase";
import { toastSuccessNotify } from "../helper/ToastNotify";
  
  // export const {Provider} = createContext()
  export const AuthContext = createContext();
  //* with custom hook
  // export const useAuthContext = () => {
  //     return useContext(AuthContext);
  //   };
  
  const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const createUser = async (email, password) => {
      try {
        //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
        let userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/");
        console.log(userCredential);
      } catch (error) {
        console.log(error);
      }
    };
  
    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Email/password
    //! Email/password ile girişi enable yap
    const signIn = async (email, password) => {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
        toastSuccessNotify("Logged in successfully!")
      } catch (error) {
        console.log(error);
      }
    };
  
    const logOut = () => {
      signOut(auth);
    };
  
    const values = {
      createUser,
      signIn,
      logOut,
      currentUser: { displayName: "mehmet TAŞKIN" },
    };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  };
  
  export default AuthContextProvider;
  