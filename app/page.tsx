import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Cover Up</h1>
      <p>Welcome to Cover Up.</p>
      <Link href="/today">Start Today</Link>
    </main>
  );
}
