"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("43ef374a-f299-4723-b0a0-1e780691dcca");
  }, []);

  return null;
};
