'use client'
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center mt-5 md:mt-[10px] mb-5 md:mb-10">
      {/* <SignIn afterSignInUrl='/?sign=true' /> */}
      <SignIn />
    </div>
  );
}