"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    
    router.push("/auth/login")
    
    console.log("Login button clicked")
  }
  if (mode === "modal") {
    return (
      <div>todo implemet modal</div>
    )
  }
  return (
    <span onClick={onClick} className="cursor-pointer ">
      {children}
    </span>
  );
};
