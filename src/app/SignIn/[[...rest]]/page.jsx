'use client'
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center mt-0">
      {/* <SignIn afterSignInUrl='/?sign=true' /> */}
      <SignIn />
    </div>
  );
}
