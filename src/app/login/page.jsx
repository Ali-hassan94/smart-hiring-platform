import LoginForm from "@/components/auth/LoginForm";
import AuthBackground from "@/components/auth/AuthBackground";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <AuthBackground />

      <LoginForm />

    </main>
  );
}