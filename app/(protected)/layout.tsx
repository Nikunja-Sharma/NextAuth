import React from "react";
import Navbar from "./_components/Navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const protectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className="h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-700">
            <Navbar/>
            {children}
        </div>
    );
};

export default protectedLayout;
