import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function PrivacyPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{dict.Privacy.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        {dict.Privacy.content.map((paragraph: string, index: number) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
} 