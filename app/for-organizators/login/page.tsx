"use client";

import React from "react";
import { Input, Button } from "@/modules/shared";
import { useLoginForm } from "@/modules/auth";

const Login = () => {
  const { values, errors, updateField, submitForm } = useLoginForm();

  return (
    <main className="screen-size h-screen flex items-center">
      <div className="flex flex-col justify-center h-full w-1/2">
        <h1>Login</h1>
        <form onSubmit={submitForm}>
          <Input
            label="E-mail"
            onChange={updateField}
            value={values.email}
            type="email"
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

          <Button variant="primary" type="submit">
            Login
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
