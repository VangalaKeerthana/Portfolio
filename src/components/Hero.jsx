import React from "react";
import { Mail, Download, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Header copy */}
          <div className="space-y-4">
            <p className="text-body opacity-70">Hi, I&apos;m Keerthana Vangala 👋</p>

            {/* Smaller, responsive, tight-leading title */}
            <h1
              className="font-extrabold leading-[0.95] tracking-tight
                         text-[42px] sm:text-[64px] md:text-[84px] lg:text-[96px]"
            >
              SOFTWARE ENGINEER
            </h1>

            {/* Subheading scaled down a bit */}
            <p className="font-semibold text-[18px] sm:text-[22px] md:text-[28px]">
              Cloud, Data &amp; AI
            </p>

            {/* Body copy kept readable and centered */}
            <p className="text-regular opacity-80 max-w-3xl mx-auto mt-6 text-[14px] sm:text-[16px]">
              2+ years building cloud-native systems and data pipelines on AWS.{" "}
              <span className="text-accent-primary">Cut infrastructure costs by 25%</span> and{" "}
              <span className="text-accent-primary">manual effort by 85%</span> through intelligent automation.
              Optimized enterprise workflows, saving{" "}
              <span className="text-accent-primary">~$16K/month</span>. Architect of full-stack platforms using
              React, Supabase, and AWS.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a
              href="mailto:vangala.keerthana20@gmail.com"
              className="btn-accent"
              aria-label="Send email to Keerthana"
            >
              <Mail size={18} className="mr-2" />
              Email
            </a>

            <a
  href="/Resume_Keerthana_V.pdf?v=20251029"   // cache-bust query optional
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
  aria-label="Open Keerthana's resume"
>
  <Download size={18} className="mr-2" />
  Resume
</a>

            <a
              href="https://www.linkedin.com/in/keerthana-vangala-cs/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Open Keerthana's LinkedIn"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </div>

          <div className="pt-6">
            <p className="label-small opacity-60">Open to SDE/AI/Data Roles (US)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
