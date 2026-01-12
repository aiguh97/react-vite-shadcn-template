import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbNav() {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter(Boolean)

  return (
    <Breadcrumb style={{marginBottom:'6px'}}>
      <BreadcrumbList>
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((segment, index) => {
          const fullPath = "/" + pathnames.slice(0, index + 1).join("/")
          const isLast = index === pathnames.length - 1
          const label = segment.charAt(0).toUpperCase() + segment.slice(1)

          return (
            <React.Fragment key={fullPath}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={fullPath}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
