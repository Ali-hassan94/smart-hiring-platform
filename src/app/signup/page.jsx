import SignupForm from "@/components/auth/SignupForm";
import AuthBackground from "@/components/auth/AuthBackground";

export default function SignupPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <AuthBackground />

      <SignupForm />

    </main>
  );
}