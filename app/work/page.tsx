"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { useState } from "react"

const categories = ["All", "Games", "Film & Media", "Projects", "Research"]

export default function Home() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 pb-24">
        {/* Filter tabs */}
        <div className="flex items-center gap-3 md:gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 hover:scale-105 ${
                active === cat
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                type={project.type}
                status={project.status}
                image={project.image}
                thumbnail={project.thumbnail}
                theme={project.theme}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects in this category yet.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
