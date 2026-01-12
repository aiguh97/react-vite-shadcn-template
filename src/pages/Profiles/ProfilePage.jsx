import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  MapPin,
  Calendar,
 FileIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ActivityTimeline } from "@/components/customs/ActivityTimeline";
import ProfileCard from "@/components/customs/ProfileCard";


export default function ProfilePage() {
  return (
    <div className="p-4">
      <Card className="space-y-6 bg-white card shadow-sm rounded-lg">
          <div
          className="w-full h-[225px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/pages/profile-banner.png')",
          }}
        >
          <div className="absolute -bottom-10 left-6 flex items-end gap-4">
            <Avatar className="w-24 h-24 border-4 border-white">
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQFneO4iuPW4ag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684214420097?e=2147483647&v=beta&t=05yYeQUZu2-BXduN3sbbMGKNGFobJUbSJQA-AV3LtSY" />
              <AvatarFallback>TH</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div
          style={{
            marginTop: 31,
            padding: 20,
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          <h2 className="text-xl font-semibold">Teguh Muhammad Harits</h2>
          <div className="flex gap-4 text-gray-600 text-sm mt-1">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> Senior Programmer, Fullstack
              Developer
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Jakarta, Indonesia
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> March 21 1997
            </span>
          </div>
        </div>
      </Card>
      <div className="flex flex-col lg:flex-row  gap-4  mt-3">
           {/* LeftColumn */}
 <div>
      <ProfileCard/>
 </div>
     {/* Right Column */}
<div className="flex-1">
      <ActivityTimeline/>
</div>
      </div>

      
      </div>
    // </div>
  );
}
