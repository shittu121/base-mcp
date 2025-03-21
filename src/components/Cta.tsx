import Link from "next/link";

export function CTA() {
    return (
      <section className="relative w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-rose-500 py-20 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Start Building the Future Today</h2>
        <p className="text-white/80 mt-4">Join Base MCP and take your AI-blockchain integration to the next level.</p>
        <Link href="https://github.com/base/base-mcp" target="_blank" rel="noopener noreferrer">
           <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:scale-105 transition">
             Get Started
           </button>
        </Link>
      </section>
    );
  }
  