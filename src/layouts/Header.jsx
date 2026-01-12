import React, { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  LogOutIcon,
  UserCircle,
  SettingsIcon,
  BellIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null); // null | 'notification' | 'avatar'
  const navigate = useNavigate();
  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleLogout = () => {
    // Hapus token / session kalau perlu
    // localStorage.removeItem("token");

    // Redirect ke halaman login
    navigate("/auth/login");
  };
  return (
    <div className="w-full sticky top-0 z-50 bg-white border-b border-[#00002f26]">
      <div className="flex h-[60px] items-center justify-between px-4">
        {/* Sidebar Trigger */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          {/* Notification */}

           <Button variant="none" size="icon"
              onClick={() => toggleMenu("notification")}
              className="relative w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <BellIcon  className="text-gray-700" />
           
            </Button>
          <div className="relative">
         

            {openMenu === "notification" && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
                <div className="flex justify-between mb-3">
                  <h4 className="font-semibold">Notification</h4>
                  <Badge>8 New</Badge>
                </div>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {[
                    {
                      name: "Lettie",
                      message: "Won the monthly best seller gold badge 🏆",
                      time: "1h ago",
                      img: "https://media.licdn.com/dms/image/v2/D5603AQFneO4iuPW4ag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684214420097?e=2147483647&v=beta&t=05yYeQUZu2-BXduN3sbbMGKNGFobJUbSJQA-AV3LtSY",
                    },
                    {
                      name: "Charles Franklin",
                      message: "Accepted your connection",
                      time: "12h ago",
                      img: "https://i.pravatar.cc/40?img=2",
                    },
                  ].map((n, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={n.img} />
                        <AvatarFallback>{n.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{n.name}</span>
                        <span className="text-sm text-gray-500">
                          {n.message}
                        </span>
                        <span className="text-xs text-gray-400">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-3">View all notifications</Button>
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="relative">
            <div
              className="relative cursor-pointer"
              onClick={() => toggleMenu("avatar")}
            >
              <Avatar className="w-9 h-9">
                <AvatarImage
                  width={9}
                  height={9}
                  src="https://media.licdn.com/dms/image/v2/D5603AQFneO4iuPW4ag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684214420097?e=2147483647&v=beta&t=05yYeQUZu2-BXduN3sbbMGKNGFobJUbSJQA-AV3LtSY"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 block w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
            </div>
            {openMenu === "avatar" && (
              <div className="absolute right-0 mt-2 w-[275px] bg-white shadow-lg rounded-lg overflow-hidden z-50">
                {/* Header User Info */}
                <div className="flex items-center gap-3 p-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQFneO4iuPW4ag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684214420097?e=2147483647&v=beta&t=05yYeQUZu2-BXduN3sbbMGKNGFobJUbSJQA-AV3LtSY" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Teguh Muhammad Harits</p>
                    <p className="text-xs text-gray-500">Superadmin</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t" />

                {/* Menu Items */}
                <div className="space-y-1 p-2">
                  {[
                    {
                      name: "My Profile",
                      icon: UserCircle,
                      onClick:()=>{
                        navigate('/profiles/my-profile')
                        setOpenMenu(null)
                      }
                    },
                    {
                      name: "Settings",
                      icon: SettingsIcon, // ganti dengan icon settings dari lucide-react
                      onClick:()=>{}
                    },
                  ].map((n, idx) => (
                    <button
                    onClick={n.onClick}
                      key={idx}
                      className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-gray-100"
                    >
                      <n.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm">{n.name}</span>
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t" />

                {/* Logout */}
                <div className="p-2">
                  <button    onClick={handleLogout} className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-red-50 text-red-600">
                    <LogOutIcon className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
