"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// ============================================================
// HOME PAGE — LANDING / SHOWCASE
// ============================================================
// This is your landing page. Right now it shows a big "PORTFOLIO"
// title. When you have something to showcase (a trailer, a demo,
// a featured project), uncomment the sections below and fill in
// your content.
//
// HOW TO ADD CONTENT:
//
// 1. YOUTUBE VIDEO — uncomment the YouTubeEmbed below and replace
//    the ID with your video ID (the part after v= in the URL)
//
// 2. IMAGE or GIF — uncomment the HeroImage below and set the
//    src to your image path in /public (e.g. "/projects/my-image.jpg")
//
// 3. LINK BUTTON — uncomment the LinkButton below and set the
//    href and label
//
// You can combine all three — video + image + links. Just
// uncomment what you need.
// ============================================================

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-20">
        {/* Big title */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight text-center mb-12">
          ABDESSLAM LMOUIDINI PORTFOLIO
        </h1>

        {/* -------------------------------------------------- */}
        {/* YOUTUBE VIDEO — uncomment when ready                */}
        {/* Replace VIDEO_ID_HERE with your YouTube video ID    */}
        {/* -------------------------------------------------- */}
        {/*
        <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg mb-10">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="Featured video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        */}

        {/* -------------------------------------------------- */}
        {/* HERO IMAGE or GIF — uncomment when ready            */}
        {/* Replace /projects/your-image.jpg with your file     */}
        {/* -------------------------------------------------- */}
        {/*
        <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src="/projects/your-image.jpg"
            alt="Featured project"
            className="w-full h-auto"
          />
        </div>
        */}

        {/* -------------------------------------------------- */}
        {/* LINK BUTTONS — uncomment when ready                 */}
        {/* Add as many as you need                             */}
        {/* -------------------------------------------------- */}
        {/*
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://your-link-here.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg text-base font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200 hover:scale-105"
          >
            Watch Trailer
          </a>
          <a
            href="https://your-other-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg text-base font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200 hover:scale-105"
          >
            Play Demo
          </a>
        </div>
        */}
      </main>

      <Footer />
    </div>
  );
}
