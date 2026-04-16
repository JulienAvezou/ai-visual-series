import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start gap-6 py-20">
      <p className="text-xs uppercase tracking-[0.24em] text-ink-300">Not Found</p>
      <h1 className="font-display text-4xl text-ink-50 md:text-5xl">This visual essay does not exist yet.</h1>
      <p className="max-w-xl text-ink-200/85">
        The series is growing. Check the homepage for published and upcoming posts.
      </p>
      <Link href="/" className="rounded-full border border-accent-300/40 bg-accent-400/10 px-5 py-2 text-sm text-accent-100">
        Back to series homepage
      </Link>
    </div>
  );
}
