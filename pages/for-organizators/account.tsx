import React, { useEffect } from "react";
import { useAuth } from "@/store/index";
import { Routes } from "@/constants/routes";
import { useRouter } from "next/router";

const OrganizatorAccount = () => {
  const router = useRouter();

  const { isLoggedIn } = useAuth();

  useEffect((): any => {
    if (isLoggedIn) return;

    return router.push(Routes.Login);
  }, [isLoggedIn]);

  return <div>account</div>;
};

export default OrganizatorAccount;
