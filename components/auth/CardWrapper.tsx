import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Header } from "./header";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapperProps {
    children: React.ReactNode;
    headLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                ></BackButton>
            </CardFooter>
        </Card>
    );
};
