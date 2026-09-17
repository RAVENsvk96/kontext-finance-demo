import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "KONTEXT Finance | Finančné rozhodnutia v súvislostiach",
  description:
    "Ukážkový koncept osobnej značky finančnej konzultantky, ktorý spája presnú informačnú štruktúru s ľudskou a dôveryhodnou komunikáciou.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sk" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
