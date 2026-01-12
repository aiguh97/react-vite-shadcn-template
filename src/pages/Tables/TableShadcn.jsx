import { BreadcrumbNav } from '@/components/BreadCrumbNav'
import { CustomTableShadcnAdvance } from '@/components/tables/CustomTableShadcnAdvance'
import { Badge } from 'lucide-react'
import React from 'react'

const TableShadcn = () => {
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
    <div className='p-4'>
        <BreadcrumbNav />
     <CustomTableShadcnAdvance
        columns={columns}
        data={data}
        pageSizeOptions={[5, 10, 20]}
      />
    </div>
  )
}

export default TableShadcn
