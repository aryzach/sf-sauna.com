import saunaLogo from "@/assets/sf-sauna-logo.png";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <nav className="border-b-2 border-foreground px-6 py-3 flex items-center justify-between">
        <a href="mailto:zach@sf-sauna.com" className="text-sm hover:text-accent transition-colors">
          zach@sf-sauna.com
        </a>
        <Link to="/" className="text-sm font-bold hover:text-accent transition-colors">
          Home
        </Link>
      </nav>

      <header className="py-12 text-center">
        <img src={saunaLogo} alt="SF Sauna" className="mx-auto w-40 h-40" />
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-6">
        <h2 className="text-2xl font-bold tracking-wider uppercase">Power Systems Engineer Contract Role</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We're looking for someone who wants to help prototype a battery-augmented sauna stove.
        </p>
        <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
          <p>
            To apply, email{" "}
            <a href="mailto:zach@sf-sauna.com" className="text-primary underline hover:text-accent transition-colors">
              zach@sf-sauna.com
            </a>
            {" "}and include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>A short description of the EE project you're most proud of building from scratch</li>
            <li>A link (GitHub, photos, writeup, etc.) if available</li>
            
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Apply;
