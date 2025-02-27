import Image from "next/image";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <div className="flex items-center">
      <Link
        href="https://apps.apple.com/cn/app/flashgo/id6740757226"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Image
          src="/images/appstore.svg"
          alt="Download on App Store"
          width={180}
          height={60}
          className="hover:opacity-90 transition-opacity"
        />
      </Link>
    </div>
  );
};

export default CTAButton;
