import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FileIcon } from "lucide-react";

function TimelineItem({
  bulletColor = "bg-blue-500",
  lineHeight = 80,
  children,
}) {
  return (
    <div className="relative pl-6">
      {/* Bullet + Garis */}
      <div className="absolute left-0 flex flex-col items-center">
        <div className={`w-3 h-3 mt-[6px] rounded-full ${bulletColor}`}></div>
        <div
          className="mt-2 w-[2px] bg-gray-200"
          style={{ height: lineHeight }}
        ></div>
      </div>

      {/* Isi Konten */}
      {children}
    </div>
  );
}

export function ActivityTimeline() {
  return (
    <Card className="rounded-lg shadow-sm " style={{padding:0}}>
  
      <CardContent style={{padding:0}}>
          <CardTitle className="flex items-center gap-2" style={{padding:12}}>
          <span className="material-icons">Timeline</span>
          Activity Timeline
        </CardTitle>
        <div className="relative pl-6 space-y-[21px] p-4 ">
          <div className="space-y-[21px] p-4">
            <TimelineItem bulletColor="bg-blue-500" lineHeight={81}>
              <div
                className="relative flex items-start gap-4"
                style={{ height: 90 }}
              >
                <div className="flex-1 flex flex-col justify-between">
                  <p className="font-medium">12 Invoices have been paid</p>
                  <p className="text-sm text-gray-500">
                    Invoices have been paid to the company
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 px-2 py-1 rounded text-sm">
                    <FileIcon className="w-4 h-4 text-red-500" /> invoices.pdf
                  </div>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  12 min ago
                </span>
              </div>
            </TimelineItem>

            <TimelineItem bulletColor="bg-green-500" lineHeight={81}>
              <div className="relative flex items-start gap-4">
                <div className="flex-1 space-y-1">
                  <p className="font-medium">Client Meeting</p>
                  <p className="text-sm text-gray-500">
                    Project meeting with John @10:15am
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                      <AvatarFallback>LC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">Lester McCarthy (Client)</p>
                      <p className="text-gray-500">CEO of ThemeSelection</p>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  45 min ago
                </span>
              </div>
            </TimelineItem>

            <TimelineItem bulletColor="bg-cyan-500" lineHeight={81}>
              <div className="relative flex items-start gap-4">
                <div className="flex-1 space-y-1">
                  <p className="font-medium">Create a new project for client</p>
                  <p className="text-sm text-gray-500">
                    6 team members in a project
                  </p>
                  <div className="flex mt-2">
                    <Avatar className="w-8 h-8 -ml-2 border-2 border-white">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/31.jpg" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 -ml-2 border-2 border-white">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 -ml-2 border-2 border-white">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/12.jpg" />
                      <AvatarFallback>EF</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center justify-center w-8 h-8 -ml-2 border-2 border-white bg-gray-100 rounded-full text-xs">
                      +3
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  2 days ago
                </span>
              </div>
            </TimelineItem>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
