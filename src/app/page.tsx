import { Sparkles } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  "use cache";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <section className="relative flex w-full max-w-xl flex-col items-center text-center">
        <div
          aria-label="Minimalbyte"
          className="mb-10 flex items-center gap-3"
          role="img"
        >
          <Image
            alt=""
            className="size-12"
            height={64}
            priority
            src="/minimalbyte.svg"
            width={64}
          />
          <span className="text-2xl font-semibold tracking-[-0.06em] text-foreground">
            minimalbyte
          </span>
        </div>

        <Badge
          className="gap-1.5 rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-primary"
          variant="outline"
        >
          <Sparkles aria-hidden="true" />
          Studio in the making
        </Badge>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Custom web & AI,
          <span className="text-primary"> coming soon.</span>
        </h1>

        <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
          We&apos;re getting ready to build websites, web apps, and AI-powered
          products tailored to your ideas.
        </p>

        <p className="mt-16 text-xs text-muted-foreground">
          © Minimalbyte {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
