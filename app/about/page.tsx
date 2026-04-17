import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Linkedin, Github, Youtube } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function ItchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
      <path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.96-63.73C96.65 300.46 109.54 223 161.87 223z" />
    </svg>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:opacity-70 hover:scale-125 transition-all duration-200"
    >
      {children}
    </a>
  );
}

function CvButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center text-foreground text-sm font-bold hover:bg-foreground hover:text-background hover:scale-110 transition-all duration-200"
    >
      {label}
    </a>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-8 md:px-16 py-8 pb-24">
        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-16">
          About
        </h1>

        {/* ===== INTRO SECTION: two columns ===== */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 mb-20">
          {/* Left: bio */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Hi, I&apos;m Abdesslam Lmouidini.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Project Manager · Filmmaking · Game Design · 2D
            </p>
            <p className="text-base text-foreground leading-relaxed mb-6">
              I am a passionate and multidisciplinary creative with a unique
              blend of artistic, technical, and organizational skills. My
              experience spans game design, filmmaking, 2D animation, and
              project management — allowing me to lead and contribute to
              projects from initial concept to final delivery, whether they are
              video games, documentaries, or interactive experiences.
            </p>
            <p className="text-base text-foreground leading-relaxed mb-6">
              My passion is crafting immersive, meaningful experiences across
              media. Whether I&apos;m designing puzzle mechanics for a game,
              directing a documentary, or coordinating a team of artists and
              developers, my approach centers on intuitive storytelling,
              creative problem-solving, and bringing out the best in every
              collaborator.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              I thrive in collaborative, cross-disciplinary environments and am
              eager to bring my versatile skill set to dynamic teams working at
              the intersection of games, film, and interactive media.
            </p>
          </div>

          {/* Right: find me + email + CV */}
          <div>
            <h3 className="text-lg text-muted-foreground mb-6">
              You can find me here:
            </h3>
            <div className="flex items-center gap-10 mb-16">
              <SocialIcon href="https://linkedin.com/in/lmouidini/">
                <Linkedin className="w-8 h-8" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/resveram/">
                <InstagramIcon className="w-8 h-8" />
              </SocialIcon>
              <SocialIcon href="https://resveram.itch.io/">
                <ItchIcon className="w-8 h-8" />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@Resveram">
                <Youtube className="w-8 h-8" />
              </SocialIcon>
            </div>

            <h3 className="text-lg text-muted-foreground mb-4">
              Send me an email at:
            </h3>
            <a
              href="mailto:Lmouidini@outlook.com"
              className="text-foreground text-lg hover:opacity-70 transition-all duration-200"
              style={{ fontFamily: "monospace" }}
            >
              Lmouidini@outlook.com
            </a>

            <h3 className="text-lg text-muted-foreground mt-12 mb-6">
              Download my CV:
            </h3>
            <div className="flex items-center gap-8">
              <CvButton href="/docs/cv-en.pdf" label="ENG" />
              <CvButton href="/docs/cv-fr.pdf" label="FR" />
            </div>
          </div>
        </div>

        {/* ===== WORK HIGHLIGHTS: three columns ===== */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-accent mb-12">
            Work Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Column 1: Experience + Education */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-8">
                Experience
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-serif text-xl text-accent">
                    Game Designer / Level Designer / Project Lead
                  </h4>
                  <p className="text-muted-foreground">VAL 153</p>
                  <p className="text-sm text-muted-foreground">
                    2025 — Present
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent">
                    Game Designer / Level Designer
                  </h4>
                  <p className="text-muted-foreground">La Bergère des Nuages</p>
                  <p className="text-sm text-muted-foreground">
                    2024 · 6 months
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent">
                    Director / Producer
                  </h4>
                  <p className="text-muted-foreground">
                    Poupées : Liens &amp; Patrimoines (Documentary)
                  </p>
                  <p className="text-sm text-muted-foreground">2024</p>
                </div>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mt-16 mb-8">
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-xl text-accent">
                    Master MAJIC
                  </h4>
                  <p className="text-muted-foreground">
                    UNICA — Cannes, France
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent">
                    Master Audiovisuel
                  </h4>
                  <p className="text-muted-foreground">EPAG — Rabat, Maroc</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent">
                    Bachelor Game Design &amp; 2D Animation
                  </h4>
                  <p className="text-muted-foreground">
                    3IS — Élancourt, France
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Skills */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-8">
                Skills
              </h3>

              <div className="space-y-10">
                <div>
                  <h4 className="font-serif text-xl text-accent mb-3">
                    Game Design
                  </h4>
                  <ul className="space-y-1.5 text-foreground text-sm">
                    <li>• Game Design Document (GDD)</li>
                    <li>• Gameplay Design</li>
                    <li>• Rational Game Design</li>
                    <li>• Level Design</li>
                    <li>• World-Building</li>
                    <li>• Balancing</li>
                    <li>• Testing &amp; Iteration</li>
                    <li>• User Experience</li>
                    <li>• Interactive Storytelling</li>
                    <li>• Behavioral Analysis</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-accent mb-3">
                    Production
                  </h4>
                  <ul className="space-y-1.5 text-foreground text-sm">
                    <li>• Production Pipeline</li>
                    <li>• Agile / Scrum</li>
                    <li>• Interdisciplinary Collaboration</li>
                    <li>• Project Management</li>
                    <li>• Communication</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-accent mb-3">
                    Audiovisual
                  </h4>
                  <ul className="space-y-1.5 text-foreground text-sm">
                    <li>• Film Directing</li>
                    <li>• Documentary Production</li>
                    <li>• Video Editing (Premiere Pro, DaVinci Resolve)</li>
                    <li>• Motion Graphics (After Effects)</li>
                    <li>• Sound Design (Audacity)</li>
                    <li>• Cinematography</li>
                    <li>• Screenwriting</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-accent mb-3">Tools</h4>
                  <ul className="space-y-1.5 text-foreground text-sm">
                    <li>• Unity &amp; Unreal Engine</li>
                    <li>• Photoshop, Procreate, After Effects</li>
                    <li>• Blender, Cinema 4D, Maya</li>
                    <li>• Premiere Pro, DaVinci Resolve</li>
                    <li>• GameMaker Studio, Construct, Bitsy</li>
                    <li>• Trello, Jira, Notion, Figma</li>
                    <li>• C# (Basic), Blueprint (Intermediate)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: Strengths + Languages + Interests */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-8">
                Strengths
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-serif text-xl text-accent mb-2">
                    Creative Vision
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    Combining artistic intuition with technical knowledge to
                    create compelling interactive experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent mb-2">
                    Leadership
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    Managing teams from concept to delivery, fostering
                    collaboration and clear communication across disciplines.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent mb-2">
                    Problem Solving
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    Finding creative, elegant solutions to complex design and
                    technical challenges.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent mb-2">
                    Storytelling
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    Crafting narratives that flow naturally through gameplay,
                    blending story and mechanics seamlessly.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-accent mb-2">
                    Audiovisual Eye
                  </h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    Bringing a filmmaker&apos;s sensibility to game design —
                    composition, pacing, and emotional impact informed by
                    documentary and film production.
                  </p>
                </div>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mt-16 mb-8">
                Languages
              </h3>
              <div className="space-y-2 text-foreground">
                <p>
                  <span className="font-medium">Français</span> — Native
                </p>
                <p>
                  <span className="font-medium">English</span> — Bilingual
                </p>
                <p>
                  <span className="font-medium">العربية</span> — Fluent
                </p>
                <p>
                  <span className="font-medium">Español</span> — Basics
                </p>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mt-16 mb-8">
                Interests
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                Visual arts, reading, cinema, music, board games, TV series,
                theatre, travel, video editing, sports.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
