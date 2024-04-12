"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "./CardWrapper";
import { Button } from "../ui/button";
import { FormError } from "../formerror";
import { FormSuccess } from "../formsuccess";
import { login } from "@/action/login";
import Link from "next/link";
// todo!!
export const LoginForm = () => {
    const searchParams = useSearchParams();
    const [urlError, setUrlError] = useState<string | undefined>("");
    useEffect(() => {
        var url = searchParams.get("error");

        if (url === "OAuthAccountNotLinked") {
            setUrlError("Email already in use with different provider!");
        } else {
            setUrlError("");
        }
    }, [searchParams, urlError]);;
    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            login(values)
                .then((data) => {
                    console.log(data);
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }
                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                    }
                    if (data?.twofactor) {
                        setShowTwoFactor(true);
                        setUrlError("");
                    }
                })
                .catch(() => {
                    setError("Something went wrong!");
                });
        });
    };
    return (
        <div>
            <CardWrapper
                headLabel="Welcome Back"
                backButtonLabel={showTwoFactor ? '' : "Dont have a account?"}
                backButtonHref="/auth/register"
                showSocial
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div>
                            {showTwoFactor && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="code"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Two Factor Code
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        disabled={isPending}
                                                        placeholder="123456"
                                                        type="password"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                            {!showTwoFactor && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        disabled={isPending}
                                                        placeholder="john.doe@example.com"
                                                        type="email"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="******"
                                                        disabled={isPending}
                                                        type="password"
                                                    />
                                                </FormControl>
                                                <Button
                                                    size={"sm"}
                                                    variant={"link"}
                                                    asChild
                                                    className="px-0 font-medium"
                                                >
                                                    <Link href={"/auth/reset"}>
                                                        Forgot Password?
                                                    </Link>
                                                </Button>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                        </div>
                        {!showTwoFactor ? (
                            (error || urlError) && !success ? (
                                <FormError message={error || urlError} />
                            ) : (
                                ""
                            )
                        ) : (
                            <FormError message={error || urlError} />
                        )}
                        <FormSuccess message={success} />
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            {showTwoFactor ? "Confirm" : "Login"}
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
};
