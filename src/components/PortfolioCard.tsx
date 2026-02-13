interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
}

const PortfolioCard = ({ image, title, description }: PortfolioCardProps) => {
  return (
    <div className="border border-border overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm tracking-wide">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
