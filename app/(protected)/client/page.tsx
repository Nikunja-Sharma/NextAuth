"use client";
import { UserInfo } from "@/components/profile/user-info";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import React from "react";

const ClientPage = () => {
    const user = useCurrentUser();
    // console.log(user)
    return (
        <>
            <UserInfo label="Client Component" user={user}></UserInfo>
        </>
    );
};

export default ClientPage;
