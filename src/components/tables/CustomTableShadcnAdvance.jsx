"use client"

import * as React from "react"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Plus
} from "lucide-react"
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle
} from "@/components/ui/alert-dialog"

export function CustomTableShadcnAdvance({
  columns = [],
  data = [],
  pageSizeOptions = [5, 10, 20],
}) {
  const [search, setSearch] = React.useState("")
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(pageSizeOptions[0])

  // State Add & Edit
  const [isAddOpen, setIsAddOpen] = React.useState(false)
  const [isEditOpen, setIsEditOpen] = React.useState(false)
  const [editRow, setEditRow] = React.useState(null)

  // State Delete
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false)
  const [deleteRow, setDeleteRow] = React.useState(null)

  const filteredData = React.useMemo(() => {
    return data.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [data, search])

  const totalPages = Math.ceil(filteredData.length / rowsPerPage)
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  )

  const handleEditClick = (row) => {
    setEditRow(row)
    setIsEditOpen(true)
  }

  const handleDeleteClick = (row) => {
    setDeleteRow(row)
    setIsDeleteOpen(true)
  }

  const confirmDelete = () => {
    console.log("Deleting row:", deleteRow)
    setIsDeleteOpen(false)
  }

  return (
    <div className="space-y-4">
      {/* Search + Add Button */}
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setPage(1)
            setSearch(e.target.value)
          }}
          className="max-w-xs"
        />
        <Button onClick={() => setIsAddOpen(true)}>
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, idx) => (
                <TableHead key={idx} className={col.align || ""}>
                  {col.header}
                </TableHead>
              ))}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <TableCell key={colIndex}>
                      {col.render ? col.render(row) : row[col.accessor]}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditClick(row)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDeleteClick(row)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="text-center">
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value))
              setPage(1)
            }}
            className="border rounded px-2 py-1 text-sm"
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(1)}
            disabled={page === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {page} of {totalPages || 1}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages || totalPages === 0}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add Drawer */}
      <Sheet open={isAddOpen} onOpenChange={setIsAddOpen}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Add new task</SheetTitle>
            <SheetDescription>
              Fill the details to create a new task.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <div>
              <Label>Title</Label>
              <Input placeholder="Enter task title" />
            </div>
            <div>
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddOpen(false)}>
                Cancel
              </Button>
              <Button>Add</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Edit Drawer */}
      <Sheet open={isEditOpen} onOpenChange={setIsEditOpen}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Update task</SheetTitle>
            <SheetDescription>
              Update the task details and save the changes.
            </SheetDescription>
          </SheetHeader>
          {editRow && (
            <div className="mt-4 space-y-4">
              <div>
                <Label>Title</Label>
                <Input defaultValue={editRow.title} />
              </div>
              <div>
                <Label>Status</Label>
                <Select defaultValue={editRow.status}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">Todo</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditOpen(false)}>
                  Cancel
                </Button>
                <Button>Save</Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Delete Confirmation */}
      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your task.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
