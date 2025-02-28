import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={{ ...dict.Hero, langCode: langName }} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
