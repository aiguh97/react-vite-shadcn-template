import { BreadcrumbNav } from '@/components/BreadCrumbNav'
import CustomTableShadcnDragandDrop from '@/components/tables/CustomTableShadcnDragandDrop'
import React from 'react'
import { Badge } from "@/components/ui/badge"


const TableShadcnDragandDrop = () => {
         const columns = [
    { header: "Task", accessor: "task" },
    {
      header: "Title",
      accessor: "title",
      render: (row) => (
        <>
          <Badge variant="secondary">{row.tag}</Badge>{" "}
          <span>{row.title}</span>
        </>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (row) => <Badge>{row.status}</Badge>,
    },
    { header: "Priority", accessor: "priority" },
    { header: "Est. Hours", accessor: "hours" },
    { header: "Created At", accessor: "createdAt" },
  ]

  const data = [
    {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
       {
      task: "TASK-1857",
      tag: "enhancement",
      title:
        "You can't index the program without parsing the redundant XML system!",
      status: "Todo",
      priority: "Medium",
      hours: 12,
      createdAt: "August 6, 2025",
    },
  ]
  return (
       <div className="p-4">
          <BreadcrumbNav />
          <h1 className="text-2xl font-bold mb-4">Standard Table</h1>
          <CustomTableShadcnDragandDrop
            columns={columns}
            data={data}
            caption="List produk di toko kamu."
          />
        </div>
  )
}

export default TableShadcnDragandDrop
