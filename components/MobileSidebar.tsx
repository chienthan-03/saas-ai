"use client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBar from "./SideBar";

function MobileSidebar({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <HiMenuAlt3 />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
            <SideBar isPro={isPro} apiLimitCount={apiLimitCount} />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar