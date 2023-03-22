"use client";

import React from "react";
import { useAuth } from "@/store/index";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants/routes";

const OrganizatorAccount = () => {
  const router = useRouter();

  const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) return router.push(Routes.Login);

  return <div>account</div>;
};

export default OrganizatorAccount;
