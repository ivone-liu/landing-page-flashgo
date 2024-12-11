import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Link
        href="https://www.memocard.net/flashgo-1.1.0-for-silicon.dmg"
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
        href="https://www.memocard.net/flashgo-1.1.0-for-intel.dmg"
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{ marginLeft: '10px' }}
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
    </div >
  );
};

export default CTAButton;
