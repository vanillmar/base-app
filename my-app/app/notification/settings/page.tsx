import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function NotificationSettings() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Notification Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose how you want to receive notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Notification Channels</h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="in-app">In-App Notifications</Label>
                <Switch id="in-app" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email">Email Alerts</Label>
                <Switch id="email" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms">SMS Notifications</Label>
                <Switch id="sms" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push">Push Notifications</Label>
                <Switch id="push" defaultChecked />
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Notification Types</h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="academic">Academic Updates</Label>
                <Switch id="academic" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="events">Event Notifications</Label>
                <Switch id="events" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="fees">Fee Reminders</Label>
                <Switch id="fees" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="personal">Personalized Notifications</Label>
                <Switch id="personal" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="emergency">Emergency Alerts</Label>
                <Switch id="emergency" defaultChecked />
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Settings</h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="language">Preferred Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="frequency">Notification Frequency</Label>
                <Select defaultValue="realtime">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="daily">Daily Digest</SelectItem>
                    <SelectItem value="weekly">Weekly Summary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

