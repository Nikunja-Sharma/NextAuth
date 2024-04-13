import { UserInfo } from "@/components/profile/user-info";
// import  from '@/components/profile/user-info'
import { currentUser } from "@/lib/auth";
import React from "react";

const page = async () => {
    const user = await currentUser();
    // console.log(user)
    return (
        <>
            <UserInfo label="Server Component" user={user}></UserInfo>
        </>
    );
};

export default page;
