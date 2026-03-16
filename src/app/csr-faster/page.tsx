"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* 클라이언트에서만 실행되는 무거운 연산 시뮬레이션 */
function heavyComputation(): string {
  const start = performance.now();
  let n = 0;
  while (performance.now() - start < 1200) {
    n += 1;
  }
  return `연산 완료 (${n}회 루프, 약 1.2초 소요)`;
}

export default function CsrFasterPage() {
  const [status, setStatus] = useState<"loading" | "done">("loading");
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const value = heavyComputation();
    queueMicrotask(() => {
      setResult(value);
      setStatus("done");
    });
  }, []);

  return (
    <div className="page">
      <nav className="nav">
        <Link href="/">홈</Link>
      </nav>
      <h1>무거운 연산 (CSR이 유리)</h1>
      <p className="meta">
        서버에서 이 연산을 하면 TTFB가 1~2초 지연됩니다. <br />
        CSR은 쉘을 먼저 보여준 뒤 클라이언트에서 연산하므로 체감 응답이
        빠릅니다.
      </p>
      <div className="block">
        {status === "loading" && <p className="loading">연산 중…</p>}
        {status === "done" && result && <p>{result}</p>}
      </div>
    </div>
  );
}
