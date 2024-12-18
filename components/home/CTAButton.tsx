import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link
        href="https://flashgo.s3.bitiful.net/flashgo-1.1.1-for-silicon.zip"
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
        href="https://flashgo.s3.bitiful.net/flashgo-1.1.1-for-intel.zip"
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
