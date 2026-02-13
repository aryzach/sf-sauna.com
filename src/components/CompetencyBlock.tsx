interface CompetencyBlockProps {
  title: string;
  description: string;
}

const CompetencyBlock = ({ title, description }: CompetencyBlockProps) => {
  return (
    <div className="py-6 border-b border-border last:border-b-0">
      <h3 className="text-lg font-bold tracking-wide mb-3">
        // {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CompetencyBlock;
