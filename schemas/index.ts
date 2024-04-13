import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is not valid",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
    code: z.optional(z.string()),
});

export const SettingsSchema = z
    .object({
        name: z.optional(z.string()),
        isTwoFactorEnabled: z.optional(z.boolean()),
        role: z.enum([UserRole.ADMIN, UserRole.USER]),
        email: z.optional(z.string().email()),
        password: z.optional(z.string().min(6)),
        newpassword: z.optional(z.string().min(6)),
    })
    .refine(
        (data) => {
            if (data.password && !data.newpassword) {
                return false;
            }
            if (!data.newpassword && data.password) {
                return false;
            }
            return true;
        },
        {
            message: "Both Password and new Password are required!",
            path: ["password", "newpassword"],
        }
    );

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is not valid",
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is not valid",
    }),
    password: z.string().min(6, {
        message: "Minimum six character required",
    }),
    name: z.string().min(1, {
        message: "Name is required",
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum six character required",
    }),
});
