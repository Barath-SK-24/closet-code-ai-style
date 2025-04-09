
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Shirt, Gem, Filter, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Sample wardrobe data
const initialWardrobe = [
  {
    id: "1",
    name: "White T-shirt",
    category: "tops",
    color: "white",
    season: "all",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Blue Jeans",
    category: "bottoms",
    color: "blue",
    season: "all",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Black Dress",
    category: "dresses",
    color: "black",
    season: "all",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Leather Jacket",
    category: "outerwear",
    color: "brown",
    season: "fall",
    image: "/placeholder.svg",
  },
];

const categories = ["tops", "bottoms", "dresses", "outerwear", "accessories", "shoes"];
const seasons = ["all", "spring", "summer", "fall", "winter"];
const colors = ["black", "white", "blue", "red", "green", "brown", "gray", "other"];

export default function Wardrobe() {
  const [wardrobe, setWardrobe] = useState(initialWardrobe);
  const [activeTab, setActiveTab] = useState("all");
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    color: "",
    season: "",
    image: "/placeholder.svg",
  });
  const { toast } = useToast();

  const filteredItems = activeTab === "all" 
    ? wardrobe 
    : wardrobe.filter(item => item.category === activeTab);

  const addItem = () => {
    if (!newItem.name || !newItem.category) {
      toast({
        title: "Error",
        description: "Please fill in at least name and category",
        variant: "destructive",
      });
      return;
    }
    
    const updatedWardrobe = [
      ...wardrobe,
      {
        id: (wardrobe.length + 1).toString(),
        ...newItem,
      },
    ];
    
    setWardrobe(updatedWardrobe);
    setNewItem({
      name: "",
      category: "",
      color: "",
      season: "",
      image: "/placeholder.svg",
    });
    
    toast({
      title: "Item added",
      description: "Your item has been added to your wardrobe",
    });
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Wardrobe</h1>
          <p className="text-muted-foreground">Manage your clothing items</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
                <DialogDescription>
                  Add a new item to your digital wardrobe
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Select
                    value={newItem.category}
                    onValueChange={(value) => setNewItem({ ...newItem, category: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="color" className="text-right">
                    Color
                  </Label>
                  <Select
                    value={newItem.color}
                    onValueChange={(value) => setNewItem({ ...newItem, color: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color.charAt(0).toUpperCase() + color.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="season" className="text-right">
                    Season
                  </Label>
                  <Select
                    value={newItem.season}
                    onValueChange={(value) => setNewItem({ ...newItem, season: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      {seasons.map((season) => (
                        <SelectItem key={season} value={season}>
                          {season.charAt(0).toUpperCase() + season.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image" className="text-right">
                    Image
                  </Label>
                  <Button variant="outline" className="col-span-3">
                    <Upload className="mr-2 h-4 w-4" /> Upload Image
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addItem}>
                  Add to Wardrobe
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="tops">Tops</TabsTrigger>
          <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
          <TabsTrigger value="dresses">Dresses</TabsTrigger>
          <TabsTrigger value="outerwear">Outerwear</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="shoes">Shoes</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden wardrobe-item">
                <CardContent className="p-0">
                  <div className="aspect-square bg-secondary relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-primary px-2 py-1 rounded-md text-xs font-medium text-primary-foreground">
                      {item.season.charAt(0).toUpperCase() + item.season.slice(1)}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-muted-foreground capitalize">{item.color} • {item.category}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
