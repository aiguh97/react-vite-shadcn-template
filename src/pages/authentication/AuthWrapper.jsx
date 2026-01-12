import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

export const AuthWrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-card shadow-lg rounded-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-bold">Minguh</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
