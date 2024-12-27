/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center"><a href="https://flashgo.s3.bitiful.net/flashgo-1.1.3-for-silicon.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fGviRhsEbBKEagHJMBQlpgxa%2F20241227%2F%2Fs3%2Faws4_request&X-Amz-Date=20241227T083215Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&no-wait=on&x-id=GetObject&X-Amz-Signature=03973dae2bfc94b4df571d070a0a8ba8e4a04c9f965957d09675503758e1a8fb" target="_blank">{locale.title}</a></h2>
        <h2 className="text-center"><a href="https://flashgo.s3.bitiful.net/flashgo-1.1.3-for-intel.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=fGviRhsEbBKEagHJMBQlpgxa%2F20241227%2F%2Fs3%2Faws4_request&X-Amz-Date=20241227T083245Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&no-wait=on&x-id=GetObject&X-Amz-Signature=b1c96def023f7bedac540c84b0ea31fe880808bc338a31f4730fca35ee99123b" target="_blank">{locale.title1}</a></h2>
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
        <span className="mr-4">{CTALocale.dangqianbanben}1.1.3</span>
        <span>{CTALocale.gengxinriqi}2024-12-27</span>
      </p>
    </section>
  );
};

export default CTA;
