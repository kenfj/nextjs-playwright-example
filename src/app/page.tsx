import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-3xl font-bold">Home</h1>

        <div>
          <Link href={"hello"}>Hello</Link>
        </div>
      </div>
    </main>
  )
}
