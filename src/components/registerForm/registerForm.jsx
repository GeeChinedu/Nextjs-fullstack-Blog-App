"use client";
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input placeholder="username" type="text" name="username" />
      <input placeholder="email" type="text" name="email" />
      <input placeholder="password" type="password" name="password" />
      <input
        placeholder="password again"
        type="password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href={"/login"}>
        Have an Account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
