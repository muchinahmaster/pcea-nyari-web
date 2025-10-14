import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Prayer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Prayer Request Submitted",
      description: "We will keep you in our prayers. God bless you.",
    });
    setName("");
    setEmail("");
    setPrayerRequest("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              PRAYER REQUESTS
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              "The prayer of a righteous person is powerful and effective." - James 5:16
            </p>
          </div>
        </section>

        {/* Prayer Request Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Submit Your Prayer Request</CardTitle>
                <CardDescription className="text-lg">
                  Share your prayer needs with us, and our church community will lift you up in prayer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prayer">Prayer Request</Label>
                    <Textarea
                      id="prayer"
                      value={prayerRequest}
                      onChange={(e) => setPrayerRequest(e.target.value)}
                      placeholder="Share your prayer request here..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                    Submit Prayer Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-gray-600">
              <p className="text-sm">
                Your prayer request will be kept confidential and shared only with our prayer team.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Prayer;
