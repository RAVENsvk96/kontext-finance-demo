import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Finančný plán",
    text: "Prehľad príjmov, rezerv, cieľov a priorít v jednom zrozumiteľnom systéme.",
  },
  {
    number: "02",
    title: "Ochrana príjmu",
    text: "Analýza rizík a nastavenie ochrany podľa reálnej životnej situácie.",
  },
  {
    number: "03",
    title: "Tvorba rezervy",
    text: "Praktický plán pre krátkodobú istotu aj dlhodobé finančné ciele.",
  },
  {
    number: "04",
    title: "Financovanie bývania",
    text: "Porovnanie možností a príprava rozhodnutia v širšom finančnom kontexte.",
  },
];

const process = [
  ["01", "Úvodný rozhovor", "Pomenujeme situáciu, priority a otázky bez záväzkov."],
  ["02", "Analýza", "Údaje prevedieme na jasný obraz možností a rizík."],
  ["03", "Návrh", "Vznikne zrozumiteľný plán s vysvetlenými súvislosťami."],
  ["04", "Ďalší krok", "Rozhodnutie zostáva na klientovi, bez nátlaku a skratiek."],
];

const principles = [
  ["01", "Najprv kontext", "Jedno riešenie nedáva zmysel bez pohľadu na celý finančný obraz."],
  ["02", "Zrozumiteľný jazyk", "Komplexné témy vysvetlené bez zbytočného odborného slovníka."],
  ["03", "Rozhodnutie bez tlaku", "Cieľom je orientácia a istota, nie rýchly podpis."],
];

export default function Home() {
  return (
    <>
      <div className="demo-bar">
        Ukážkový projekt — nejde o skutočnú finančnú službu
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="KONTEXT Finance — domov">
          <span>KONTEXT</span>
          <small>FINANCE / 01</small>
        </a>

        <nav className="desktop-nav" aria-label="Hlavná navigácia">
          <a href="#sluzby">Služby</a>
          <a href="#principy">Prístup</a>
          <a href="#proces">Proces</a>
        </nav>

        <a className="header-cta" href="#kontakt">
          Dohodnúť konzultáciu <ArrowUpRight aria-hidden="true" size={15} />
        </a>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobilná navigácia">
            <a href="#sluzby">Služby</a>
            <a href="#principy">Prístup</a>
            <a href="#proces">Proces</a>
            <a href="#kontakt">Dohodnúť konzultáciu</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero editorial-hero section-shell">
          <Reveal className="editorial-hero-top">
            <span>Osobné finančné poradenstvo</span>

            <div className="editorial-hero-location">
              <span>Nitra</span>
              <span>Online</span>
            </div>
          </Reveal>

          <div className="editorial-headline-grid">
            <Reveal className="editorial-headline" delay={0.04}>
              <h1>
                Finančné rozhodnutia,
                <br />
                ktoré majú
                <span> jasný smer.</span>
              </h1>
            </Reveal>

            <Reveal className="editorial-intro" delay={0.1}>
              <span className="editorial-intro-line" />

              <p>
                Financie vnímam ako jeden celok. Najskôr pochopíme vašu
                situáciu, potom vytvoríme plán, ktorému budete rozumieť.
              </p>

              <a className="editorial-cta" href="#kontakt">
                Dohodnúť konzultáciu
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </Reveal>
          </div>

          <Reveal className="editorial-image" delay={0.14}>
            <Image
              src="/images/advisor-hero.png"
              alt="Portrét finančnej konzultantky"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 90vw"
            />

            <div className="editorial-image-label">
              <span>Osobný prístup</span>
              <span>Financie v súvislostiach</span>
            </div>
          </Reveal>

          <div className="editorial-footer">
            <Reveal className="editorial-footer-copy" delay={0.16}>
              <p>
                Nie viac produktov.
                <br />
                Viac istoty v rozhodnutiach.
              </p>
            </Reveal>

            <Reveal className="editorial-footer-note" delay={0.19}>
              <span>01</span>
              <p>
                Každé odporúčanie začína pochopením vášho života,
                priorít a cieľov.
              </p>
            </Reveal>

            <Reveal className="editorial-scroll" delay={0.22}>
              <a href="#sluzby">
                Objaviť prístup
                <ArrowDownRight aria-hidden="true" size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="services section-shell" id="sluzby">
          <Reveal className="section-intro">
            <p className="eyebrow">01 / Oblasti</p>
            <h2>Financie ako jeden celok.</h2>
            <p>
              Jednotlivé rozhodnutia posudzujeme v súvislostiach, nie ako oddelené
              produkty.
            </p>
          </Reveal>

          <div className="service-list">
            {services.map((service, index) => (
              <Reveal className="service-row" key={service.number} delay={index * 0.04}>
                <span className="row-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowDownRight aria-hidden="true" size={22} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="principles" id="principy">
          <div className="section-shell principles-grid">
            <Reveal className="principles-title">
              <p className="eyebrow eyebrow-light">02 / Osobný prístup</p>
              <h2>Dôvera začína rozhovorom.</h2>
            </Reveal>

            <div className="principle-list">
              {principles.map(([number, title, text], index) => (
                <Reveal className="principle-row" key={number} delay={index * 0.05}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-shell" id="proces">
          <Reveal className="process-heading">
            <p className="eyebrow">03 / Proces</p>
            <h2>Štyri kroky k lepšiemu prehľadu.</h2>
          </Reveal>

          <div className="process-line">
            {process.map(([number, title, text], index) => (
              <Reveal className="process-step" key={number} delay={index * 0.05}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="statement section-shell">
          <Reveal>
            <p className="eyebrow">04 / Výsledok</p>
            <blockquote>
              Dobrý plán nepridáva ďalšie otázky. Pomáha rozlíšiť, čo je dôležité
              <em> teraz</em> a čo môže počkať.
            </blockquote>
          </Reveal>
          <div className="statement-note">
            <span>Jasnosť</span>
            <span>Súvislosti</span>
            <span>Kontrola</span>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="section-shell contact-grid">
            <Reveal>
              <p className="eyebrow eyebrow-light">Ukážkový koncept</p>
              <h2>Priestor pre pokojné rozhodnutie.</h2>
            </Reveal>
            <Reveal className="contact-copy" delay={0.08}>
              <p>
                KONTEXT Finance je fiktívny projekt vytvorený ako ukážka spojenia
                Swiss presnosti a prémiovej osobnej značky.
              </p>
              <a
                className="contact-link"
                href="https://www.samuelzeliska.sk"
                target="_blank"
                rel="noreferrer"
              >
                Autor projektu <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="brand footer-brand">
          <span>KONTEXT</span>
          <small>FINANCE / 01</small>
        </div>
        <p>Ukážkový projekt. Obsah nie je finančným poradenstvom.</p>
        <a href="#top">Hore ↑</a>
      </footer>
    </>
  );
}
