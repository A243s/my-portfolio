export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  status: string;
  image: string;
  thumbnail?: string;
  description: string;
  featured?: boolean;
  youtubeId?: string;
  gallery?: { src: string; caption: string }[];
  hideHero?: boolean;
  links?: ProjectLink[];
  theme: {
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
}

export const projects: Project[] = [
  {
    slug: "val153",
    title: "VAL 153",
    category: "Games",
    type: "Puzzle / Espionage",
    status: "Playable Demo · 2026",
    image: "/projects/val153-8.jpg",
    thumbnail: "/projects/val153-4.jpg",
    featured: true,
    gallery: [
      { src: "/projects/val153-1.jpg", caption: "GGD excerpt (screenshot)" },
      { src: "/projects/val153-2.jpg", caption: "(screenshot in game)" },
      { src: "/projects/val153-3.jpg", caption: "(screenshot in game)" },
      { src: "/projects/val153-6.jpg", caption: "(screenshot in game)" },
      { src: "/projects/val153-7.jpg", caption: "(screenshot in game)" },
    ],
    youtubeId: "", // TODO : colle ici l'ID YouTube (ex: "dQw4w9WgXcQ")
    links: [
      { label: "Play on itch.io", url: "https://ouichsana.itch.io/val153" }, // TODO : remplace par ton vrai lien
    ],
    description:
      "A short, absurd, retro-styled puzzle game inspired by 1960s spy worlds. The player embodies an elite suitcase equipped with a built-in camera, controlling characters who carry, drop, or pass the case to deliver it to the target — and blow everything up at the right moment. Developed for the Festival International des Jeux (FIJ).",
    theme: {
      background: "#1a1a1f",
      foreground: "#e8e8e8",
      accent: "#ffffff",
      muted: "#6b6b70",
    },
  },
  {
    slug: "cloud-shepherdess",
    title: "La Bergère de Nuages",
    category: "Games",
    type: "2D Point-and-Click",
    status: "Released · 2025",
    image: "/projects/cloud-shepherdess.jpg",
    featured: true,
    gallery: [
      {
        src: "/projects/cloud-shepherdess-3.jpg",
        caption: "GGD excerpt (screenshot)",
      },
      { src: "/projects/cloud-shepherdess-2.gif", caption: "Gameplay footage" },
      { src: "/projects/cloud-shepherdess-4.gif", caption: "Gameplay footage" },
    ],
    youtubeId: "", // TODO
    links: [
      {
        label: "Play on itch.io",
        url: "https://rukoy.itch.io/la-bergre-de-nuages",
      },
    ],
    description:
      "A 2D point-and-click adventure set in a dreamlike, cartoon-inspired world. Players help a shepherdess solve gentle puzzles as she tends to her flock of cloud-sheep, exploring themes of care and imagination. I worked on game design and level design, and contributed graphic support for animations.",
    theme: {
      background: "#f0f4f8",
      foreground: "#334155",
      accent: "#c9a87c",
      muted: "#94a3b8",
    },
  },
  {
    slug: "poupees",
    title: "Poupées : Liens & Patrimoines",
    category: "Film & Media",
    type: "Documentary",
    status: "Finished · 2024",
    image: "/projects/poupees.jpg",
    thumbnail: "/projects/poupees-thumb.jpg",
    featured: true,
    gallery: [
      { src: "/projects/poupees-affiche.jpg", caption: "Documentary poster" },
    ],
    youtubeId: "", // TODO
    description:
      "A documentary project exploring the importance of dolls in cultural and artistic heritage. The film focuses on how these objects — often seen as toys — convey unique stories and traditions, and play a key role in preserving cultural identities. It highlights artisans, collectors, and museums (including the Medina House in Rabat) working to pass down this intangible heritage.",
    theme: {
      background: "#fdf2f8",
      foreground: "#4a044e",
      accent: "#db2777",
      muted: "#9d174d",
    },
  },
  {
    slug: "le-jeu-du-bateau",
    title: "Le Jeu du Bateau",
    category: "Games",
    type: "Platformer / Shooter",
    status: "Playable Demo · 2021",
    image: "/projects/le-jeu-du-bateau.jpg",
    thumbnail: "/projects/le-jeu-du-bateau-thumb.jpg",
    youtubeId: "6ZepGKsg1Fo",
    links: [
      {
        label: "Game Design Document",
        url: "/docs/game-design-bateau.pdf",
      },
    ],
    description:
      "A dynamic platforming and shooting game where the player navigates a boat while facing enemies, obstacles, and puzzles. Resource management — health, fuel, water — directly influences progression. Environmental switches affecting the water level add a strategic puzzle layer.",
    theme: {
      background: "#0a2f1f",
      foreground: "#ecfdf5",
      accent: "#34d399",
      muted: "#6b8f8a",
    },
  },
  {
    slug: "yume",
    title: "Yume",
    category: "Games",
    type: "Narrative Platformer",
    status: "Finished · 2020",
    image: "/projects/yume.jpg",
    thumbnail: "/projects/yume-thumb.jpg",
    youtubeId: "owzNWydejFk",
    links: [
      {
        label: "Game Design Document",
        url: "/docs/game-design-yume.pdf",
      },
    ],
    description:
      "A platformer addressing schizophrenia through the story of Yume, a young Japanese girl. The player is immersed in her inner world, fluctuating between reality and hallucinations as she struggles with her fears and the disappearance of her mother. The game alternates between real-world exploration and battles against nightmarish creatures in her dreams.",
    theme: {
      background: "#1a1530",
      foreground: "#ffecd2",
      accent: "#ff6b35",
      muted: "#7c6f8a",
    },
  },
  {
    slug: "guns-guns-guns",
    title: "Guns Guns Guns",
    category: "Film & Media",
    type: "Action Sequence",
    status: "2023",
    image: "/projects/guns-guns-guns.jpg",
    thumbnail: "/projects/guns-thumb.jpg",
    youtubeId: "X9vInVjLUQI",
    description: "A gun action sequence I directed and edited for fun !",
    theme: {
      background: "#0f0f0f",
      foreground: "#d4d4d4",
      accent: "#6b21a8",
      muted: "#525252",
    },
  },
  {
    slug: "action-rpg-research",
    title: "Action-RPG Genre Research",
    category: "Research",
    type: "Academic File",
    status: "Published · 2021",
    image: "/projects/action-rpg-research.jpg",
    thumbnail: "/projects/action-rpg-thumb.jpg",
    hideHero: true,
    links: [
      {
        label: "Read the research file",
        url: "/docs/action-rpg-research.pdf",
      },
    ],
    description:
      "A research file produced as part of academic work on video game genres. Deep-dive analysis of the Action-RPG genre: its history, mechanics, and defining works.",
    theme: {
      background: "#fefce8",
      foreground: "#422006",
      accent: "#ca8a04",
      muted: "#a16207",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug: string): Project[] {
  return projects.filter((p) => p.slug !== currentSlug);
}
