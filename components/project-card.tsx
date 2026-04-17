import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectTheme {
  background: string;
  foreground: string;
  accent: string;
  muted: string;
}

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  type: string;
  status: string;
  image: string;
  thumbnail?: string;
  theme?: ProjectTheme;
  className?: string;
}

export function ProjectCard({
  slug,
  title,
  category,
  type,
  status,
  image,
  thumbnail,
  theme,
  className,
}: ProjectCardProps) {
  const titleColor = theme?.accent ?? "#ffffff";
  const metaColor = theme?.foreground ?? "rgba(255,255,255,0.85)";
  const dotColor = theme?.muted ?? "rgba(255,255,255,0.6)";

  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer block transition-transform duration-300 hover:scale-[1.02]",
        className,
      )}
    >
      <div className="aspect-square relative overflow-hidden rounded-2xl">
        <Image
          src={thumbnail || image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Strong gradient at the bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Title and tags overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3
            className="font-sans font-extrabold text-3xl md:text-4xl leading-[1.05] tracking-tight text-balance mb-3"
            style={{
              color: titleColor,
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            }}
          >
            {title}
          </h3>
          <p
            className="text-[10px] font-medium uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              color: titleColor,
              textShadow: "0 1px 6px rgba(0,0,0,0.7)",
            }}
          >
            <span>{category}</span>
            <span className="mx-1.5">•</span>
            <span>{type}</span>
            {status && (
              <>
                <span className="mx-1.5">•</span>
                <span>{status}</span>
              </>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}
