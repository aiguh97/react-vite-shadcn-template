import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthWrapper } from "./AuthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <AuthWrapper>
      <h4 className="mb-2 text-lg font-semibold">Adventure starts here 🚀</h4>
      <p className="mb-4 text-sm text-muted-foreground">
        Make your app management easy and fun!
      </p>

      <form
        id="formAuthentication"
        className="mb-3 space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Username */}
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            autoFocus
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••••••"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            name="terms"
            checked={formData.terms}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, terms: checked }))
            }
          />
          <Label htmlFor="terms" className="text-sm font-normal">
            I agree to{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
              aria-label="privacy policy and terms"
            >
              privacy policy & terms
            </a>
          </Label>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>

      {/* Link to login */}
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to login
        </Link>
      </p>
    </AuthWrapper>
  );
};
