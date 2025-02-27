"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";

const Hero = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      > */}
      <section
        className="w-screen relative -mt-[calc(var(--header-height,80px)+2.5rem)] -mx-[calc(50vw-50%)]"
        style={{
          backgroundImage: 'url("/images/cover.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          textAlign: 'left',
          zIndex: 10,
          marginBottom: '0',
        }}
      >
        <div className="container mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl pt-[calc(var(--header-height,80px)+4rem)] pl-0 md:pl-8 lg:pl-12">
            <h1 className="text-white">
              {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
            </h1>
            <p className="mt-6 max-w-xl text-2xl tracking-tight text-white">
              {/* {siteConfig.description} */}
              {locale.description}
            </p>
            <div className="mt-8 flex justify-start">
              <CTAButton locale={CTALocale} />
            </div>
          </div>
        </div>
      </section>
      {/* </motion.div> */}
    </>
  );
};

export default Hero;
