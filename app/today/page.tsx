import Link from 'next/link';

export default function TodayPage() {
  return (
    <main>
      <h1>Today's Wall</h1>
      <p>Intro copy goes here.</p>
      <Link href="/play">Start Round</Link>
    </main>
  );
}
