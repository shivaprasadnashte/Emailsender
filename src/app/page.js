"use client";
import { useState } from "react";
import axios from "axios";
export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [thanks, setThanks] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/sendemail",{name,email});
      setThanks(true);
    } catch (error) {
      console.error(error);
    console.log("error")
    }
   
  };

  return (
    <>
      <div className=" h-screen w-full flex flex-col justify-center item">
       { !thanks? <form>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Email fetcher</h1>
            <div className=" flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                className="border-2 text-black border-gray-300 p-2 mb-4"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                className="border-2 text-black border-gray-300 p-2 mb-4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={
              handleSubmit
            }>
              Submit
            </button>
          </div>
        </form>:<div className=" flex justify-center text-3xl">
          <h1>Thanks for submitting !</h1>
        </div>
       }
      </div>
    </>
  );
}
