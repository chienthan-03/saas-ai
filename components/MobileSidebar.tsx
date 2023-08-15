"use client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBar from "./SideBar";

function MobileSidebar() {
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
            <SideBar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar