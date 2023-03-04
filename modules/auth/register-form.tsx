import React from "react";
import Link from "next/link";
import { Button, Input } from "@/modules/shared";
import { useRegisterForm } from "@/modules/auth";

export const RegisterForm = () => {
  const { values, errors, updateField, submitForm } = useRegisterForm();

  return (
    <main className="screen-size h-screen flex items-center">
      <div className="flex flex-col justify-center h-full w-full md:w-1/2">
        <h1>Create account</h1>
        <form className="flex flex-col gap-y-12 w-full" onSubmit={updateField}>
          <Input
            label="Company name"
            onChange={updateField}
            value={values.companyName}
            placeholder="Some name"
            type="text"
            name="companyName"
            error={errors.companyName}
          />
          <Input
            label="E-mail address"
            onChange={updateField}
            value={values.email}
            placeholder="john.doe@gmail.com"
            type="email"
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
            Register
          </Button>
        </form>

        <Link href="/for-organizators/login">Login</Link>
      </div>

      <div className="p-24 hidden md:flex flex-col h-[482px] bg-[#EAF0FF]">
        <h3>Create an account and  add a second life to your event waste!</h3>
        <div>
          <p>Why to join?</p>
          <ul>
            <li>reason</li>
            <li>reason</li>
            <li>reason</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
