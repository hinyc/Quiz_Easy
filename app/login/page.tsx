"use client";
import React, { use, useEffect, useState } from "react";
import { LoginPageStyle } from "./page.style";
import GoogleLoginButton from "./_component/GoogleLoginButton";
import Splash from "./_component/Splash";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ROUTE } from "../common/link";
import axios from "axios";

export default function LoginPage() {
  const storedSession =
    typeof window !== "undefined" ? localStorage.getItem("session") : null;

  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.push(ROUTE.beeHive);
    }
  }, [router, status]);
  return (
    <LoginPageStyle>
      <Splash localSession={storedSession} />
      <button
        onClick={() => {
          axios
            .get("/api/quiz")
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        test
      </button>
      <GoogleLoginButton />
    </LoginPageStyle>
  );
}
