import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <h1>SSR vs CSR 체감 비교</h1>
      <p className="meta">
        SSR이 항상 빠르지 않다는 것을 느끼기 위한 두 가지 페이지
      </p>
      <ul className="list">
        <li>
          <Link href="/ssr-faster">정적 데이터 페이지</Link> — 데이터 중심 정적
          콘텐츠. SSR이 유리 (첫 HTML에 데이터 포함, 빠른 첫 페인트)
        </li>
        <li>
          <Link href="/csr-faster">무거운 연산 페이지</Link> — 서버 연산이
          무거운 동적 콘텐츠. CSR이 유리 (쉘을 먼저 보여주고 클라이언트에서
          연산)
        </li>
      </ul>
    </div>
  );
}
