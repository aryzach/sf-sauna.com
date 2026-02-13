import saunaLogo from "@/assets/sf-sauna-logo.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Top Nav Bar */}
      <nav className="border-b-2 border-foreground px-6 py-3 flex items-center justify-between">
        <a
          href="mailto:zach@sf-sauna.com"
          className="text-sm hover:text-accent transition-colors"
        >
          zach@sf-sauna.com
        </a>
        <Link to="/apply" className="text-sm font-bold hover:text-accent transition-colors">
          Apply
        </Link>
      </nav>

      {/* Hero */}
      <header className="py-12 text-center">
        <img src={saunaLogo} alt="SF Sauna" className="mx-auto w-40 h-40" />
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-10">
        <section>
          <h2 className="text-2xl font-bold tracking-wider uppercase mb-4">The Problem</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            US homes only offer 120V outlets, which cap sauna stoves at low power, slow heat-up, and poor performance (basically unusable). European homes have ubiquitous 230V, enabling their sauna culture.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Any good sauna requires access to high voltage power. At-home sauna in the US is limited by costly and logistically-complex electrical upgrades, making sauna out-of-reach for most people.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-wider uppercase mb-4">The Solution</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We're building a battery-augmented sauna that can go in any home, apartment, or backyard.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-wider uppercase mb-4">Proof of Market</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We've built{" "}
            <a
              href="https://sfsaunarental.com"
              className="text-primary underline hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              sfsaunarental.com
            </a>
            , which generates $5k MRR and has served 36 customers with our fleet of over 20 2-person portable saunas.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
