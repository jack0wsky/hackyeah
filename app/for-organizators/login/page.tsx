"use client";

import React from "react";
import { Input, Button } from "@/modules/shared";
import { useLoginForm } from "@/modules/auth";
import { useAuth } from "@/store/index";
import { Routes } from "@/constants/routes";
import { useRouter } from "next/navigation";

const Login = () => {
  const { values, errors, updateField, submitForm, isLoggingIn } =
    useLoginForm();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (isLoggedIn) return router.push(Routes.MyAccount);

  return (
    <main className="screen-size h-screen flex items-center">
      <div className="flex flex-col justify-center h-full w-1/2">
        <h1>Login</h1>

        <form onSubmit={submitForm} className="mt-32">
          <fieldset className="flex flex-col gap-y-12 w-3/4 mb-24">
            <Input
              label="E-mail"
              onChange={updateField}
              value={values.email}
              type="text"
              placeholder="john.doe@gmail.com"
              name="email"
              error={errors.email}
            />

            <Input
              label="Password"
              onChange={updateField}
              value={values.password}
              type="password"
              placeholder=""
              name="password"
              error={errors.password}
            />
          </fieldset>

          <Button variant="primary" type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Logging..." : "Login"}
          </Button>
        </form>
      </div>

      <div className="p-24 flex flex-col h-[482px] bg-[#EAF0FF]">
        <h3>Hello again!</h3>
      </div>
    </main>
  );
};

export default Login;
