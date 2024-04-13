import email from "next-auth/providers/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "verify@nikunja.online",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetlink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "resetpassword@nikunja.online",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${resetlink}">here</a> to reset your passoword.</p>`,
    });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
    // const confirmtokenlink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "verifyotp@nikunja.online",
        to: email,
        subject: "2FA CODE🔐😊",
        html: `<p>Here's your Two factor authentication code 👇</p><br><h1>${token}</h1>`,
    });
};
