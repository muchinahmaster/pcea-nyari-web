import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "like",
      message: "Sarah Johnson liked your post",
      timestamp: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "comment",
      message: "Pastor John commented on your testimony",
      timestamp: "5 hours ago",
      read: false
    },
    {
      id: 3,
      type: "event",
      message: "New event: Christmas Concert on Dec 15",
      timestamp: "1 day ago",
      read: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Notifications</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Your Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`flex items-start gap-3 p-4 rounded-lg border ${
                  notification.read ? 'bg-white' : 'bg-blue-50'
                }`}
              >
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>
                    {notification.type === 'like' ? '❤️' : 
                     notification.type === 'comment' ? '💬' : '📅'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-sm text-gray-600">{notification.timestamp}</p>
                </div>
                {!notification.read && (
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
