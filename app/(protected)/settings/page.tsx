"use client";
import React from "react";
import { logout } from "@/action/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Page = () => {
    const user = useCurrentUser();
    const onClick = () => {
        logout();
    };
    return (
        <>
            <div className="bg-slate-100 p-10 rounded-xl">
                {JSON.stringify(user)}
                <button onClick={onClick} type="submit">
                    signOut
                </button>
            </div>
        </>
    );
};

export default Page;
