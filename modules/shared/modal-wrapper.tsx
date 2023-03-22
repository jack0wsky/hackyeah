"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const ModalWrapper = ({ children }: PropsWithChildren<any>) => {
  const [mounted, setMounted] = useState(false);

  const wrapper = document.querySelector("#modal");

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted || !wrapper) return null;

  return createPortal(children, wrapper);
};
