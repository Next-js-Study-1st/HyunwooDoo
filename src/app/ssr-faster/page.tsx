import Link from "next/link";

/* 서버에서 한 번 생성하는 정적 데이터 */
function getStaticData(): { id: number; label: string; value: string }[] {
  const items = [];
  for (let i = 1; i <= 80; i++) {
    items.push({
      id: i,
      label: `항목 ${i}`,
      value: `정적 데이터 값 ${i} — 첫 HTML에 포함되어 즉시 표시됩니다.`,
    });
  }
  return items;
}

export default function SsrFasterPage() {
  const data = getStaticData();

  return (
    <div className="page">
      <nav className="nav">
        <Link href="/">홈</Link>
      </nav>
      <h1>정적 데이터 SSR faster</h1>
      <p className="meta">
        데이터 중심의 정적 콘텐츠. 서버에서 렌더링된 HTML이 그대로 전달되어 첫
        페인트에 모든 데이터가 포함됩니다. <br />
        클라이언트 추가 요청 없음.
      </p>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.label}</strong> — {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
