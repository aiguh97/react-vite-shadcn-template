import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button" // kalau mau ada aksi
import { BreadcrumbNav } from "@/components/BreadCrumbNav"

const Sessions = () => {
  return (
    <div className="p-4">
      <BreadcrumbNav />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </div>
          <Button variant="outline" size="sm">Action</Button>
        </CardHeader>

        <CardContent>
          <p>Card Content</p>
        </CardContent>

        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Sessions
