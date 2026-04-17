import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, getOtherProjects } from "@/lib/projects";

function ItchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
      <path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.96-63.73C96.65 300.46 109.54 223 161.87 223z" />
    </svg>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Abdesslam Lmouidini`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = getOtherProjects(slug);
  const { theme } = project;

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      {/* Header when no hero */}
      {project.hideHero && <Header theme={theme} />}

      {/* ===== HERO: full-width image with header overlay ===== */}
      {!project.hideHero && (
        <div className="relative w-full min-h-[75vh] md:min-h-[85vh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 z-10">
            <Header
              theme={{
                background: "transparent",
                foreground: theme.accent,
                accent: theme.accent,
                muted: theme.muted,
              }}
            />
          </div>
        </div>
      )}
      {/* ===== TITLE + INFO: below the hero image ===== */}
      <div
        className="w-full px-8 md:px-16"
        style={{ backgroundColor: theme.background }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Title — pulled up to overlap the hero */}
          <h1
            className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight -mt-10 md:-mt-8 mb-8 relative z-10"
            style={{
              color: theme.accent,
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* ===== INFO: three columns ===== */}
      <div
        className="w-full px-8 md:px-16 py-6"
        style={{ backgroundColor: theme.background }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr_auto] gap-8 md:gap-12 items-start">
          {/* Left: category + status */}
          <div>
            <p
              className="text-base md:text-lg font-medium leading-relaxed"
              style={{ color: theme.foreground }}
            >
              {project.category} / {project.type}
            </p>
            {project.status && (
              <p
                className="text-sm mt-1"
                style={{ color: theme.foreground, opacity: 0.6 }}
              >
                {project.status}
              </p>
            )}
          </div>

          {/* Center: description */}
          <div>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: theme.foreground, opacity: 0.9 }}
            >
              {project.description}
            </p>
          </div>

          {/* Right: action buttons with icons */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-col gap-3">
              {project.links.map((link) => {
                const isItch = link.url.includes("itch.io");
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:scale-105 border"
                    style={{
                      borderColor: theme.foreground,
                      color: theme.foreground,
                      backgroundColor: "transparent",
                    }}
                  >
                    {isItch && <ItchIcon className="w-5 h-5" />}
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ===== VIDEO + GALLERY ===== */}
      <div
        className="w-full px-8 md:px-16 py-8"
        style={{ backgroundColor: theme.background }}
      >
        <div className="max-w-6xl mx-auto">
          {/* YouTube embed */}
          {project.youtubeId && (
            <div
              className="aspect-video w-full mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"
              style={{ backgroundColor: theme.muted }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-8 mb-12 max-w-4xl mx-auto">
              {project.gallery.map((item, i) => (
                <div key={i}>
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={typeof item === "string" ? item : item.src}
                      alt={
                        typeof item === "string"
                          ? `${project.title} screenshot ${i + 1}`
                          : item.caption
                      }
                      className="w-full h-auto"
                    />
                  </div>
                  {typeof item !== "string" && item.caption && (
                    <p
                      className="text-sm mt-3 text-center"
                      style={{ color: theme.muted }}
                    >
                      {item.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ===== MORE PROJECTS ===== */}
      <div
        className="w-full px-8 md:px-16 py-16"
        style={{ backgroundColor: theme.background }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-serif text-3xl mb-8 pb-4 border-b"
            style={{
              color: theme.foreground,
              borderColor: `${theme.muted}33`,
            }}
          >
            More Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((otherProject) => (
              <Link
                key={otherProject.slug}
                href={`/work/${otherProject.slug}`}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src={otherProject.thumbnail || otherProject.image}
                    alt={otherProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                      className="font-sans font-extrabold text-2xl leading-tight text-balance mb-2"
                      style={{
                        color: otherProject.theme.accent,
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      {otherProject.title}
                    </h3>
                    <p
                      className="text-[10px] font-medium uppercase tracking-wider"
                      style={{
                        color: otherProject.theme.accent,
                        textShadow: "0 1px 6px rgba(0,0,0,0.7)",
                      }}
                    >
                      <span>{otherProject.category}</span>
                      <span className="mx-1.5">&bull;</span>
                      <span>{otherProject.type}</span>
                      {otherProject.status && (
                        <>
                          <span className="mx-1.5">&bull;</span>
                          <span>{otherProject.status}</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer theme={theme} />
    </div>
  );
}
