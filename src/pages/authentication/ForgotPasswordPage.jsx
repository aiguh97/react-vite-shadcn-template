import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthWrapper } from "./AuthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <AuthWrapper>
      <h4 className="mb-2 text-lg font-semibold">Forgot Password? 🔒</h4>
      <p className="mb-4 text-sm text-muted-foreground">
        Enter your email and we'll send you instructions to reset your password
      </p>

      <form id="formAuthentication" className="mb-3 space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoFocus
          />
        </div>

        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>

      <div className="text-center">
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to login
        </Link>
      </div>
    </AuthWrapper>
  );
};
