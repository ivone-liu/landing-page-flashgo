"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { AnimatePresence, motion } from "framer-motion";

const Hero = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  // Determine which background image to use based on the locale
  const isChineseLocale = locale.langCode === 'zh';
  const backgroundImage = isChineseLocale ? 'url("/images/cn.png")' : locale.langCode === 'en' ? 'url("/images/en.png")' : 'url("/images/bg.png")';

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
        className="w-screen relative -mt-[calc(var(--header-height,80px)+2.5rem)] -mx-[calc(50vw-50%)] overflow-hidden"
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          textAlign: 'left',
          marginBottom: '0'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={locale.langCode + "background"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage,
              backgroundSize: '60%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
          />
        </AnimatePresence>
        <div className="container mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 relative z-1">
          <div className="max-w-2xl pt-[calc(var(--header-height,80px)+4rem)] pl-0 md:pl-8 lg:pl-12">
            <div style={{ position: 'fixed', bottom: '10%', right: '40px', zIndex: 10 }}>
              <a href="https://www.producthunt.com/posts/flashgo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-flashgo" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=942950&theme=light&t=1742287907803" alt="FlashGO - Capture ideas, tasks & schedules in one tap | Product Hunt" style={{ width: '187px', height: '40px' }} width="187" height="40" />
              </a>
            </div>
            <AnimatePresence mode="wait">
              <motion.h1
                key={locale.langCode + "title"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={locale.langCode + "description"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-xl text-2xl tracking-tight text-white"
              >
                {locale.description}
              </motion.p>
            </AnimatePresence>
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
