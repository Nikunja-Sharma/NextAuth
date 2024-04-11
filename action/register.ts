"use server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(value);
    if (!validatedFields.success) {
        return { error: "Invald Fields!" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedpassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email is already taken!" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedpassword,
        },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    );
    // console.log(verificationToken.email+ verificationToken.token)
    return { success: "Confirmation Email has been Sent!" };
};
