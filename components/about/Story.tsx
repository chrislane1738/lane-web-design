"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Story() {
  const ref = useScrollAnimation({ staggerDelay: 150 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Photo */}
      <div className="reveal-left">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
          <Image
            src="/chris-lane.png"
            alt="Chris Lane, founder of Lane Web Design"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Story text */}
      <div className="reveal-right">
        <h2
          className="text-3xl md:text-4xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Story Behind Lane
        </h2>
        <div className="w-12 h-1 bg-terracotta rounded-full mb-6" />
        <div className="space-y-4 text-charcoal-light leading-relaxed">
          <p>
            Lane Web Design started with a simple idea: every small business
            needs a website that works for them, not against them. From my time
            at non-profits and designing websites, I realized that my time
            should be spent on outreach and internal system building rather than
            designing an experience for users. However, what customers
            experience first is the website, so it needs to leave a good
            impression. That&apos;s where Lane Web Design steps in.
          </p>
          <p>
            We&apos;ll take your ideas, plans, and features and build a modern
            website with everything needed to thrive on the internet. No manual
            work, 99.9% uptime, and live service as needed for any updates.
            I&apos;m a firm believer in efficiency, and Lane Web Design is by
            far the most affordable and efficient web partner your business can
            work with.
          </p>
          <p>
            Ready to see what we can do for you?{" "}
            <a href="/contact" className="text-terracotta hover:text-terracotta-dark underline underline-offset-2">
              Get in touch today
            </a>{" "}
            for a free mockup of your ideas. We&apos;ll show you how we can
            elevate your business to the next level of online visibility.
          </p>
        </div>
      </div>
    </div>
  );
}
