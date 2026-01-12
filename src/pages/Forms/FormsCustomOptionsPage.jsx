import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Rocket, User, Crown, Server, Shield, Lock, BellRingIcon } from "lucide-react"

const FormsCustomOptions = () => {

    const basicOptions = [
  {
    id: "basic",
    label: "Basic",
    price: "Free",
    desc: "Get 1 project with 1 team members."
  },
  {
    id: "premium",
    label: "Premium",
    price: "$ 5.00",
    desc: "Get 5 projects with 5 team members."
  }
]

const checkboxOptions = [
  {
    id: "discount",
    label: "Discount",
    price: "20%",
    desc: "Get 20% off on your next purchases!",
    defaultChecked: true
  },
  {
    id: "updates",
    label: "Updates",
    price: "Free",
    desc: "Get Updates regarding related products.",
    defaultChecked: false
  }
]

const [checked, setChecked] = React.useState(false)
const [checkedHidden, setCheckedHidden] = React.useState(false)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Basic Radio */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Radio</CardTitle>
        </CardHeader>
        <CardContent>
     <RadioGroup defaultValue="basic" className="grid gap-4 sm:grid-cols-2">
  <div>
    <RadioGroupItem value="basic" id="basic" className="peer sr-only" />
    <Label
      htmlFor="basic"
      className="flex flex-col gap-1 p-4 border-2 rounded-lg cursor-pointer peer-checked:border-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Free</span>
      </div>
      <span className="font-semibold">Basic</span>
      <p className="text-xs text-muted-foreground">
        Get 1 project with 1 team members.
      </p>
    </Label>
  </div>

  <div>
    <RadioGroupItem value="premium" id="premium" className="peer sr-only" />
    <Label
      htmlFor="premium"
      className="flex flex-col gap-1 p-4 border-2 rounded-lg cursor-pointer peer-checked:border-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">$ 5.00</span>
      </div>
      <span className="font-semibold">Premium</span>
      <p className="text-xs text-muted-foreground">
        Get 5 projects with 5 team members.
      </p>
    </Label>
  </div>
</RadioGroup>

        </CardContent>
      </Card>

      {/* Basic Checkboxes */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Checkboxes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
       <div>
      <Checkbox
        id="discount"
        checked={checkedHidden}
        onCheckedChange={setCheckedHidden}
        className="sr-only" // ini untuk hide checkbox
      />
      <Label
        htmlFor="discount"
        className={`flex flex-col gap-1 p-4 border-2 rounded-lg cursor-pointer transition
          ${checkedHidden ? "border-primary " : "border-gray-300"}`}
      >
        <div className="flex items-center justify-between">
        <p
          className={`text-xs  text-muted-foreground
          }`}
        >
      <BellRingIcon />  Using Pushnotifications {JSON.stringify(checkedHidden)} sadd
        </p>
        </div>
    
      </Label>
    </div>

            <Label
              htmlFor="updates"
              className="flex flex-col gap-1 p-4 border-2 rounded-lg cursor-pointer hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <Checkbox id="updates" />
                <span className="text-sm font-medium">Free</span>
              </div>
              <span className="font-semibold">Updates</span>
              <p className="text-xs text-muted-foreground">
                Get Updates regarding related products.
              </p>
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
<CardHeader>
          <CardTitle>Teguh Checkbox</CardTitle>
        </CardHeader>
         <div className="flex items-center space-x-2">
      <Checkbox id="subscribe" checked={checked} onCheckedChange={setChecked} />
      <label htmlFor="subscribe">Subscribe to newsletter</label>
    </div>
      </Card>

      {/* Custom Option Radios With Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Option Radios With Icons</CardTitle>
        </CardHeader>
        <CardContent>
      <RadioGroup defaultValue="basic" className="grid gap-4 sm:grid-cols-2">
  {basicOptions.map((option) => (
    <div key={option.id}>
      <RadioGroupItem
        value={option.id}
        id={option.id}
        className="peer sr-only"
      />
      <Label
        htmlFor={option.id}
        className="flex flex-col gap-1 p-4 border-2 rounded-lg cursor-pointer peer-checked:border-primary"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{option.price}</span>
        </div>
        <span className="font-semibold">{option.label}</span>
        <p className="text-xs text-muted-foreground">{option.desc}</p>
      </Label>
    </div>
  ))}
</RadioGroup>
        </CardContent>
      </Card>

      {/* Custom Option Checkboxes With Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Option Checkboxes With Icons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { id: "backup", label: "Backup", icon: <Server size={24} /> },
              { id: "encrypt", label: "Encrypt", icon: <Shield size={24} /> },
              { id: "site-lock", label: "Site Lock", icon: <Lock size={24} /> },
            ].map((item) => (
              <Label
                key={item.id}
                htmlFor={item.id}
                className="flex flex-col items-center gap-2 p-4 border-2 rounded-lg cursor-pointer hover:border-primary data-[state=checked]:border-primary"
              >
                {item.icon}
                <span className="font-semibold">{item.label}</span>
                <p className="text-xs text-center text-muted-foreground">
                  Cake sugar plum fruitcake I love sweet roll jelly-o.
                </p>
                <Checkbox id={item.id} defaultChecked={item.id === "backup"} />
              </Label>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FormsCustomOptions
