import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Church, Mail, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Enter a valid email" })
  .max(255, { message: "Email too long" });

const phoneSchema = z
  .string()
  .trim()
  .regex(/^\+?[1-9]\d{1,14}$/, { message: "Enter a valid phone number with country code" });

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
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    
    if (authMethod === "email") {
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
    } else {
      const phoneCheck = phoneSchema.safeParse(phone);
      const passCheck = passwordSchema.safeParse(password);
      if (!phoneCheck.success) {
        return toast({ title: "Invalid phone", description: phoneCheck.error.errors[0].message, variant: "destructive" });
      }
      if (!passCheck.success) {
        return toast({ title: "Weak password", description: passCheck.error.errors[0].message, variant: "destructive" });
      }

      try {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ phone, password });
        if (error) throw error;
        toast({ title: "Welcome back", description: "Successfully signed in." });
      } catch (err: any) {
        toast({ title: "Sign in failed", description: err.message || "Please check your credentials.", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (authMethod === "email") {
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
        const redirectUrl = `${window.location.origin}/`;
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
    } else {
      const phoneCheck = phoneSchema.safeParse(phone);
      const passCheck = passwordSchema.safeParse(password);
      if (!phoneCheck.success) {
        return toast({ title: "Invalid phone", description: phoneCheck.error.errors[0].message, variant: "destructive" });
      }
      if (!passCheck.success) {
        return toast({ title: "Weak password", description: passCheck.error.errors[0].message, variant: "destructive" });
      }

      try {
        setLoading(true);
        const { error } = await supabase.auth.signUp({ phone, password });
        if (error) throw error;
        toast({ title: "Check your phone", description: "We sent you a confirmation code to finish sign up." });
        setActiveTab("login");
      } catch (err: any) {
        toast({ title: "Sign up failed", description: err.message || "Please try again.", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleOAuthSignIn = async (provider: "google" | "facebook") => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      toast({ title: "OAuth sign in failed", description: err.message || "Please try again.", variant: "destructive" });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/fca4641c-d4bf-4ea6-9a5d-76487b0a5d29.png" 
              alt="PCEA Nyari Parish Logo" 
              className="h-12 w-12 object-contain mix-blend-multiply dark:mix-blend-normal dark:invert"
            />
            <h1 className="text-2xl font-bold text-gray-900">PCEA NYARI CHURCH</h1>
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
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={authMethod === "email" ? "default" : "outline"}
                      onClick={() => setAuthMethod("email")}
                      className="flex-1"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button
                      type="button"
                      variant={authMethod === "phone" ? "default" : "outline"}
                      onClick={() => setAuthMethod("phone")}
                      className="flex-1"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Phone
                    </Button>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    {authMethod === "email" ? (
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1234567890" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                      </div>
                    )}
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

                  <div className="relative">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleOAuthSignIn("google")}
                      disabled={loading}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleOAuthSignIn("facebook")}
                      disabled={loading}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={authMethod === "email" ? "default" : "outline"}
                      onClick={() => setAuthMethod("email")}
                      className="flex-1"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button
                      type="button"
                      variant={authMethod === "phone" ? "default" : "outline"}
                      onClick={() => setAuthMethod("phone")}
                      className="flex-1"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Phone
                    </Button>
                  </div>

                  <form onSubmit={handleSignup} className="space-y-4">
                    {authMethod === "email" ? (
                      <div className="space-y-2">
                        <Label htmlFor="email2">Email</Label>
                        <Input id="email2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="phone2">Phone Number</Label>
                        <Input id="phone2" type="tel" placeholder="+1234567890" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="password2">Password</Label>
                      <Input id="password2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Please wait..." : "Create Account"}
                    </Button>
                  </form>

                  <div className="relative">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleOAuthSignIn("google")}
                      disabled={loading}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleOAuthSignIn("facebook")}
                      disabled={loading}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
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
