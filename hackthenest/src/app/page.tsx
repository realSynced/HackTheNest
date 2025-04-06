import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center items-center text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-5xl mb-4">Safe Harbor</h1>
          <p className="text-xl mb-8">Your light in the dark.</p>
          <Link
            href="/login"
            className="bg-black text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
