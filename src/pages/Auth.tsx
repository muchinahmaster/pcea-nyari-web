import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Church } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Enter a valid email" })
  .max(255, { message: "Email too long" });

const passwordSchema = z
  .string()
  .min(6, { message: "Password must be at least 6 characters" })
  .max(128, { message: "Password too long" });

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const defaultTab = useMemo(() => (location.pathname.includes("register") ? "signup" : "login"), [location.pathname]);

  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Listener first, then getSession
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        navigate("/dashboard", { replace: true });
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/dashboard", { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailCheck = emailSchema.safeParse(email);
    const passCheck = passwordSchema.safeParse(password);
    if (!emailCheck.success) {
      return toast({ title: "Invalid email", description: emailCheck.error.errors[0].message, variant: "destructive" });
    }
    if (!passCheck.success) {
      return toast({ title: "Weak password", description: passCheck.error.errors[0].message, variant: "destructive" });
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({ title: "Welcome back", description: "Successfully signed in." });
    } catch (err: any) {
      toast({ title: "Sign in failed", description: err.message || "Please check your credentials.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailCheck = emailSchema.safeParse(email);
    const passCheck = passwordSchema.safeParse(password);
    if (!emailCheck.success) {
      return toast({ title: "Invalid email", description: emailCheck.error.errors[0].message, variant: "destructive" });
    }
    if (!passCheck.success) {
      return toast({ title: "Weak password", description: passCheck.error.errors[0].message, variant: "destructive" });
    }

    try {
      setLoading(true);
      const redirectUrl = `${window.location.origin}/`; // Required for email verification
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: redirectUrl },
      });
      if (error) throw error;
      toast({ title: "Check your email", description: "We sent you a confirmation link to finish sign up." });
      setActiveTab("login");
    } catch (err: any) {
      toast({ title: "Sign up failed", description: err.message || "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Church className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">FaithConnect</h1>
          </div>
          <p className="text-gray-600">Sign in or create your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Member Access</CardTitle>
            <CardDescription>Secure login and sign up</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Please wait..." : "Sign In"}
                  </Button>
                  <div className="text-center mt-2">
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot your password?</Link>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email2">Email</Label>
                    <Input id="email2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password2">Password</Label>
                    <Input id="password2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Please wait..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-blue-600 hover:underline">Back to Home</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
