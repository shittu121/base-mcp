import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HowItWork() {
  return (
    <section className="relative w-full bg-[#030303] py-20 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Section Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
          How It Works
        </h2>

        <div className="mt-10 flex justify-center">
          <AspectRatio ratio={16 / 9} className="relative w-full max-w-3xl shadow-lg rounded-xl overflow-hidden">
            <img
              src="/openRouter.gif"
              alt="How it works"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
}
