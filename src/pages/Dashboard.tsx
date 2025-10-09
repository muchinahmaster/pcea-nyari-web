
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Church, Users, Calendar, MessageSquare, Bell, BookOpen, Heart, Share, LogOut, UserCog } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import CreatePostModal from "@/components/CreatePostModal";

const Dashboard = () => {
  const [userRole] = useState<"admin" | "member" | "visitor">("member");
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    avatar: "/placeholder.svg"
  });
  
  // Load posts from localStorage or use default posts
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('churchPosts');
    if (savedPosts) {
      return JSON.parse(savedPosts);
    }
    return [
      {
        id: 1,
        type: "devotional",
        title: "Walking in Faith",
        author: "Pastor John",
        content: "Today's devotional focuses on trusting God's plan...",
        timestamp: "2 hours ago",
        likes: 24,
        comments: 5,
        liked: false
      },
      {
        id: 2,
        type: "announcement",
        title: "Youth Group Meeting",
        author: "Sarah Johnson",
        content: "Join us this Friday at 7 PM for fellowship and Bible study...",
        timestamp: "4 hours ago",
        likes: 12,
        comments: 3,
        liked: false
      },
      {
        id: 3,
        type: "testimony",
        title: "Answered Prayer",
        author: "Michael Davis",
        content: "I want to share how God answered my prayers for healing...",
        timestamp: "1 day ago",
        likes: 38,
        comments: 8,
        liked: true
      }
    ];
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('churchPosts', JSON.stringify(posts));
  }, [posts]);

// Auth gating and session handling
useEffect(() => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    setUserId(session?.user?.id ?? null);
    if (!session?.user) {
      navigate('/auth', { replace: true });
    }
  });
  supabase.auth.getSession().then(({ data: { session } }) => {
    setUserId(session?.user?.id ?? null);
    if (!session?.user) {
      navigate('/auth', { replace: true });
    }
  });
  return () => subscription.unsubscribe();
}, [navigate]);

// Load profile data for current user
useEffect(() => {
  if (!userId) return;
  const saved = localStorage.getItem(`profileData:${userId}`);
  if (saved) {
    setProfileData(JSON.parse(saved));
  }
}, [userId]);

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

  const handleCreatePost = (newPost: { type: string; title: string; content: string }) => {
    const post = {
      id: Date.now(),
      ...newPost,
      author: "John Doe", // Current user
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      liked: false
    };
    
    setPosts([post, ...posts]);
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
    
    toast({
      title: "Post Updated",
      description: "Your reaction has been recorded!",
    });
  };

  const handleComment = (postId: number) => {
    toast({
      title: "Comment Feature",
      description: "Comment functionality will be available soon!",
    });
  };

  const handleShare = (postId: number) => {
    toast({
      title: "Post Shared",
      description: "Post has been shared successfully!",
    });
  };

const handleLogout = async () => {
  try {
    await supabase.auth.signOut();
    toast({ title: "Logged Out", description: "You have been successfully logged out." });
  } finally {
    navigate('/auth');
  }
};

const handleSwitchAccount = async () => {
  try {
    await supabase.auth.signOut();
  } finally {
    navigate('/auth');
  }
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/fca4641c-d4bf-4ea6-9a5d-76487b0a5d29.png" 
                alt="PCEA Nyari Parish Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold">PCEA Nyari Church</h1>
                <p className="text-gray-600">Welcome back, {profileData.name.split(' ')[0]}!</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/messages')}
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={profileData.avatar} />
                    <AvatarFallback>{profileData.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/account')}>
                    <UserCog className="mr-2 h-4 w-4" />
                    <span>Account Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSwitchAccount}>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Switch Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                <Button 
                  className="w-full justify-start" 
                  variant="ghost"
                  onClick={() => navigate('/contact')}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Post Prayer Request
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="ghost"
                  onClick={() => navigate('/events')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Events
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="ghost"
                  onClick={() => navigate('/ministries')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Browse Ministries
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="ghost"
                  onClick={() => navigate('/resources')}
                >
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
                <TabsTrigger value="feed">Church Feed</TabsTrigger>
                <TabsTrigger value="prayer">Prayer Wall</TabsTrigger>
                <TabsTrigger value="groups">My Ministries</TabsTrigger>
                <TabsTrigger value="sermons">Sermons</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Create Post */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={profileData.avatar} />
                        <AvatarFallback>{profileData.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <Button 
                        variant="outline" 
                        className="flex-1 justify-start text-gray-500"
                        onClick={() => setIsCreatePostModalOpen(true)}
                      >
                        Share your thoughts, devotional, or testimony...
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts Feed */}
                {posts.map((post) => (
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
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className={post.liked ? "text-red-500" : ""}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
                          {post.likes}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleComment(post.id)}
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.comments} Comment{post.comments !== 1 ? 's' : ''}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleShare(post.id)}
                        >
                          <Share className="h-4 w-4 mr-1" />
                          Share
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
                      Share your prayer requests and pray for others in our church
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
                    <CardTitle>My Ministries</CardTitle>
                    <CardDescription>
                      Stay connected with your ministries and church groups
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Ministries feature coming soon...</p>
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

      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default Dashboard;
