import { Card, CardContent } from "@/components/ui/card";
// import minguh from "@/assets/images/minguh-with-laptop.png" // contoh path

import minguh from "../../../assets/images/minguh-with-laptop.png";
export function MinguhCard() {
  return (
    <div className="flex w-full h-[130px] justify-center items-center">
      <Card className="w-3/4 h-[300px] rounded-t-xl pt-3 flex flex-col items-center gap-1">
        <img
          src={minguh}
          alt="minguh-with-laptop"
          className="w-[95px] h-[90px] object-cover rounded-md px-3"
        />
        <CardContent
          className="px-3 flex flex-col bg-indigo-500 py-3"
          style={{
            height: 107,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          <span className="text-2xl font-bold text-center font-hostgrotesk text-white">
            Adminguh
          </span>
          <span className="text-xs text-justify font-hostgrotesk text-white">
            Adminguh is an admin template created by Teguh Muhammad Harits
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
