
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: theme === "dark",
    autoSync: true,
  });
  const { toast } = useToast();

  // Update settings when theme changes externally
  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      darkMode: theme === "dark"
    }));
  }, [theme]);

  const handleDarkModeChange = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setSettings({ ...settings, darkMode: checked });
  };

  const saveSettings = () => {
    // Save other settings to localStorage
    localStorage.setItem("userSettings", JSON.stringify({
      notifications: settings.notifications,
      emailUpdates: settings.emailUpdates,
      autoSync: settings.autoSync
    }));

    toast({
      title: "Settings saved",
      description: "Your preferences have been updated",
    });
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account details and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email" defaultValue="john@example.com" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">Notifications</h3>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about new outfits and recommendations
                  </p>
                </div>
                <Switch
                  checked={settings.notifications}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, notifications: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive weekly style updates and tips
                  </p>
                </div>
                <Switch
                  checked={settings.emailUpdates}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, emailUpdates: checked })
                  }
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-medium">App Settings</h3>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Switch between light and dark mode
                  </p>
                </div>
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={handleDarkModeChange}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-sync</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically sync your wardrobe across devices
                  </p>
                </div>
                <Switch
                  checked={settings.autoSync}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, autoSync: checked })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button className="flex-1" onClick={saveSettings}>
            Save Settings
          </Button>
          <Button variant="outline" className="flex-1">
            Cancel
          </Button>
        </div>
      </div>
    </Layout>
  );
}
