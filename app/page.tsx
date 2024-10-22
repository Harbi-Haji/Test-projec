"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe, Home, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    title: "SpaceX Successfully Launches New Satellite Constellation",
    description: "The aerospace company has deployed another batch of satellites, expanding global internet coverage to remote areas.",
    time: "1 hour ago",
    type: "international",
    trending: true
  },
  // ... (rest of the news items remain the same)
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNews = newsItems.filter(item => {
    if (activeTab === "all") return true;
    if (activeTab === "trending") return item.trending;
    return item.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 gap-4">
            <TabsTrigger value="all" className="space-x-2">
              <Globe className="h-4 w-4" />
              <span>All News</span>
            </TabsTrigger>
            <TabsTrigger value="international" className="space-x-2">
              <Globe className="h-4 w-4" />
              <span>International</span>
            </TabsTrigger>
            <TabsTrigger value="local" className="space-x-2">
              <Home className="h-4 w-4" />
              <span>Local</span>
            </TabsTrigger>
            <TabsTrigger value="trending" className="space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Trending</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant={news.type === "international" ? "default" : "secondary"}>
                        {news.type}
                      </Badge>
                      {news.trending && (
                        <Badge variant="destructive" className="ml-2">
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {news.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {news.time}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}