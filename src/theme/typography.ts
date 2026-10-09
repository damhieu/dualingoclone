// Design tokens: typography (Poppins).
// Keep in sync with the `--font-*` / `--text-*` variables in `src/global.css`.

import type { TextStyle } from "react-native";

// Each weight is its own font file, so we pick a weight by fontFamily (not fontWeight).
export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

// Passed to `useFonts` in `src/app/_layout.tsx`.
export const fonts = {
  [fontFamily.regular]: require("@/assets/fonts/Poppins-Regular.ttf"),
  [fontFamily.medium]: require("@/assets/fonts/Poppins-Medium.ttf"),
  [fontFamily.semiBold]: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  [fontFamily.bold]: require("@/assets/fonts/Poppins-Bold.ttf"),
};

// React Native needs lineHeight in px, so it is fontSize * the design's ratio.
export const typography = {
  h1: { fontFamily: fontFamily.bold, fontSize: 32, lineHeight: 32 * 1.2 },
  h2: { fontFamily: fontFamily.semiBold, fontSize: 24, lineHeight: 24 * 1.3 },
  h3: { fontFamily: fontFamily.semiBold, fontSize: 20, lineHeight: 20 * 1.3 },
  h4: { fontFamily: fontFamily.medium, fontSize: 16, lineHeight: 16 * 1.4 },
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 16 * 1.6,
  },
  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 14 * 1.6,
  },
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 13 * 1.6,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 11 * 1.4,
  },
} as const satisfies Record<string, TextStyle>;

export type TypographyVariant = keyof typeof typography;
