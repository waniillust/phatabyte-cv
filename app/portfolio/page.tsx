"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectDialog } from "@/components/project-dialog";
import { Filter } from "lucide-react";
// import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "web",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/phatabyte/ecommerce-platform",
    fullDescription: "A full-featured e-commerce platform with product management, cart functionality, and secure payments through Stripe integration. Built with performance and scalability in mind.",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "web",
    tags: ["React", "Firebase", "Material-UI"],
    demoUrl: "https://demo-tasks.example.com",
    githubUrl: "https://github.com/phatabyte/task-manager",
    fullDescription: "A collaborative task management application that helps teams organize and track their projects efficiently. Features real-time updates and team collaboration tools.",
  },
  {
    id: 3,
    title: "Health & Fitness Dashboard",
    description: "Personal health tracking dashboard",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    category: "mobile",
    tags: ["React Native", "GraphQL", "AWS"],
    demoUrl: "https://demo-health.example.com",
    githubUrl: "https://github.com/phatabyte/health-dashboard",
    fullDescription: "A comprehensive health and fitness tracking dashboard that helps users monitor their wellness journey. Includes workout tracking, nutrition logging, and progress visualization.",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Property listing and management system",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    category: "web",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    demoUrl: "https://demo-realestate.example.com",
    githubUrl: "https://github.com/phatabyte/real-estate",
    fullDescription: "A modern real estate platform featuring property listings, advanced search capabilities, and a comprehensive property management system for agents and buyers.",
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Data visualization", value: "dataviz" },
  { label: "Digital Art", value: "digitalart" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Portfolio</h1>
          <p className="text-muted-foreground max-w-[700px] mb-8">
            Explore our collection of successful projects and digital solutions.
          </p>
          
          {/* Category Filter */}
          <div className="flex items-center gap-2 mb-8">
            <Filter className="h-4 w-4" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Project Details Dialog */}
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </main>
  );
}