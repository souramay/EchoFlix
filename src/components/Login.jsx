import { useRef, useState } from "react"
import { backgroundImg } from "../utils/ImgConst"
import Header from "./header"
import { ValidateDetails } from "../utils/validation";
import useAuth from "../utils/Hooks/useAuth";



const Login = () => {
  //  custom hook
  const { FirebaseSignIn, FirebaseSignUp } = useAuth();

  //useState hooks
  const [IsSignin, SetIsSignin] = useState(true);
  const [Errormsg, SetErrormsg] = useState(null);


  //useRef hooks
  const email= useRef(null);
  const password = useRef(null);
  const name= useRef(null);
  





  const Signin=()=>{
    SetIsSignin(!IsSignin);
  }

  const HandleClick=async ()=>{
    const nameValue=!IsSignin?name.current.value:undefined;
    const msg=ValidateDetails(email.current.value,password.current.value,nameValue)
    SetErrormsg(msg)

    if(msg) return;

    // signup
    if(!IsSignin){
      const erms=await FirebaseSignUp(email.current.value,password.current.value,name.current.value)
      if(erms) SetErrormsg(erms);
    
    };

    // log in
    if(IsSignin){
     const erms1=await FirebaseSignIn(email.current.value,password.current.value)
     if(erms1) SetErrormsg(erms1);

    }

  };

  return (
    <div className="bg-gradient-to-b from-black ">
      <div className="absolute bg-gradient-to-b from-black w-full z-10">
      <Header />
      </div>
      <div className="">
        <img alt="logo" src={backgroundImg} className="absolute -z-10 w-full h-screen object-cover " />
      </div>
      <div className="flex justify-center  ">
       
        <form className="text-white bg-black px-12 py-10 w-full max-w-md mx-auto mt-38 opacity-85 rounded-lg" onSubmit={(e)=>{e.preventDefault()}}>

          <h1 className="text-3xl py-2 my-2">{!IsSignin?"Sign Up" : "Sign In"}</h1>
         
         {!IsSignin && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-900 w-full rounded-sm"/>)}

          <input ref={email} type="email" placeholder="Email" className="p-4 my-4 bg-gray-900 w-full rounded-sm"/>

          <input ref={password} type="password" placeholder="Password" className="p-4 my-4 bg-gray-900 w-full rounded-sm"/>

          <p className="text-red-600 p-1 m-1 text-lg ">{Errormsg}</p>

          <button className="bg-red-600 w-full p-3 my-4 rounded-lg font-bold hover:bg-red-700 "
            onClick={HandleClick}
          >{!IsSignin?"Sign Up" : "Sign In"}</button>
          
          <ul className="flex">
            <li className="my-4 p-1 text-gray-400 opacity-90">{!IsSignin?"New to EchoFlix?" : "Already have an account?"}</li>
            <li onClick={Signin} className="p-1 my-4 cursor-pointer">{!IsSignin?"Sign up now... :)" : "Sign in now... :)"}</li>
          </ul>

          
        </form>
      </div>
      

    </div>
  )
}

export default Login
