
import { useState, useEffect } from "react";
import axios from "axios";
import { Project } from "@/types/project";


interface UseProjectsResult {
    projects: Project[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

const useProjects = (): UseProjectsResult => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get("/api/projects");
            setProjects(response?.data?.data || []);
        } catch (err) {
            console.error("Error fetching projects:", err);
            setError("Failed to load projects");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return {
        projects,
        loading,
        error,
        refetch: fetchProjects,
    };
};

export default useProjects;