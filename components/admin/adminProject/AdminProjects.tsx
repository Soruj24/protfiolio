"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import axios, { AxiosError } from "axios";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import { Project } from "@/types/project";

interface ApiResponse {
  data: {
    data?: Project | Project[];
    error?: string;
    url?: string;
    imageUrl?: string;
  };
}

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview("");
    }
  }, [imageFile]);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/projects");
      setProjects(response.data.data || response.data);
      toast.success("Projects loaded successfully!");
    } catch (error: AxiosError | unknown) {
      console.error("Error fetching projects:", error);
      toast.error(
        (error as AxiosError<{ error: string }>)?.response?.data?.error ||
          "Failed to load projects"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (projectData: Project) => {
    setIsLoading(true);

    try {
      let response: ApiResponse;
      let finalImageUrl = imagePreview;

      if (imageFile) {
        try {
          const uploadResponse = await uploadImage(imageFile);
          finalImageUrl =
            uploadResponse.data.url || uploadResponse.data.imageUrl;
        } catch (uploadError) {
          console.error("Image upload failed, using preview:", uploadError);
        }
      }

      const projectPayload = {
        ...projectData,
        image: finalImageUrl || editingProject?.image || "",
        id: editingProject?.id || projectData.id || `project-${Date.now()}`,
        createdAt: editingProject?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      if (editingProject) {
        response = await api.put(
          `/projects/${editingProject.id}`,
          projectPayload
        );
        setProjects((prev) =>
          prev.map((p) =>
            p.id === editingProject.id
              ? (response.data.data as Project)
              : p
          )
        );
        toast.success("Project updated successfully!");
      } else {
        response = await api.post("/projects", projectPayload);
        setProjects((prev) => [(response.data.data as Project), ...prev]);
        toast.success("Project created successfully!");
      }

      setEditingProject(null);
      setImageFile(null);
      setImagePreview("");
    } catch (error: unknown) {
      console.error("Error saving project:", error);
      toast.error(
        (error as AxiosError<{ error: string }>)?.response?.data?.error ||
          "Failed to save project"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const projectToDelete = projects.find((p) => p.id === id);

    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${projectToDelete?.title}". This action cannot be undone!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/projects/${id}`);
        setProjects((prev) => prev.filter((p) => p.id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Your project has been deleted.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error: unknown) {
        console.error("Error deleting project:", error);
        Swal.fire({
          title: "Error!",
          text:
            (error as AxiosError<{ error: string }>)?.response?.data?.error ||
            "Failed to delete project. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setImageFile(null);
    setImagePreview(project.image);
    toast.info("Editing project: " + project.title);
  };

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
    if (file) {
      toast.info("Image selected successfully");
    }
  };

  const handleImageClear = () => {
    setImageFile(null);
    setImagePreview("");
    toast.info("Image cleared");
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const duplicateProject = async (project: Project) => {
    const result = await Swal.fire({
      title: "Duplicate Project?",
      text: `This will create a copy of "${project.title}"`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, duplicate it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await api.post("/projects", {
          ...project,
          id: undefined,
          title: `${project.title} (Copy)`,
        });

        setProjects((prev) => [(response.data.data as Project), ...prev]);
        toast.success("Project duplicated successfully!");
      } catch (error: unknown) {
        console.error("Error duplicating project:", error);
        toast.error(
          (error as AxiosError<{ error: string }>)?.response?.data?.error ||
            "Failed to duplicate project"
        );
      }
    }
  };

  const toggleFeatured = async (project: Project) => {
    const action = project.featured
      ? "remove from featured"
      : "add to featured";

    const result = await Swal.fire({
      title: `${project.featured ? "Remove from" : "Add to"} Featured?`,
      text: `You are about to ${action} "${project.title}"`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#6c757d",
      confirmButtonText: `Yes, ${action}!`,
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await api.patch(`/projects/${project.id}`, {
          featured: !project.featured,
        });

        setProjects((prev) =>
          prev.map((p) =>
            p.id === project.id
              ? (response.data.data as Project)
              : p
          )
        );

        toast.success(
          `Project ${
            !project.featured ? "added to" : "removed from"
          } featured!`
        );
      } catch (error: unknown) {
        console.error("Error updating project:", error);
        toast.error(
          (error as AxiosError<{ error: string }>)?.response?.data?.error ||
            "Failed to update project"
        );
      }
    }
  };

  return (
    <div className="space-y-6">
      <ProjectForm
        editingProject={editingProject}
        onSubmit={handleSubmit}
        onCancel={() => {
          setEditingProject(null);
          setImageFile(null);
          setImagePreview("");
          toast.info("Edit cancelled");
        }}
        onDuplicate={duplicateProject}
        isLoading={isLoading}
        imagePreview={imagePreview}
        onImageChange={handleImageChange}
        onImageClear={handleImageClear}
      />

      <ProjectList
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDuplicate={duplicateProject}
        onToggleFeatured={toggleFeatured}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterCategory={filterCategory}
        onCategoryChange={setFilterCategory}
        filterStatus={filterStatus}
        onStatusChange={setFilterStatus}
        isLoading={isLoading}
      />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
