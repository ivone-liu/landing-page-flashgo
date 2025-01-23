"use client";
import FooterLinks from "@/components/footer/FooterLinks";
import FooterProducts from "@/components/footer/FooterProducts";
import LangLinks from "@/components/footer/LangLinks";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useParams } from "next/navigation";

const Footer = () => {
  const params = useParams();
  const lang = params.lang || "en";
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer className="w-full py-6 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
        <div className="flex gap-4">
          <Link href={`/${lang}/privacy`} className="text-sm text-gray-500 hover:text-gray-700">
            {lang === "zh" ? "隐私政策" : "Privacy Policy"}
          </Link>
          <FooterLinks />
          <FooterProducts />
          <LangLinks />
        </div>
        <p className="text-sm text-gray-500">
          © {currentYear} FlashGO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
