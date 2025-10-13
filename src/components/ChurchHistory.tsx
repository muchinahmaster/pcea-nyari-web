import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const ChurchHistory = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
            Our Church History
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                PCEA Nyari Church has been a cornerstone of faith and community in our region 
                for decades. Founded with a vision to spread the Gospel and serve our community, 
                we have grown from humble beginnings into a vibrant congregation that continues 
                to impact lives through worship, fellowship, and service.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our journey has been marked by God's faithfulness, as we've witnessed countless 
                lives transformed and families strengthened through our shared commitment to 
                Christ's teachings.
              </p>
              <div className="text-center">
                <Button size="lg" asChild>
                  <Link to="/about">Learn More About Our History</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChurchHistory;
