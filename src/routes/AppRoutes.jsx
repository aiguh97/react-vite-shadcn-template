import { Routes, Route } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import Notifications from "@/pages/Notifications";
import Sessions from "@/pages/Sessions";
import Account from "@/pages/Account";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Asidebar from "@/components/Asidebar";
// import Header from "@/components/Main"; // ganti dengan path komponen header yang benar
import TableShadcn from "@/pages/Tables/TableShadcn";
import TableStandardPage from "@/pages/Tables/TableStandardPage";
import TableShadcnDragandDrop from "@/pages/Tables/TableShadcnDragandDrop";
import FormElementPage from "@/pages/Forms/FormElementPage";
import FormsCustomOptions from "@/pages/Forms/FormsCustomOptionsPage";
import ProfilePage from "@/pages/Profiles/ProfilePage";
import Header from "@/layouts/Header";
import ApexchartPage from "@/pages/ChartPages/ApexchartPages/ApexchartPage";
import ChartJsPage from "@/pages/ChartPages/ChartjsPages/ChartJsPage";

export const AppRoutes = () => {
  return (
    <SidebarProvider>
      <Asidebar />
      <SidebarInset>
        <main className="w-full">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/account" element={<Account />} />
            <Route path="/tables/standard" element={<TableStandardPage />} />
            <Route path="/tables/shadcn" element={<TableShadcn />} />
            <Route path="/tables/shadcn/drag-n-drop" element={<TableShadcnDragandDrop />} />
            <Route path="/forms/elements" element={<FormElementPage/>} />
            <Route path="/charts/apexchart" element={<ApexchartPage/>} />
            <Route path="/charts/chartjs" element={<ChartJsPage/>} />
            <Route path="/forms/custom-options" element={<FormsCustomOptions/>} />
            <Route path="/profiles/my-profile" element={<ProfilePage/>} />
          </Routes>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
