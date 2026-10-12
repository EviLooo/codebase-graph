import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";
import { AuthLayout } from "../../components/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<p className="auth-loading">Loading sign-in…</p>}>
        <SignIn />
      </Suspense>
    </AuthLayout>
  );
}
