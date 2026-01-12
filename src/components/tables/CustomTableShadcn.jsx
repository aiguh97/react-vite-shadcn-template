import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CustomTableShadcn({ columns = [], data = [], caption }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}

        {/* Header */}
        <TableHeader>
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead
                key={idx}
                className={col.align === "right" ? "text-right" : ""}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    className={col.align === "right" ? "text-right" : ""}
                  >
                    {row[col.accessor] ?? "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                Tidak ada data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
