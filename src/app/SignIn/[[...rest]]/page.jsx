import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center mt-28  h-screen">
      <SignIn />
    </div>
  );
}
