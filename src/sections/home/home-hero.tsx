// components
import { ComputersCanvas } from 'src/components/canvas';

// ---------------------------------------------------------------------------------------------

const HomeHero: React.FC = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-16">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <p className="mt-2 text-[40px] font-black text-[#915EFF] xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
            Andhika <span className="font-medium text-white">Rahmatullah</span>
          </p>
          <p className="mt-2 text-[16px] font-medium text-white-100 xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">Web Application Developer.</p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default HomeHero;
