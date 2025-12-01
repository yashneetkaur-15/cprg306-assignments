// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        {/* The Link component is used for client-side navigation */}
        <Link href="/week-2">
          Go to Week 2 Assignment
        </Link>
      </p>
    </main>
  );
}