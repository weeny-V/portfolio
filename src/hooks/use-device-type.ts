"use client";

import { useSyncExternalStore } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";

const MOBILE_QUERY = "(max-width: 639px)";
const TABLET_QUERY = "(min-width: 640px) and (max-width: 1023px)";

function getDeviceType(): DeviceType {
  if (window.matchMedia(MOBILE_QUERY).matches) return "mobile";
  if (window.matchMedia(TABLET_QUERY).matches) return "tablet";
  return "desktop";
}

function subscribe(onChange: () => void) {
  const mobileQuery = window.matchMedia(MOBILE_QUERY);
  const tabletQuery = window.matchMedia(TABLET_QUERY);

  mobileQuery.addEventListener("change", onChange);
  tabletQuery.addEventListener("change", onChange);

  return () => {
    mobileQuery.removeEventListener("change", onChange);
    tabletQuery.removeEventListener("change", onChange);
  };
}

function getServerDeviceType(): DeviceType {
  return "desktop";
}

export function useDeviceType() {
  const deviceType = useSyncExternalStore(
    subscribe,
    getDeviceType,
    getServerDeviceType
  );

  return {
    deviceType,
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
  } as const;
}

