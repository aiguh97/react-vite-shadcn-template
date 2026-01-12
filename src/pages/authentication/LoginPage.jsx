import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthWrapper } from "./AuthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <AuthWrapper>
      <h4 className="mb-2 text-xl font-semibold">Welcome to Minguh 👋</h4>
      <p className="mb-6 text-sm text-muted-foreground">
        Please sign-in to your account and start the adventure
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email or Username</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email or username"
            value={formData.email}
            onChange={handleChange}
            autoFocus
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••••••"
            value={formData.password}
            onChange={handleChange}
            autoComplete="true"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="rememberMe"
            checked={formData.rememberMe}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, rememberMe: checked }))
            }
          />
          <Label htmlFor="rememberMe" className="text-sm">
            Remember Me
          </Label>
        </div>

        {/* Submit Button */}
        <Button onClick={() => navigate("/")} type="submit" className="w-full">
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-center text-sm">
        <span>New on our platform? </span>
        <Link to="/auth/register" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </AuthWrapper>
  );
};
