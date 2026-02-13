interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-wider uppercase font-mono">
        // {children}
      </h2>
      <div className="mt-2 w-24 h-0.5 bg-accent" />
    </div>
  );
};

export default SectionHeading;
