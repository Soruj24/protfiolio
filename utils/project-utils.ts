import { ImageFile, Project, ProjectFormData } from "@/types";

const API_BASE_URL = '/api/projects';

export const projectService = {
    async getProjects(): Promise<Project[]> {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch projects');
        }
        return response.json();
    },

    async getProject(id: string): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch project');
        }
        return response.json();
    },

    async createProject(projectData: ProjectFormData): Promise<Project> {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create project');
        }
        return response.json();
    },

    async updateProject(id: string, projectData: Partial<ProjectFormData>): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to update project');
        }
        return response.json();
    },

    async deleteProject(id: string): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to delete project');
        }
    },
};


export const simulateCloudinaryUpload = async (files: ImageFile[]): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                // Simulate upload process with random success/failure
                const uploadResults = files.map((file, index) => {
                    // Simulate 90% success rate for demo purposes
                    const isSuccess = Math.random() > 0.1;

                    if (!isSuccess) {
                        throw new Error(`Failed to upload ${file.file.name}`);
                    }

                    // Generate realistic Cloudinary public ID
                    const timestamp = Date.now();
                    const randomId = Math.random().toString(36).substring(2, 8);
                    const fileName = file.file.name.replace(/\.[^/.]+$/, ""); // Remove extension
                    const sanitizedFileName = fileName
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, '-')
                        .replace(/-+/g, '-')
                        .replace(/^-|-$/g, '');

                    return `portfolio/projects/${timestamp}-${randomId}-${sanitizedFileName}`;
                });

                console.log('Simulated Cloudinary upload completed:', uploadResults);
                resolve(uploadResults);
            } catch (error) {
                console.error('Simulated Cloudinary upload failed:', error);
                reject(error);
            }
        }, 2000); // Simulate 2 second upload time
    });
};

/**
 * Simulate Cloudinary image deletion
 */
export const simulateCloudinaryDelete = async (publicIds: string[]): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Simulated Cloudinary deletion:', publicIds);
            resolve();
        }, 1000);
    });
};

/**
 * Filter projects based on search term and filters
 */
export const filterProjects = (
    projects: Project[],
    searchTerm: string,
    filterCategory: string,
    filterStatus: string
): Project[] => {
    return projects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some((tech) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesCategory =
            filterCategory === "all" || project.category === filterCategory;
        const matchesStatus =
            filterStatus === "all" || project.status === filterStatus;

        return matchesSearch && matchesCategory && matchesStatus;
    });
};

/**
 * Create new project object
 */
export const createNewProject = (data: any, mainImage: string, additionalImages: string[] = []): Project => {
    return {
        _id: Date.now().toString(),
        ...data,
        image: mainImage,
        images: additionalImages,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
};

/**
 * Update existing project object
 */
export const updateProject = (project: Project, data: any, mainImage?: string, additionalImages: string[] = []): Project => {
    const updatedImages = mainImage
        ? [...additionalImages, ...(project.images || [])]
        : project.images || [];

    return {
        ...project,
        ...data,
        image: mainImage || project.image,
        images: updatedImages,
        updatedAt: new Date().toISOString(),
    };
};

/**
 * Validate image files before upload
 */
export const validateImageFiles = (files: File[]): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

    files.forEach((file, index) => {
        // Check file size
        if (file.size > maxSize) {
            errors.push(`${file.name} is too large. Maximum size is 5MB.`);
        }

        // Check file type
        if (!allowedTypes.includes(file.type)) {
            errors.push(`${file.name} is not a supported image format. Use JPEG, PNG, or WebP.`);
        }

        // Check file name length
        if (file.name.length > 100) {
            errors.push(`${file.name} filename is too long.`);
        }
    });

    return {
        isValid: errors.length === 0,
        errors
    };
};

 
export const getCloudinaryUrl = (publicId: string, transformations: string = "q_auto,f_auto"): string => {
 
    return `https://res.cloudinary.com/dbe49mmnp/image/upload/${transformations}/${publicId}`;
};

/**
 * Extract public ID from Cloudinary URL
 */
export const extractPublicIdFromUrl = (url: string): string => {
    // Extract public ID from Cloudinary URL
    const matches = url.match(/upload\/.+\/(.+)$/);
    return matches ? matches[1] : url;
};
