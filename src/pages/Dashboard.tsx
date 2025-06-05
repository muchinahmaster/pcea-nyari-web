
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Church, Users, Calendar, MessageSquare, Bell, BookOpen } from "lucide-react";

const Dashboard = () => {
  const [userRole] = useState<"admin" | "member" | "visitor">("member");

  const recentPosts = [
    {
      id: 1,
      type: "devotional",
      title: "Walking in Faith",
      author: "Pastor John",
      content: "Today's devotional focuses on trusting God's plan...",
      timestamp: "2 hours ago",
      likes: 24
    },
    {
      id: 2,
      type: "announcement",
      title: "Youth Group Meeting",
      author: "Sarah Johnson",
      content: "Join us this Friday at 7 PM for fellowship and Bible study...",
      timestamp: "4 hours ago",
      likes: 12
    },
    {
      id: 3,
      type: "testimony",
      title: "Answered Prayer",
      author: "Michael Davis",
      content: "I want to share how God answered my prayers for healing...",
      timestamp: "1 day ago",
      likes: 38
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Service",
      date: "December 8, 2024",
      time: "10:00 AM",
      type: "worship"
    },
    {
      id: 2,
      title: "Bible Study Group",
      date: "December 10, 2024",
      time: "7:00 PM",
      type: "study"
    },
    {
      id: 3,
      title: "Christmas Concert",
      date: "December 15, 2024",
      time: "6:00 PM",
      type: "event"
    }
  ];

  const prayerRequests = [
    {
      id: 1,
      request: "Please pray for my grandmother's recovery",
      author: "Anonymous",
      responses: 15
    },
    {
      id: 2,
      request: "Seeking guidance in my career decisions",
      author: "David L.",
      responses: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Church className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold">Grace Community Church</h1>
                <p className="text-gray-600">Welcome back, John!</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="ghost">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Post Prayer Request
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Events
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Users className="h-4 w-4 mr-2" />
                  Browse Groups
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Sermon Archive
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-sm text-gray-600">{event.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="feed" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="prayer">Prayer Wall</TabsTrigger>
                <TabsTrigger value="groups">My Groups</TabsTrigger>
                <TabsTrigger value="sermons">Sermons</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Create Post */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" className="flex-1 justify-start text-gray-500">
                        Share your thoughts, devotional, or testimony...
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts Feed */}
                {recentPosts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{post.author}</p>
                            <p className="text-sm text-gray-600">{post.timestamp}</p>
                          </div>
                        </div>
                        <Badge variant={
                          post.type === "devotional" ? "default" :
                          post.type === "announcement" ? "secondary" : "outline"
                        }>
                          {post.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-700 mb-4">{post.content}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          ❤️ {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          💬 Comment
                        </Button>
                        <Button variant="ghost" size="sm">
                          🔗 Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="prayer" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Prayer Wall</CardTitle>
                    <CardDescription>
                      Share your prayer requests and pray for others in our community
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full mb-6">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Submit Prayer Request
                    </Button>
                    
                    <div className="space-y-4">
                      {prayerRequests.map((prayer) => (
                        <Card key={prayer.id}>
                          <CardContent className="pt-6">
                            <p className="mb-3">{prayer.request}</p>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-600">- {prayer.author}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">{prayer.responses} prayers</span>
                                <Button size="sm">🙏 Pray</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="groups">
                <Card>
                  <CardHeader>
                    <CardTitle>My Groups</CardTitle>
                    <CardDescription>
                      Stay connected with your Bible study groups and ministries
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Groups feature coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sermons">
                <Card>
                  <CardHeader>
                    <CardTitle>Sermon Archive</CardTitle>
                    <CardDescription>
                      Access past sermons, audio recordings, and study notes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Sermon archive coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
