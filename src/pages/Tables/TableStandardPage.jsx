import { BreadcrumbNav } from "@/components/BreadCrumbNav";
import { CustomTableShadcn } from "@/components/tables/CustomTableShadcn";
import React from "react";

const TableStandardPage = () => {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Nama", accessor: "name" },
    { header: "Harga", accessor: "price" },
    { header: "Stok", accessor: "stock", align: "right" },
  ];

  const data = [
    { id: 1, name: "Laptop", price: "$1,200", stock: 15 },
    { id: 2, name: "Keyboard", price: "$80", stock: 40 },
    { id: 3, name: "Mouse", price: "$40", stock: 60 },
  ];
  return (
    <div className="p-4">
      <BreadcrumbNav />
      <h1 className="text-2xl font-bold mb-4">Standard Table</h1>
      <CustomTableShadcn
        columns={columns}
        data={data}
        caption="List produk di toko kamu."
      />
    </div>
  );
};

export default TableStandardPage;
