"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  fullDescription: string;
}

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              {project.fullDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => window.open(project.demoUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}