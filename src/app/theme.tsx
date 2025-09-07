"use client";

import { type ReactNode, useEffect } from "react";

/**
 * A React component that applies a "dark" theme to the document body based on the current time.
 *
 * If the current hour is between 6 PM and 6 AM, the "dark" class is added to the body,
 * otherwise it is removed. This enables automatic switching between light and dark themes
 * depending on the time of day.
 *
 * @param children - The React node(s) to be rendered within the component.
 * @returns The rendered children with the appropriate theme applied to the document body.
 */
export const AutoThemeSwitcher = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return <>{children}</>;
};
