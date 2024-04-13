"use client";
import { admin } from "@/action/admin";
import RoleGate from "@/components/auth/RoleGate";
import { FormSuccess } from "@/components/formsuccess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { useCurrentRole } from '@/hooks/useCurrentRole'
// import { currentRole } from '@/lib/auth'
import React from "react";
import { toast } from "sonner";

const page = () => {
    // const role = useCurrentRole()
    // const role = await currentRole()

    const onAPIRouteClick = () => {
        fetch("/api/admin").then((Response) => {
            if (Response.ok) {
                toast.success("Allowed API Routes(CLIENT)");
            } else {
                toast.error("API Forbidden Routes(CLIENT)");
            }
        });
    };
    const serverActionClick = () => {
        admin().then((data) => {
            if (data.error) {
                toast.error(data.error);
            }
            if (data.success) {
                toast.success(data.success);
            }
        });
    };
    return (
        <Card className="bg-secondary flex flex-col justify-between items-center p-4 rounded-xl w-[98vw] mx-4  md:w-[70vw]  shadow-sm">
            <CardHeader>
                <p className="text-primary text-3xl font-semibold text-center">
                    Admin
                </p>
            </CardHeader>
            <CardContent className="w-[100%] space-y-4">
                <RoleGate allowedRoles={"ADMIN"}>
                    <FormSuccess
                        message={"You are allowed to view this content"}
                    ></FormSuccess>
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium"> Admin-Only API Route</p>
                    <Button onClick={onAPIRouteClick}>Click to Test</Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium"> Admin-Only API Route</p>
                    <Button onClick={serverActionClick}>Click to Test</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default page;
