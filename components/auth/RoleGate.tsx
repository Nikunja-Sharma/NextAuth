"use client";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import React from "react";
import { FormError } from "../formerror";

interface RoleGateProps {
    allowedRoles: UserRole;
    children: React.ReactNode;
}

const RoleGate = ({ children, allowedRoles }: RoleGateProps) => {
    const role = useCurrentRole();
    if (role !== allowedRoles) {
        return (
            <>
                <FormError
                    message={"You are not allowed to view this content"}
                ></FormError>
            </>
        );
    }
    return <>{children}</>;
};

export default RoleGate;
