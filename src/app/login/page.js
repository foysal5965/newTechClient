"use client"
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
const Login = () => {
  const{data,status}= useSession();
  
  return (
    <div className="flex justify-center items-center">
      <div className="h-[50vh] bg-gray-200 p-8 m-8 rounded-md">
        <div>
          <span>Log in to your account</span>
          <br />
          <span className="font-bold">
            Yet have an account?
            <span className="text-blue-500 font-bold">Sign Up</span>
          </span>
        </div>
        <div className="border-solid border-2 border-gray-300 rounded-md w-[250px] mt-4 cursor-pointer"  onClick={()=>signIn('google',{callbackUrl:"http://localhost:3000"})}>
        
          <p className="flex justify-center p-2">
            <span>
              <FcGoogle  className="h-[24px] w-[24px]" />
            </span>
            <span className="mx-2 text-gray-400">Google</span>
          </p>
          
        </div>
        <div className="border-solid border-2 border-gray-300 rounded-md w-[250px] mt-4 cursor-pointer"  onClick={()=>signIn('github',{callbackUrl:"http://localhost:3000"})} >
          <p className="flex justify-center p-2">
            <span>
              <BsGithub className="h-[24px] w-[24px]" />
            </span>
            <span className="mx-2 text-gray-400">Github</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
