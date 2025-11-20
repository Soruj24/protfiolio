import BrandSection from "./BrandSection";
import NavigationSection from "./NavigationSection";

 

interface FooterMainProps {
  hoveredLink: string | null;
  setHoveredLink: (link: string | null) => void;
}

export default function FooterMain({
  hoveredLink,
  setHoveredLink,
}: FooterMainProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-12">
        <BrandSection
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
        />

        <NavigationSection
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
        />
      </div>
    </div>
  );
}
