import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { ThemeToggle } from "@/components/ThemeToggle";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg">
              <Shield size={24} className="text-white" />
            </div>
            <div>
              <div className="font-heading text-xl font-semibold text-slate-900 dark:text-white">PulseGuard</div>
              <div className="text-xs font-body text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden sm:block">
                Patient Monitoring System
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Welcome Section */}
          <div className="text-center mb-8 space-y-2">
            <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white">Welcome</h1>
            <p className="text-slate-600 dark:text-slate-400 font-body text-sm">
              Sign in to your account to continue
            </p>
          </div>

          {/* Card */}
          <Card className="border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl bg-white dark:bg-slate-900 animate-fade-in-slow-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm text-red-700 dark:text-red-400 animate-fade-in">
                    <div className="flex gap-3">
                      <div className="text-lg">✕</div>
                      <div className="font-medium">{error}</div>
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 font-body transition-all duration-300 pointer-events-none ${
                        email
                          ? "top-2 text-xs font-semibold text-blue-600 dark:text-blue-400"
                          : "top-4 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className={`pt-6 pb-3 pl-4 pr-4 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border-2 transition-all duration-300 rounded-lg font-body ${
                        email
                          ? "border-blue-600 dark:border-blue-500"
                          : "border-slate-200 dark:border-slate-700"
                      } focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10`}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className={`absolute left-4 font-body transition-all duration-300 pointer-events-none ${
                        password
                          ? "top-2 text-xs font-semibold text-blue-600 dark:text-blue-400"
                          : "top-4 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      className={`pt-6 pb-3 pl-4 pr-4 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border-2 transition-all duration-300 rounded-lg font-body ${
                        password
                          ? "border-blue-600 dark:border-blue-500"
                          : "border-slate-200 dark:border-slate-700"
                      } focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10`}
                      required
                    />
                  </div>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-600/25 active:scale-95 group"
                >
                  <div className="flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </div>
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-body">New user?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <Link
                to="/signup"
                className="block w-full text-center py-2.5 px-4 rounded-lg font-body text-sm font-semibold text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-md active:scale-95"
              >
                Create Account
              </Link>
            </CardContent>
          </Card>

          {/* Demo Info */}
          <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 animate-fade-in-slow-3">
            <p className="text-xs text-blue-700 dark:text-blue-300 font-body text-center">
              <span className="font-semibold">Demo:</span> Use any email and password (6+ chars)
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 text-center py-4">
        <span className="text-xs text-slate-600 dark:text-slate-400 font-body">
          Team Mavricks || PEC
        </span>
      </footer>
    </div>
  );
};

export default SignIn;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg">
              <Shield size={24} className="text-white" />
            </div>
            <div>
              <div className="font-heading text-xl font-semibold text-slate-900 dark:text-white">PulseGuard</div>
              <div className="text-xs font-body text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden sm:block">
                Patient Monitoring System
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Welcome Section */}
          <div className="text-center mb-8 space-y-2">
            <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white">Welcome</h1>
            <p className="text-slate-600 dark:text-slate-400 font-body text-sm">
              Sign in to your account to continue
            </p>
          </div>

          {/* Card */}
          <Card className="border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl bg-white dark:bg-slate-900 animate-fade-in-slow-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm text-red-700 dark:text-red-400 animate-fade-in">
                    <div className="flex gap-3">
                      <div className="text-lg">✕</div>
                      <div className="font-medium">{error}</div>
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 font-body transition-all duration-300 pointer-events-none ${
                        email
                          ? "top-2 text-xs font-semibold text-blue-600 dark:text-blue-400"
                          : "top-4 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className={`pt-6 pb-3 pl-4 pr-4 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border-2 transition-all duration-300 rounded-lg font-body ${
                        email
                          ? "border-blue-600 dark:border-blue-500"
                          : "border-slate-200 dark:border-slate-700"
                      } focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10`}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className={`absolute left-4 font-body transition-all duration-300 pointer-events-none ${
                        password
                          ? "top-2 text-xs font-semibold text-blue-600 dark:text-blue-400"
                          : "top-4 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      className={`pt-6 pb-3 pl-4 pr-4 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 border-2 transition-all duration-300 rounded-lg font-body ${
                        password
                          ? "border-blue-600 dark:border-blue-500"
                          : "border-slate-200 dark:border-slate-700"
                      } focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10`}
                      required
                    />
                  </div>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-600/25 active:scale-95 group"
                >
                  <div className="flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </div>
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-body">New user?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <Link
                to="/signup"
                className="block w-full text-center py-2.5 px-4 rounded-lg font-body text-sm font-semibold text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-md active:scale-95"
              >
                Create Account
              </Link>
            </CardContent>
          </Card>

          {/* Demo Info */}
          <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 animate-fade-in-slow-3">
            <p className="text-xs text-blue-700 dark:text-blue-300 font-body text-center">
              <span className="font-semibold">Demo:</span> Use any email and password (6+ chars)
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 text-center py-4">
        <span className="text-xs text-slate-600 dark:text-slate-400 font-body">
          Team Mavricks || PEC
        </span>
      </footer>
    </div>
  );
};

export default SignIn;
