import AmericanFlag from "@/components/AmericanFlag";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import CompetencyBlock from "@/components/CompetencyBlock";

import tinyboardImg from "@/assets/portfolio-tinyboard.jpg";
import featherImg from "@/assets/portfolio-feather.jpg";
import breezyImg from "@/assets/portfolio-breezy.jpg";
import avatarImg from "@/assets/testimonial-avatar.jpg";

const portfolioItems = [
  {
    image: tinyboardImg,
    title: "nRF54L15 Tiny Board",
    description: "BLE, chip scale packages, long battery life",
  },
  {
    image: featherImg,
    title: "RoyalBlue54L Feather",
    description: "BLE, NFC, onboard CMSIS-DAP debugger, advanced power management",
  },
  {
    image: breezyImg,
    title: "Breezy Froggy",
    description: "Portable CO2 sensor, SHT40, STCC4, nRF54L15, CR2032",
  },
];

const competencies = [
  {
    title: "Connected Micropower Applications",
    description:
      "Specialists in low power IoT design. Experienced in designing secure, updatable, connected devices with battery lifetimes measured in years (nRF5, nRF7, nRF9, SX1262/LR1110). Bluetooth Low Energy, Wi-Fi, LTE-M, LoRa, proprietary protocols.",
  },
  {
    title: "Wearable Applications",
    description:
      "Pedigree in wireless, wearable medical devices from concept to pre-clinical (IEC 60601). Infusion pumps, patient recovery monitors, AI enabled devices, consumer health.",
  },
  {
    title: "Highspeed Applications",
    description:
      "Experienced in use of advanced application processors, baremetal or with RTOS (i.MX, STM32). USB, Ethernet, CAN-FD.",
  },
  {
    title: "Radio Frequency & SDR Applications",
    description:
      "Developers of novel software-defined radio solutions for observability, command and control.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Top Nav Bar */}
      <nav className="border-b-2 border-accent px-6 py-3 flex items-center gap-6">
        <a
          href="mailto:build@amemb.com"
          className="text-sm hover:text-accent transition-colors"
        >
          build@amemb.com
        </a>
      </nav>

      {/* Hero */}
      <header className="py-12 text-center">
        <AmericanFlag />
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-[0.25em] uppercase">
          American Embedded
        </h1>
        <p className="mt-2 text-lg md:text-xl text-accent font-bold tracking-wider">
          Hardtech Consulting
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        {/* Field Reports */}
        <section className="border border-border p-6 md:p-8 mb-12">
          <SectionHeading>Field Reports</SectionHeading>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={avatarImg}
              alt="Client avatar"
              className="w-32 h-40 object-cover border border-border flex-shrink-0"
            />
            <div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm leading-relaxed text-muted-foreground">
                "I went through 3 electrical engineers on Upwork, they were
                terrible. Finally decided to reach out to [American Embedded] on
                X (the everything app btw) and they got it done
                beautifully...!" (Key technologies: USB 2.0, USB-PD, 100BASE-T
                Ethernet)
              </blockquote>
              <p className="mt-4 text-sm">
                –{" "}
                <a
                  href="https://x.com/hotschmoe"
                  className="text-primary underline hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @hotschmoe
                </a>
                , B2C Hardware Startup
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Portfolio */}
        <section className="mb-12">
          <SectionHeading>Portfolio</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <hr className="border-border mb-12" />

        {/* Competencies */}
        <section>
          <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-2">
            Competencies
          </h2>

          {competencies.map((comp) => (
            <CompetencyBlock
              key={comp.title}
              title={comp.title}
              description={comp.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
