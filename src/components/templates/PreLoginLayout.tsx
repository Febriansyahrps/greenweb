"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PreLoginLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const getToken = Cookies.get("greenweb_token");

  useEffect(() => {
    if (getToken === undefined) {
      setIsLogin(false);
    } else {
      router.push("/home");
      setIsLogin(true);
    }
  }, [getToken, router]);

  return children;
};

export default PreLoginLayout;
