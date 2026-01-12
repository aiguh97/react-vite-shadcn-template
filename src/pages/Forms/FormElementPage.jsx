import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

const FormElementPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Card Input */}
      <Card>
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" />
          <p className="text-sm text-gray-500">
            We&apos;ll never share your details with anyone else.
          </p>
        </CardContent>
      </Card>

      {/* Card Checkbox dan Radio */}
      <Card>
        <CardHeader>
          <CardTitle>Checkboxes and Radios</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {/* Checkboxes */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="unchecked" />
              <Label htmlFor="unchecked">Unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checked" defaultChecked />
              <Label htmlFor="checked">Checked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-unchecked" disabled />
              <Label htmlFor="disabled-unchecked">Disabled Unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" defaultChecked disabled />
              <Label htmlFor="disabled-checked">Disabled Checked</Label>
            </div>
          </div>

          {/* Radios */}
          <RadioGroup defaultValue="checked">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unchecked" id="r1" />
              <Label htmlFor="r1">Unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="checked" id="r2" />
              <Label htmlFor="r2">Checked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled-unchecked" id="r3" disabled />
              <Label htmlFor="r3">Disabled unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="disabled-checked"
                id="r4"
                defaultChecked
                disabled
              />
              <Label htmlFor="r4">Disabled checked</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Card Switch */}
      <Card>
        <CardHeader>
          <CardTitle>Switches</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {/* Default switches */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="switch-1" />
              <Label htmlFor="switch-1">Default switch checkbox input</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-2" defaultChecked />
              <Label htmlFor="switch-2">Checked switch checkbox input</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-3" disabled />
              <Label htmlFor="switch-3">Disabled switch checkbox input</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-4" defaultChecked disabled />
              <Label htmlFor="switch-4">
                Disabled checked switch checkbox input
              </Label>
            </div>
          </div>

          {/* Reverse switches */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Label htmlFor="rswitch-1">Reverse checkbox</Label>
              <Switch id="rswitch-1" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="rswitch-2">Unchecked</Label>
              <Switch id="rswitch-2" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="rswitch-3">Checked</Label>
              <Switch id="rswitch-3" defaultChecked />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="rswitch-4">Reverse switch checkbox input</Label>
              <Switch id="rswitch-4" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FormElementPage
