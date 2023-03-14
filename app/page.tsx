import Link from 'next/link';

export default function Page() {
  return (
    <>
      <header>
        live classroom
        <p>
          <Link href='./auth/login'>log in</Link>
        </p>
        <p>
          <Link href='./auth/signup'>sign up</Link>
        </p>

      </header>
      <main>
      </main>
    </>
  );
}
