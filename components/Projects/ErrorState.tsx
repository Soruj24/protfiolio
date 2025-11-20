// ErrorState.tsx
interface ErrorStateProps {
  error: string;
}

const ErrorState = ({ error }: ErrorStateProps) => {
  return (
    <section id="projects" className="px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-xl text-red-400">Error: {error}</p>
      </div>
    </section>
  );
};

export default ErrorState;