import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

// Vanilla Extract 플러그인
const withVanillaExtract = createVanillaExtractPlugin();

// Next.js 기본 설정
const nextConfig: NextConfig = {
  /* 여기에 기존 설정 옵션들을 넣으세요 */
  turbopack: {},
};

// Vanilla Extract 플러그인으로 설정을 감싸서 내보내기
export default withVanillaExtract(nextConfig);
