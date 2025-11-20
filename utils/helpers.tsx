import { Atom, BookOpen, Brain, Cloud, Code, Palette } from "lucide-react";

 

// Get category icon
export const getCategoryIcon = (category: string) => {
  const icons: Record<string, React.ReactNode> = {
    ai: <Brain className="w-4 h-4" />,
    web: <Code className="w-4 h-4" />,
    quantum: <Atom className="w-4 h-4" />,
    cloud: <Cloud className="w-4 h-4" />,
    design: <Palette className="w-4 h-4" />,
  };
  return icons[category] || <BookOpen className="w-4 h-4" />;
};

// Get difficulty color classes
export const getDifficultyColor = (difficulty: string) => {
  const colors: Record<string, string> = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return colors[difficulty] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

// Get category color classes
export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    quantum: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    cloud: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    design: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };
  return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

// Format date
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Calculate read time from content
export const calculateReadTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Generate excerpt from content
export const generateExcerpt = (content: string, maxLength: number = 150) => {
  const text = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Generate table of contents from HTML content
export const generateTableOfContents = (content: string) => {
  const headings = content.match(/<h[1-3][^>]*>.*?<\/h[1-3]>/g) || [];
  return headings.map((heading, index) => {
    const levelMatch = heading.match(/<h([1-3])/);
    const titleMatch = heading.match(/>(.*?)</);
    const idMatch = heading.match(/id="([^"]*)"/);
    
    const level = levelMatch ? parseInt(levelMatch[1]) : 1;
    const title = titleMatch ? titleMatch[1] : `Section ${index + 1}`;
    const id = idMatch ? idMatch[1] : `section-${index + 1}`;
    
    return { id, title, level };
  });
};

// Filter related posts by category and tags
export const getRelatedPosts = (currentPost: any, allPosts: any[], limit: number = 3) => {
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some((tag: string) => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};

// Share utilities
export const shareOnTwitter = (url: string, title: string) => {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    "_blank"
  );
};

export const shareOnFacebook = (url: string) => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    "_blank"
  );
};

export const shareOnLinkedIn = (url: string) => {
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    "_blank"
  );
};

// Copy to clipboard
export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

// Scroll to element with offset
export const scrollToElement = (elementId: string, offset: number = 120) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Format number with commas
export const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Get initial from name
export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};