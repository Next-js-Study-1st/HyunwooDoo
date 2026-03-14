import type { Theme } from "@radix-ui/themes";

/* Radix Themes 기본 설정. */
export const themeConfig: React.ComponentProps<typeof Theme> = {
  appearance: "inherit",
  accentColor: "indigo",
  grayColor: "slate",
  radius: "medium",
  scaling: "100%",
};
