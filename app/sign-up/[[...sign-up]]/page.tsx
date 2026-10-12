import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";
import { AuthLayout } from "../../components/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<p className="auth-loading">Loading sign-up…</p>}>
        <SignUp />
      </Suspense>
    </AuthLayout>
  );
}
