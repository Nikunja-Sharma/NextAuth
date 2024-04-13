"use client";
import UserButton from "@/components/profile/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[98vw] mx-4  md:w-[70vw]  shadow-sm">
            <div className="flex flex-row flex-wrap gap-x-2">
                <Button
                    asChild
                    variant={pathname === "/dashboard" ? "default" : "outline"}
                >
                    <Link href={"/dashboard"}>dashboard</Link>
                </Button>
                <Button
                    asChild
                    variant={
                        pathname === "/iotsettings" ? "default" : "outline"
                    }
                >
                    <Link href={"/iotsettings"}>IOT Settings</Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/client" ? "default" : "outline"}
                >
                    <Link href={"/client"}>client</Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/server" ? "default" : "outline"}
                >
                    <Link href={"/server"}>Server</Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/admin" ? "default" : "outline"}
                >
                    <Link href={"/admin"}>Admin</Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/settings" ? "default" : "outline"}
                >
                    <Link href={"/settings"}>Settings</Link>
                </Button>
            </div>
            <UserButton />
        </nav>
    );
};

export default Navbar;
