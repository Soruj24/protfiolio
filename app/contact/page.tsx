"use client";

import ContactHub from "@/components/Contact/ContactHub";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* <AnimatedBackground /> */}

      {/* <ContactHeader
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        projectTypes={projectTypes}
      /> */}

      {/* <TechOrbitsSection
        hoveredTech={hoveredTech}
        setHoveredTech={setHoveredTech}
        techOrbits={techOrbits}
        processSteps={processSteps}
      /> */}

      <ContactHub />

      {/* <AICallToAction /> */}
    </div>
  );
};

export default ContactPage;
