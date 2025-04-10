
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shirt, HeartHandshake, Sparkles, Calendar, Code, Users } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      <section className="mb-8 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">StyleAI - Digital Wardrobe</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An AI-powered digital wardrobe stylist
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button asChild>
              <a href="#features">
                Explore Features
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#getting-started">
                Get Started
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-fashion-mid-purple/10 rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Digital Wardrobe Management</h2>
              <p className="text-lg mb-4">
                StyleAI helps you organize your wardrobe, create outfits, and get AI-powered style recommendations.
                Perfect for fashion enthusiasts and anyone looking to make the most of their clothing collection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">shadcn/ui</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-background p-4 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="StyleAI Preview" 
                  className="rounded-md w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>

        <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <Shirt className="w-8 h-8 text-primary mb-2" />
              <CardTitle>My Wardrobe</CardTitle>
              <CardDescription>
                Manage your clothing items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Add, edit, and organize your wardrobe items with ease. Upload photos or use the camera to capture your clothes.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="/wardrobe">View Wardrobe</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <HeartHandshake className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Outfit Creator</CardTitle>
              <CardDescription>
                Create and manage outfits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Combine items from your wardrobe to create perfect outfits for any occasion. Save and categorize your favorite combinations.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="/outfits">Create Outfits</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <Sparkles className="w-8 h-8 text-primary mb-2" />
              <CardTitle>AI Suggestions</CardTitle>
              <CardDescription>
                Get outfit recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Leverage AI to get personalized outfit recommendations based on your style preferences, weather, and occasion.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <Calendar className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Seasonal Styles</CardTitle>
              <CardDescription>
                Organize by season or occasion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Plan your outfits for different seasons and special events. Get seasonal wardrobe suggestions and rotation tips.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Free to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                StyleAI is completely free to use. Feel free to customize it for your personal wardrobe management needs.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="#getting-started">
                  Get Started
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join our community of fashion enthusiasts to help shape the future of StyleAI.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="/profile">
                  Join Community
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Leveraging AI technology to provide smart recommendations and enhance your wardrobe management experience.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="getting-started" className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Card className="bg-gradient-to-br from-fashion-mid-purple/10 to-fashion-light-purple/30">
          <CardHeader>
            <CardTitle className="text-2xl">Getting Started</CardTitle>
            <CardDescription>
              Quick steps to start using StyleAI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-background/60 backdrop-blur-sm p-4 rounded-lg">
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li className="text-sm">
                  <span className="font-medium">Create an account:</span>
                  <p className="text-muted-foreground ml-2 mt-1">Sign up with your email or social media account</p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Add your wardrobe items:</span>
                  <p className="text-muted-foreground ml-2 mt-1">Take photos of your clothing or upload existing images</p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Create outfits:</span>
                  <p className="text-muted-foreground ml-2 mt-1">Mix and match items to build your outfit collections</p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Get AI recommendations:</span>
                  <p className="text-muted-foreground ml-2 mt-1">Let StyleAI suggest outfit combinations based on your style</p>
                </li>
              </ol>
            </div>
            <div className="mt-6 text-center">
              <Button asChild>
                <a href="/wardrobe">
                  Start Adding Your Wardrobe
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>StyleAI - Digital Wardrobe Stylist</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} StyleAI</p>
      </footer>
    </Layout>
  );
}
