import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Home,
  BellRing,
  Lock,
  Table,
  BookTextIcon,
  ChartAreaIcon,
  MapIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroupContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "./ui/sidebar";
import Logo from "./Logo";

import { MinguhCard } from "./templates/components/MinguhCard";

const IconSubmenu = ({ isSubActive }) => {
  return (
    <div
      className={
        isSubActive
          ? `flex items-center justify-center w-[12px] h-[12px] rounded-full border-2 border-gray-400`
          : "flex items-center justify-center w-[12px] h-[12px] rounded-full"
      }
    >
      <div
        className={`w-[6px] h-[6px] rounded-full ${
          isSubActive ? "bg-primary" : "bg-gray-400"
        }`}
      />
    </div>
  );
};

const Asidebar = () => {
  const location = useLocation();
 const { open } = useSidebar();
const [openMenu, setOpenMenu] = useState(null);



  
  const items = [
    
    {
      name: "Home",
      menu: [
        {
          title: "Home",
          url: "/",
          icon: Home,
        },
      ],
      submenu:[]
    },
     {
      name: "FORMS & TABLES",
      menu: [
        {
          title: "Table",
          url: "/tables",
          icon: Table,
          submenu: [
            {
              title: "Table Standard",
              url: "/tables/standard",
              icon: IconSubmenu,
            },
            { title: "Table Shadcn", url: "/tables/shadcn", icon: IconSubmenu },
            {
              title: "Table Shadcn D&D",
              url: "/tables/shadcn/drag-n-drop",
              icon: IconSubmenu,
            },
          ],
        },
       
      ],
    },
    {
      name: "",
      menu: [
        { title: "Push Notifications", url: "/notifications", icon: BellRing },
      ],
    },
    { name: "", menu: [{ title: "Sessions", url: "/sessions", icon: Lock }] },
    {
      name: "FORMS & TABLES",
      menu: [
        {
          title: "Table",
          url: "/tables",
          icon: Table,
          submenu: [
            {
              title: "Table Standard",
              url: "/tables/standard",
              icon: IconSubmenu,
            },
            { title: "Table Shadcn", url: "/tables/shadcn", icon: IconSubmenu },
            {
              title: "Table Shadcn D&D",
              url: "/tables/shadcn/drag-n-drop",
              icon: IconSubmenu,
            },
          ],
        },
        {
          title: "Forms",
          url: "/forms",
          icon: BookTextIcon,
          submenu: [
            {
              title: "Form Elements",
              url: "/forms/elements",
              icon: IconSubmenu,
            },
            {
              title: "Form Custom Options",
              url: "/forms/custom-options",
              icon: IconSubmenu,
            },
            {
              title: "Form Layouts",
              url: "/forms/layouts",
              icon: IconSubmenu,
            },
            {
              title: "Form Wizard",
              url: "/forms/wizard",
              icon: IconSubmenu,
            },
          ],
        },
      ],
    },
    {
      name: "CHARTS & MAPS",
      menu: [
        {
          title: "Charts",
          url: "/charts",
          icon: ChartAreaIcon,
          submenu: [
            {
              title: "Apex Chart",
              url: "/charts/apexchart",
              icon: IconSubmenu,
            },
            { title: "Chart JS", url: "/charts/chartjs", icon: IconSubmenu },
          ],
        },
        {
          title: "Maps",
          url: "/forms",
          icon: MapIcon,
          submenu: [
            {
              title: "Form Elements",
              url: "/forms/elements",
              icon: IconSubmenu,
            },
            {
              title: "Form Custom Options",
              url: "/forms/custom-options",
              icon: IconSubmenu,
            },
            {
              title: "Form Layouts",
              url: "/forms/layouts",
              icon: IconSubmenu,
            },
            {
              title: "Form Wizard",
              url: "/forms/wizard",
              icon: IconSubmenu,
            },
          ],
        },
      ],
    },
  ];

  // Buka otomatis menu parent jika submenu aktif
  useEffect(() => {
    items.forEach((item) => {
      if (item.submenu?.some((sub) => sub.url === location.pathname)) {
        setOpenMenu((prev) => ({ ...prev, [item.title]: true }));
      }
    });
  }, [location.pathname]);

  const toggleMenu = (title) => {
    setOpenMenu((prev) => {
      // Kalau menu yang diklik sudah terbuka, tutup semuanya
      if (prev[title]) {
        return {};
      }
      // Kalau menu lain terbuka, tutup semua dan buka yang baru
      return { [title]: true };
    });
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="!pt-0 bg-white">
        <div className="flex h-[60px] items-center">
          <Logo />
          {open && <span className="ml-2 font-bold text-lg">Minguh</span>}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup style={{ padding: 0 }}>
          <SidebarGroupContent>
            <SidebarMenu className="xl:h-[455px] xl:max-h-[475px] lg:h-[405px] lg:max-h-[410px] md:h-[400px] md:max-h-[400px] max-h-[400px] overflow-y-auto custom-scrollbar">
              {/* isi menu */}
              {items.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {group.name && open && (
                    <div className="flex items-center gap-2 mt-3 mb-1">
                      {/* Garis kiri */}
                      <div className="w-5 h-[2px] bg-gray-300" />
                      {/* Label */}
                      <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase rounded">
                        {group.name}
                      </div>
                    </div>
                  )}

               {group.menu.map((item) => {
  const isActive =
    location.pathname === item.url ||
    item.submenu?.some((sub) => sub.url === location.pathname);

  const isOpen = openMenu === item.title;

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        {item.submenu ? (
          <button
            onClick={() => open && toggleMenu(item.title)}
            className={`flex items-center ${
              open ? "gap-2 px-3" : "justify-center"
            } py-3 w-full rounded-md ml-3 transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "text-gray-700"
            }`}
          >
            <item.icon size={18} />

            {open && (
              <>
                <span>{item.title}</span>
                <div className="ml-auto">
                  {isOpen ? <ChevronDown /> : <ChevronRight />}
                </div>
              </>
            )}
          </button>
        ) : (
          <Link
            to={item.url}
            className={`flex items-center gap-2 px-3 py-2 ml-3 rounded-md ${
              isActive
                ? "bg-primary text-white"
                : "text-gray-700"
            }`}
          >
            <item.icon size={18} />
            {open && <span>{item.title}</span>}
          </Link>
        )}
      </SidebarMenuButton>

      {/* SUBMENU */}
      {item.submenu && open && (
        <div
          className={`ml-6 mt-1 transition-all overflow-hidden ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {item.submenu.map((sub) => {
            const isSubActive = location.pathname === sub.url;
            return (
              <Link key={sub.title} to={sub.url}>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                    isSubActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  <IconSubmenu isSubActive={isSubActive} />
                  {sub.title}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </SidebarMenuItem>
  );
})}

                </React.Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {open && <MinguhCard />}
      {/* <SidebarRail /> */}
    </Sidebar>
  );
};

export default Asidebar;
