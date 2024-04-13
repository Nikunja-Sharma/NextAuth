import { db } from "@/lib/db";

export const getAccountDetailsByUser = async (userId: string) => {
    try {
        const account = await db.account.findFirst({
            where: {
                userId,
            },
        });
        return account;
    } catch {
        return null;
    }
};