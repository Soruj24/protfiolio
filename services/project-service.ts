import { Project } from "@/types/project";

const API_BASE_URL = "/api/projects";

export const projectService = {
  // Get all projects
  async getProjects(): Promise<Project[]> {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return response.json();
  },

  // Get single project
  async getProject(id: string): Promise<Project> {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch project");
    }
    return response.json();
  },

  // Create project
  async createProject(projectData: Project): Promise<Project> {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error("Failed to create project");
    }
    return response.json();
  },

  // Update project
  async updateProject(
    id: string,
    projectData: Partial<Project>
  ): Promise<Project> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error("Failed to update project");
    }
    return response.json();
  },

  // Delete project
  async deleteProject(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete project");
    }
  },
};
