import { Button } from "@/components/ui/button";
import { SignUpButton, SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton>Signup</SignUpButton>
      </SignedOut>

      <SignIn>
        <SignOutButton>Login</SignOutButton>
      </SignIn>
    </div>
  );
}
