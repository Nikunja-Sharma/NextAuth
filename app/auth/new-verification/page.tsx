import { NewVerificationForm } from "@/components/auth/new-verification-form";
import React, { Suspense } from "react";

const page = () => {
    return (
        <Suspense>
            <NewVerificationForm />
        </Suspense>
    );
};

export default page;
