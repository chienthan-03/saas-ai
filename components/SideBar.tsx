"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import {
  LuLayoutDashboard,
  LuMessageSquare,
  LuImage,
  LuVideo,
  LuMusic,
  LuCode2,
  LuSettings,
} from "react-icons/lu";
import { FreeCounter } from "./free-couter";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LuLayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: LuMessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: LuImage,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: LuVideo,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: LuMusic,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: LuCode2,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Settings",
    icon: LuSettings,
    href: "/settings",
  },
];

function SideBar({
  apiLimitCount = 0,
  isPro = false
}: 
{
  apiLimitCount: number;
  isPro: boolean;
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col py-4 space-y-4 h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter
        apiLimitCount={apiLimitCount}
        isPro={isPro}
      />
    </div>
  );
}

export default SideBar;
