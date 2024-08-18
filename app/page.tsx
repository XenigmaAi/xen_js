"use client";

import Btn from "@/components/Btn";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Textarea from "@/components/Textarea";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col bg-slate-50 text-black">
      <div className="bg-blue-500 text-white flex items-center justify-between gap-2 px-4 py-3">
        <h1 className="text-xl font-bold">Kepler Institute Of Computer & Sciences</h1>
        <li className="flex gap-2 list-none">
        <a href="#" className="bg-white text-blue-500 px-3 py-2 rounded-md">Home</a>
        <a href="#" className="bg-white text-blue-500 px-3 py-2 rounded-md">Products</a>
        <a href="#" className="bg-white text-blue-500 px-3 py-2 rounded-md">About</a>
        <a href="#" className="bg-white text-blue-500 px-3 py-2 rounded-md gap-2">Contact Us</a>
        <Btn
          btnText="Account"
          className="rounded-md"
          type="secondary"
          btnIconHeight={18}
          btnIconWidth={18}
          btnIcon="/copy.svg"
        />
        </li>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-50 text-black gap-2 ">
      <form className="flex flex-col gap-2" method="POST">
        <Label className="text-3xl font-bold" htmlFor="FNInput">Contact Us</Label>
        <div className="flex gap-1">
        <Input type="text" placeholder="Full name" id="FNInput" required />
        <Input type="password" placeholder="Enter your password" required />
        </div>
        <Input type="email" placeholder="Email address" required />
        <Input type="date" title="Select your preffered date." />
        <Textarea placeholder="Enter your message" noResize required />
        <Checkbox description="By checking it, you accept our terms and conditions" required />
        <Input type="submit" value="Send message" />
      </form>
      </div>
    </main>
  );
}
