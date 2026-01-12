import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Check, Briefcase, Flag, Languages, Phone, MessageSquare, Mail, Users, Star } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="space-y-4">
      {/* ABOUT */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500">ABOUT</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Full Name:</span>
            <span>John Doe</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Status:</span>
            <span>Active</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Role:</span>
            <span>Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Country:</span>
            <span>USA</span>
          </div>
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Languages:</span>
            <span>English</span>
          </div>
        </CardContent>
        <Separator />
        {/* CONTACTS */}
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm text-gray-500">CONTACTS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Contact:</span>
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Skype:</span>
            <span>john.doe</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Email:</span>
            <span>john.doe@example.com</span>
          </div>
        </CardContent>
      </Card>

      {/* TEAMS */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500">TEAMS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <p>
            <span className="font-medium">Backend Developer</span>{" "}
            <span className="text-gray-500">(126 Members)</span>
          </p>
          <p>
            <span className="font-medium">React Developer</span>{" "}
            <span className="text-gray-500">(98 Members)</span>
          </p>
        </CardContent>
      </Card>

      {/* OVERVIEW */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-500">OVERVIEW</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Task Compiled:</span>
            <span>13.5k</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Projects Compiled:</span>
            <span>146</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="font-medium">Connections:</span>
            <span>897</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
