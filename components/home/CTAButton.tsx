import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link
        href="https://flashgo.s3.bitiful.net/flashgo-1.1.3-for-silicon.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fGviRhsEbBKEagHJMBQlpgxa%2F20241227%2F%2Fs3%2Faws4_request&X-Amz-Date=20241227T083215Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&no-wait=on&x-id=GetObject&X-Amz-Signature=03973dae2bfc94b4df571d070a0a8ba8e4a04c9f965957d09675503758e1a8fb"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Button
          variant="default"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
          aria-label="Get FlashGO"
        >
          <RocketIcon />
          {locale.title}
        </Button>
      </Link>
      <Link
        href="https://flashgo.s3.bitiful.net/flashgo-1.1.3-for-intel.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fGviRhsEbBKEagHJMBQlpgxa%2F20241227%2F%2Fs3%2Faws4_request&X-Amz-Date=20241227T083245Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&no-wait=on&x-id=GetObject&X-Amz-Signature=b1c96def023f7bedac540c84b0ea31fe880808bc338a31f4730fca35ee99123b"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Button
          variant="default"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
          aria-label="Get FlashGO"
        >
          <RocketIcon />
          {locale.title2}
        </Button>
      </Link>
    </div>
  );
};

export default CTAButton;
