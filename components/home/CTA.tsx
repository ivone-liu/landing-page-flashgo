/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center"><a href="https://flashgo.s3.bitiful.net/flashgo-1.1.4-for-silicon.zip" target="_blank">{locale.title}</a></h2>
        <h2 className="text-center"><a href="https://flashgo.s3.bitiful.net/flashgo-1.1.4-for-intel.zip" target="_blank">{locale.title1}</a></h2>
        <p className="text-large text-default-500">
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description1}
          </RoughNotation>{" "}
          {locale.description2}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description3}
          </RoughNotation>{" "}
          {locale.description4}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description5}
          </RoughNotation>
          {locale.description6}
        </p>
      </div>
      <CTAButton locale={CTALocale} />
      <p className="text-small text-default-500 mt-4">
        <span className="mr-4">{CTALocale.dangqianbanben}1.1.4</span>
        <span>{CTALocale.gengxinriqi}2025-01-04</span>
      </p>
    </section>
  );
};

export default CTA;
