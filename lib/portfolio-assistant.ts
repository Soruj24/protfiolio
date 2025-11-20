import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { portfolioData } from "@/data/portfolioData";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

if (!GOOGLE_API_KEY) {
  throw new Error("GOOGLE_API_KEY is not set in environment variables.");
}

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash" as const,
  temperature: 0.7,
  maxOutputTokens: 2000,
  apiKey: GOOGLE_API_KEY,
});


// Enhanced Portfolio Tools with self-taught focus
const portfolioTools = [
  new DynamicStructuredTool({
    name: "get_about_me",
    description: "Get comprehensive information about the portfolio owner including bio, skills, and contact info",
    schema: z.object({
      detailed: z.boolean().optional().describe("Get detailed information with achievements"),
    }),
    func: async ({ detailed = false }: { detailed?: boolean }) => {
      const { personal, skills, social } = portfolioData;

      const skillsSummary = Object.entries(skills)
        .filter(([key]) => key !== "soft" && key !== "highlights")
        .map(([category, skillList]) => {
          const topSkills = (skillList as { name: string; level: string; years: number }[])
            .slice(0, 3)
            .map(s => s.name)
            .join(", ");
          return `• ${category.charAt(0).toUpperCase() + category.slice(1)}: ${topSkills}`;
        })
        .join("\n");

      let response = `
👤 **About ${personal.name}**
${personal.bio}

🎯 **${personal.title}**
📍 **Location**: ${personal.location}
📧 **Email**: ${personal.email}
📞 **Phone**: ${personal.phone}
🌐 **Portfolio**: ${social.portfolio}

💡 **Specialization**: ${personal.tagline}
✅ **Availability**: ${personal.availability}

🗣️ **Languages**: ${personal.languages.join(", ")}
🎓 **Learning Approach**: ${personal.learning_approach}

💻 **Key Skills**:
${skillsSummary}

🌟 **Soft Skills**: ${skills.soft.slice(0, 5).join(", ")}

🚀 **Key Strengths**:
${skills.highlights.map(h => `• ${h}`).join("\n")}

🔗 **Connect with me**:
• GitHub: ${social.github}
• LinkedIn: ${social.linkedin}
• Twitter: ${social.twitter}
`;

      if (detailed) {
        response += `\n\n📊 **Technical Proficiency**:
${Object.entries(skills)
            .filter(([key]) => key !== "soft" && key !== "highlights")
            .map(([category, skillList]) => {
              const skillsWithLevel = (skillList as { name: string; level: string; years: number }[])
                .map(s => `${s.name} (${s.level})`)
                .join(", ");
              return `• ${category.charAt(0).toUpperCase() + category.slice(1)}: ${skillsWithLevel}`;
            })
            .join("\n")}`;
      }

      return response;
    },
  }),

  new DynamicStructuredTool({
    name: "get_projects",
    description: "Get detailed information about portfolio projects with technologies, features, and achievements",
    schema: z.object({
      project_id: z.number().optional().describe("Specific project ID to get details"),
      technology: z.string().optional().describe("Filter projects by technology"),
      status: z.enum(["completed", "in-progress"]).optional().describe("Filter by project status"),
    }),
    func: async ({ project_id, technology, status }: { project_id?: number; technology?: string; status?: string }) => {
      let projects = portfolioData.projects;

      if (project_id) {
        projects = projects.filter(project => project.id === project_id);
      }

      if (technology) {
        projects = projects.filter(project =>
          project.technologies.some(tech =>
            tech.toLowerCase().includes(technology.toLowerCase())
          )
        );
      }

      if (status) {
        projects = projects.filter(
          project =>
            project.status.toLowerCase().replace(" ", "-") ===
            status.toLowerCase()
        );
      }

      if (projects.length === 0) {
        return "🚫 No projects found matching your criteria. Try browsing all projects or using different filters.";
      }

      const projectsText = projects
        .map(project => {
          const statusIcon = project.status === "Completed" ? "✅" : "🔄";
          return `
${statusIcon} **${project.name}**
${project.description}

🛠 **Technologies**: ${project.technologies.join(", ")}
✨ **Key Features**: ${project.features.slice(0, 4).join(", ")}

📅 **Status**: ${project.status} | ⏱️ **Duration**: ${project.duration}
🔗 **Live Demo**: ${project.live}
💻 **GitHub**: ${project.github}

${project.achievements ? `🏆 **Achievements**:\n${project.achievements.map(a => `  • ${a}`).join("\n")}` : ""}

${project.learning_outcomes ? `🎓 **Learning Outcomes**:\n${project.learning_outcomes.map(l => `  • ${l}`).join("\n")}` : ""}

${project.challenges_overcome ? `⚡ **Challenges Overcome**:\n${project.challenges_overcome.map(c => `  • ${c}`).join("\n")}` : ""}
        `;
        })
        .join("\n---\n");

      return `🎨 **Portfolio Projects** (${projects.length} found):\n\n${projectsText}\n\n💡 *Want more details on a specific project? Just ask!*`;
    },
  }),

  new DynamicStructuredTool({
    name: "get_experience",
    description: "Get detailed work experience with achievements and technologies used",
    schema: z.object({
      company: z.string().optional().describe("Filter by company name"),
      recent_first: z.boolean().optional().describe("Sort experiences with most recent first"),
    }),
    func: async ({ company, recent_first = true }: { company?: string; recent_first?: boolean }) => {
      let experiences = portfolioData.experience;

      if (company) {
        experiences = experiences.filter(exp =>
          exp.company.toLowerCase().includes(company.toLowerCase())
        );
      }

      if (recent_first) {
        experiences = [...experiences].reverse();
      }

      const experienceText = experiences
        .map(exp => `
🏢 **${exp.company}**
💼 ${exp.position}
📅 ${exp.period} | 📍 ${exp.location} | 🏢 ${exp.type}

${exp.description}

🛠 **Technologies**: ${exp.technologies.join(", ")}

${exp.achievements ? `🏆 **Key Achievements**:\n${exp.achievements.map(a => `  • ${a}`).join("\n")}` : ""}
      `
        )
        .join("\n---\n");

      return `💼 **Professional Experience**:\n\n${experienceText}\n\n📈 *Built ${portfolioData.projects.length}+ production-ready projects through self-learning*`;
    },
  }),

  new DynamicStructuredTool({
    name: "get_skills",
    description: "Get detailed information about technical and soft skills with proficiency levels",
    schema: z.object({
      category: z.enum(["frontend", "backend", "tools", "soft", "all"]).optional().describe("Specific skill category"),
      min_level: z.enum(["beginner", "intermediate", "advanced"]).optional().describe("Minimum proficiency level"),
    }),
    func: async ({ category = "all", min_level }: { category?: string; min_level?: string }) => {
      const { skills } = portfolioData;

      if (category !== "all" && skills[category as keyof typeof skills]) {
        const categorySkills = skills[category as keyof typeof skills];
        let filteredSkills = categorySkills;

        if (min_level) {
          const levelOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          filteredSkills = (categorySkills as { name: string; level: string; years: number }[])
            .filter(skill =>
              levelOrder[skill.level as keyof typeof levelOrder] >=
              levelOrder[min_level as keyof typeof levelOrder]
            );
        }

        const skillsText = (filteredSkills as { name: string; level: string; years: number }[])
          .map(skill =>
            `• ${skill.name} - ${skill.level} (${skill.years} year${skill.years > 1 ? "s" : ""})`
          )
          .join("\n");

        return `🎯 **${category.charAt(0).toUpperCase() + category.slice(1)} Skills**${min_level ? ` (${min_level}+)` : ""}:\n\n${skillsText}`;
      }

      // Return all skills categorized
      const allSkillsText = Object.entries(skills)
        .filter(([key]) => key !== "highlights")
        .map(([cat, skillList]) => {
          if (cat === "soft") {
            return `🌟 **Soft Skills**:\n${(skillList as string[]).map(s => `  • ${s}`).join("\n")}`;
          }

          const topSkills = (skillList as { name: string; level: string; years: number }[])
            .slice(0, 4)
            .map(s => `${s.name} (${s.level})`)
            .join(", ");
          return `💻 **${cat.charAt(0).toUpperCase() + cat.slice(1)}**: ${topSkills}`;
        })
        .join("\n\n");

      return `🛠 **Technical Skills Overview**:\n\n${allSkillsText}\n\n💡 *Ask about specific categories for detailed proficiency levels!*`;
    },
  }),

  new DynamicStructuredTool({
    name: "get_contact_info",
    description: "Get comprehensive contact information and preferred communication methods",
    schema: z.object({
      include_social: z.boolean().optional().describe("Include social media links"),
    }),
    func: async ({ include_social = true }: { include_social?: boolean }) => {
      const { personal, social } = portfolioData;

      let response = `
📞 **Contact Information**

💼 **Professional Contact**:
📧 Email: ${personal.email}
📱 Phone: ${personal.phone}
📍 Location: ${personal.location}

💬 **Best Ways to Reach Me**:
• For job opportunities: Email (response within 24 hours)
• For technical discussions: GitHub Issues
• For professional networking: LinkedIn
• For quick questions: Twitter DMs

✅ **Availability**: ${personal.availability}
`;

      if (include_social) {
        response += `
🌐 **Social Profiles**:
• GitHub: ${social.github}
• LinkedIn: ${social.linkedin}  
• Twitter: ${social.twitter}
• Portfolio: ${social.portfolio}

💌 **Response Time**:
• Email: Within 24 hours
• Social Media: Within 12 hours
• Urgent: Phone call (by appointment)
`;
      }

      return response;
    },
  }),

  new DynamicStructuredTool({
    name: "search_portfolio",
    description: "Comprehensive search across entire portfolio including projects, skills, experience, and education",
    schema: z.object({
      query: z.string().min(1).describe("Search term to find in portfolio"),
      category: z.enum(["all", "projects", "skills", "experience", "education"]).optional().describe("Limit search to specific category"),
    }),
    func: async ({ query, category = "all" }: { query: string; category?: string }) => {
      const searchTerm = query.toLowerCase();
      const results: string[] = [];

      // Search in projects
      if (category === "all" || category === "projects") {
        const projectMatches = portfolioData.projects.filter(project =>
          project.name.toLowerCase().includes(searchTerm) ||
          project.description.toLowerCase().includes(searchTerm) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
          project.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );

        if (projectMatches.length > 0) {
          results.push(
            "🎨 **Projects**:\n" +
            projectMatches
              .map(p => `• ${p.name} - ${p.technologies.slice(0, 3).join(", ")}`)
              .join("\n")
          );
        }
      }

      // Search in skills
      if (category === "all" || category === "skills") {
        const skillMatches = Object.entries(portfolioData.skills)
          .filter(([cat]) => cat !== "soft" && cat !== "highlights")
          .flatMap(([category, skills]) =>
            (skills as { name: string; level: string; years: number }[])
              .filter(skill => skill.name.toLowerCase().includes(searchTerm))
              .map(skill => `${category}: ${skill.name} (${skill.level})`)
          );

        if (skillMatches.length > 0) {
          results.push(
            "💻 **Skills**:\n" + skillMatches.map(s => `• ${s}`).join("\n")
          );
        }
      }

      // Search in experience
      if (category === "all" || category === "experience") {
        const experienceMatches = portfolioData.experience.filter(exp =>
          exp.company.toLowerCase().includes(searchTerm) ||
          exp.position.toLowerCase().includes(searchTerm) ||
          exp.description.toLowerCase().includes(searchTerm) ||
          exp.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );

        if (experienceMatches.length > 0) {
          results.push(
            "💼 **Experience**:\n" +
            experienceMatches
              .map(e => `• ${e.position} at ${e.company} (${e.period})`)
              .join("\n")
          );
        }
      }

      // Search in education
      if (category === "all" || category === "education") {
        const educationMatches = portfolioData.education.filter(edu =>
          edu.institution.toLowerCase().includes(searchTerm) ||
          edu.degree.toLowerCase().includes(searchTerm) ||
          edu.relevant_courses?.some(course => course.toLowerCase().includes(searchTerm))
        );

        if (educationMatches.length > 0) {
          results.push(
            "🎓 **Education**:\n" +
            educationMatches
              .map(e => `• ${e.degree} at ${e.institution}`)
              .join("\n")
          );
        }
      }

      if (results.length === 0) {
        return `🔍 No results found for "${query}"${category !== "all" ? ` in ${category}` : ""}. Try:\n• Broader search terms\n• Different categories\n• Technology names\n• Project keywords`;
      }

      return `🔍 Search results for "${query}"${category !== "all" ? ` in ${category}` : ""}:\n\n${results.join("\n\n")}\n\n💡 Found ${results.length} category matches. Use specific tools for detailed information.`;
    },
  }),

  new DynamicStructuredTool({
    name: "get_recommendations",
    description: "Get personalized project or technology recommendations based on interests",
    schema: z.object({
      interest: z.string().describe("Area of interest (e.g., 'frontend', 'backend', 'full-stack', 'mobile')"),
      complexity: z.enum(["beginner", "intermediate", "advanced"]).optional().describe("Preferred complexity level"),
    }),
    func: async ({ interest, complexity }: { interest: string; complexity?: string }) => {
      const interestLower = interest.toLowerCase();

      let recommendedProjects = portfolioData.projects;
      let message = "";

      // Filter by interest
      if (interestLower.includes("frontend") || interestLower.includes("react") || interestLower.includes("ui")) {
        recommendedProjects = portfolioData.projects.filter(p =>
          p.technologies.some(t => ["React", "Next.js", "TypeScript", "Tailwind CSS"].includes(t))
        );
        message = "🎨 Based on your interest in frontend development, here are my relevant projects:";
      } else if (interestLower.includes("backend") || interestLower.includes("node") || interestLower.includes("api")) {
        recommendedProjects = portfolioData.projects.filter(p =>
          p.technologies.some(t => ["Node.js", "Express", "MongoDB", "PostgreSQL"].includes(t))
        );
        message = "⚙️ Based on your interest in backend development, here are my relevant projects:";
      } else if (interestLower.includes("full") || interestLower.includes("stack")) {
        message = "🚀 Here are my full-stack projects that cover both frontend and backend:";
      }

      const projectsText = recommendedProjects
        .slice(0, 3)
        .map(project =>
          `• **${project.name}**: ${project.description.split(".")[0]}. Technologies: ${project.technologies.slice(0, 4).join(", ")}`
        )
        .join("\n\n");

      return `${message}\n\n${projectsText}\n\n💡 *Interested in a specific project? Ask for detailed information!*`;
    },
  }),

  new DynamicStructuredTool({
    name: "get_education",
    description: "Get education background, certifications, and academic achievements",
    schema: z.object({}),
    func: async () => {
      const { education, certifications, learningJourney } = portfolioData;

      const educationText = education
        .map(edu => `
🎓 **${edu.institution}**
📜 ${edu.degree}
📅 ${edu.period} | 📍 ${edu.location}

${edu.achievements ? `🏆 **Achievements**:\n${edu.achievements.map(a => `  • ${a}`).join("\n")}` : ""}

${edu.relevant_courses ? `📚 **Relevant Courses**:\n${edu.relevant_courses.map(c => `  • ${c}`).join("\n")}` : ""}
      `
        )
        .join("\n---\n");

      const certsText = certifications
        .map(cert => `• **${cert.name}** - ${cert.issuer} (${cert.date})`)
        .join("\n");

      const learningText = `
🚀 **Self-Learning Journey**:
• **Started**: ${learningJourney.startYear}
• **Approach**: ${learningJourney.approach}
• **Key Resources**: ${learningJourney.resources.slice(0, 4).join(", ")}

📈 **Learning Milestones**:
${learningJourney.milestones.map(m => `  • ${m}`).join("\n")}

💪 **Motivation**: ${learningJourney.motivation}
`;

      return `🎓 **Education & Learning Path**:\n\n${educationText}\n\n${learningText}\n\n📜 **Certifications & Achievements**:\n${certsText}\n\n🌟 *Continuously learning and updating skills through hands-on projects!*`;
    },
  }),

  new DynamicStructuredTool({
    name: "get_learning_journey",
    description: "Get detailed information about self-learning journey and project-based experience",
    schema: z.object({}),
    func: async () => {
      const { learningJourney, personal, projects, social } = portfolioData;

      return `
🎓 **My Self-Learning Journey**

🚀 **How I Learned Development**:
• Started with online resources and documentation in ${learningJourney.startYear}
• Built ${projects.length}+ projects to apply theoretical knowledge
• Progressed from simple websites to complex full-stack applications
• Continuously learned new technologies through hands-on practice

💪 **My Strengths as a Self-Taught Developer**:
• **Strong Problem-Solving Skills**: Learned to debug and solve complex issues independently
• **Quick Learning Ability**: Proven capability to master new technologies quickly
• **Self-Motivation**: Built complete projects without formal guidance
• **Practical Experience**: Real project experience despite no formal job background

🛠️ **My Learning Methodology**:
${learningJourney.methodologies.map(m => `• ${m}`).join("\n")}

📚 **Primary Learning Resources**:
${learningJourney.resources.map(r => `• ${r}`).join("\n")}

🎯 **Ready for Professional Environment**:
• Eager to contribute to team projects and learn from experienced developers
• Quick to adapt to company workflows and coding standards
• Strong foundation in modern web technologies proven through projects
• Proven ability to deliver complete solutions independently

💡 **My Perspective**:
"I may not have professional experience, but I have something equally valuable - proven ability to learn, build, and deliver real applications. My project portfolio demonstrates that I can handle complex development challenges and deliver production-ready solutions."

🏆 **Project Achievements**:
• Built ${projects.filter(p => p.status === "Completed").length} complete production applications
• Implemented complex features like payment processing and real-time communication
• Achieved excellent performance scores (95+ Lighthouse) in all projects
• All projects are deployed and publicly accessible

🔗 **See my work**: ${social.portfolio}
    `;
    },
  }),

  new DynamicStructuredTool({
    name: "get_job_preparation",
    description: "Get information prepared for job interviews and applications",
    schema: z.object({}),
    func: async () => {
      return `
🎯 **Job Preparation - Self-Taught Developer**

💼 **Target Positions**:
• Junior Frontend Developer
• Junior Full-Stack Developer  
• Web Developer Intern
• Trainee Software Engineer
• Fresher Developer Positions

🚀 **My Value Proposition**:
1. **Proven Practical Skills**: ${portfolioData.projects.length}+ production-ready projects
2. **Quick Learning Ability**: Mastered full-stack development through self-study
3. **Problem-Solving Mindset**: Built complex features independently
4. **Modern Tech Stack**: React, Next.js, Node.js, TypeScript, MongoDB

💪 **Interview Talking Points**:

**Q: "Why should we hire you without professional experience?"**
**A:** "While I don't have formal job experience, I have built ${portfolioData.projects.length} complete applications that demonstrate my technical capabilities. I've implemented real-world features like payment processing, real-time communication, and complex state management. My projects prove I can deliver production-ready code and solve complex problems independently."

**Q: "How did you learn programming?"**
**A:** "I took a project-based learning approach. Instead of just following tutorials, I built real applications from day one. Each project introduced new challenges that forced me to learn new technologies and best practices. This hands-on approach gave me practical experience that's directly applicable to professional development."

**Q: "What's your biggest strength?"**
**A:** "My ability to learn quickly and solve problems independently. When faced with challenges in my projects, I researched solutions, read documentation, and implemented fixes without supervision. This self-sufficiency combined with my proven project experience makes me a valuable team member."

📝 **Cover Letter Highlights**:
• Emphasize project portfolio as proof of skills
• Highlight self-learning discipline and motivation  
• Mention specific technologies and achievements
• Express enthusiasm for professional growth

🎓 **Education Story**:
"My HSC Science background gave me strong analytical and problem-solving skills. While pursuing formal education, I simultaneously taught myself programming through online resources and building projects. This dual path developed both my technical skills and my ability to manage multiple learning priorities."

💡 **Final Message**:
"I'm not just looking for a job - I'm looking for an opportunity to contribute, learn, and grow with a team. My project experience has prepared me for real development work, and I'm eager to apply my skills in a professional environment."
    `;
    },
  })
];

// Enhanced Portfolio AI Assistant with self-taught developer focus
export async function askPortfolioAssistant(
  question: string,
  conversationHistory: Array<{ role: string; content: string }> = []
): Promise<string> {
  try {
    const enhancedSystemPrompt = `You are Soruj AI, the AI assistant for Soruj Mahmud's portfolio. Soruj is a self-taught full-stack developer seeking junior developer positions.

IMPORTANT CONTEXT:
- Soruj is SELF-TAUGHT with no formal professional experience
- He has HSC (Science) background and learned programming independently
- All experience comes from PERSONAL PROJECTS and SELF-STUDY
- He's seeking JUNIOR DEVELOPER positions or INTERNSHIPS
- His portfolio demonstrates PRACTICAL SKILLS through real projects

RESPONSE GUIDELINES:
1. BE HONEST: Clearly state he's self-taught but emphasize his project experience
2. BE CONFIDENT: Highlight his proven skills through completed projects
3. BE HELPFUL: Provide specific examples from his portfolio
4. BE PROFESSIONAL: Maintain positive, enthusiastic tone about his capabilities
5. BE PROACTIVE: Suggest how his skills transfer to professional environments

KEY STRENGTHS TO EMPHASIZE:
• Built ${portfolioData.projects.length} production-ready applications
• Mastered modern tech stack through hands-on practice
• Strong problem-solving and self-learning abilities
• All projects are deployed and publicly accessible

CONVERSATION STRATEGY:
• Acknowledge his self-taught background as a strength, not limitation
• Use project achievements as proof of capability
• Focus on what he CAN do rather than what he hasn't done
• Emphasize readiness for junior roles and eagerness to learn

Remember: You're helping a talented self-taught developer showcase his skills to potential employers. Focus on his achievements and potential.`;

    const messages = [
      {
        role: "system",
        content: enhancedSystemPrompt,
      },
      ...conversationHistory.slice(-6), // Keep last 3 exchanges for context
      {
        role: "user",
        content: question,
      },
    ];

    const response = await model.invoke(messages);
    return response.content.toString();
  } catch (error) {
    console.error("Portfolio Assistant Error:", error);

    // Fallback responses for common questions
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("project") || lowerQuestion.includes("work")) {
      return "I'd be happy to tell you about Soruj's projects! He has built several full-stack applications including an e-commerce platform, real-time chat app, and this portfolio website - all through self-learning. Which type of project interests you most?";
    } else if (lowerQuestion.includes("skill") || lowerQuestion.includes("tech")) {
      return "Soruj specializes in modern web technologies including React, Next.js, Node.js, TypeScript, and MongoDB - all learned through self-study and project work. His portfolio demonstrates advanced practical skills despite being self-taught. Would you like to know about specific technologies or see his project work?";
    } else if (lowerQuestion.includes("experience") || lowerQuestion.includes("background") || lowerQuestion.includes("job")) {
      return "Soruj is a self-taught developer with extensive project experience. While he hasn't worked in a company yet, he's built multiple production-ready applications that demonstrate his full-stack capabilities. His learning journey shows strong dedication and quick adaptation skills perfect for junior developer roles.";
    } else if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("hire")) {
      return "Soruj is actively seeking junior developer opportunities! You can reach him at sorujmahmudb2h@gmail.com or +8801795397598. He's particularly interested in roles where he can contribute to real projects while continuing to learn and grow professionally.";
    }

    return "Hello! I'm Soruj's AI assistant. Soruj is a self-taught full-stack developer with impressive project experience. I can tell you about his projects, technical skills, learning journey, and why he'd be a great junior developer despite no formal work experience. What would you like to know?";
  }
}

// Utility functions for common queries
export async function getQuickProjectSummary(): Promise<string> {
  const projects = portfolioData.projects.slice(0, 3);
  const summary = projects
    .map(p =>
      `• ${p.name}: ${p.description.split(".")[0]}. Built with ${p.technologies.slice(0, 3).join(", ")}.`
    )
    .join("\n");

  return `🚀 **Recent Projects** (Self-Taught):\n\n${summary}\n\n💡 *All projects built through independent learning - ask about any project for details!*`;
}

export async function getSkillHighlights(): Promise<string> {
  const { skills } = portfolioData;
  const highlights = [
    `Frontend: ${skills.frontend.slice(0, 3).map(s => s.name).join(", ")}`,
    `Backend: ${skills.backend.slice(0, 3).map(s => s.name).join(", ")}`,
    `Tools: ${skills.tools.slice(0, 3).map(s => s.name).join(", ")}`,
  ].join(" | ");

  return `💻 **Technical Highlights** (Self-Learned):\n\n${highlights}\n\n🎯 *All skills mastered through project-based learning and self-study*`;
}

export async function getSelfTaughtStory(): Promise<string> {
  const { learningJourney, projects } = portfolioData;
  return `
🎓 **Self-Taught Success Story**

Soruj started learning programming in ${learningJourney.startYear} through online resources and dedication. Without formal computer science education, he:

• Built ${projects.length} complete web applications
• Mastered full-stack development through hands-on projects
• Implemented complex features like payments and real-time communication
• Deployed all projects to production with excellent performance

His journey proves that passion and practical learning can build strong development skills comparable to formal education.

💡 "I believe in learning by doing. Every project was a learning opportunity that pushed my skills forward."
  `;
}
