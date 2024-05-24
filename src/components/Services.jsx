import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { GradientLight } from "./design/Benefits.jsx";
import { PhotoChatMessage } from "./design/Services.jsx";

const Services = () => {
  return (
    <>
      <Section id="services">
        <div className="container">
          <Heading
            title="Forex made easy"
            text="Experience the power of advanced trading tools and real-time
              market analysis, tailored for both beginners and experts."
          />
          <div className="relative">
            <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg: p-20 xl: h-[46rem]">
              <div className="absolute top-0 left-0 h-full w-full md:w-3/5 xl:w-auto pointer-events-none">
                <img
                  className="w-full h-full object-cover md: object-right"
                  width={800}
                  height={730}
                  src={service1}
                />
              </div>
              <GradientLight />

              <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4 mb-4">Secret of trading</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Experience the power of advanced trading tools and real-time
                  market analysis
                </p>
                <ul className="body-2 ">
                  {brainwaveServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 px-2 border-t border-n-7"
                    >
                      <img height={24} width={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              {/*card-1, row-2*/}
              <div className="relative min-h-[39rem] overflow-hidden border border-n-1/10 rounded-3xl">
                <div className="absolute inset-0">
                  <img
                    src={service2}
                    className="object-cover h-full w-full"
                    width={630}
                    height={750}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">Currency exchange </h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Automatically enhance your performance by using our
                    application. Try it now!
                  </p>
                </div>
                <PhotoChatMessage text=" Hey SmalBlu, convert INR to USD" />
              </div>

              {/*card-2 */}

              <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Historical trends </h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Graphical representation of various currency rates and
                    trends over time
                  </p>
                  <ul className="flex items-center justify-between">
                    {brainwaveServicesIcons.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-center ${
                          index == 2
                            ? "w-[3rem] h-[3rem] p-0.3 border border-bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]"
                            : "flex w-10 h-10 bg-n-6 rounded-2xl md:w-15 md:h-15"
                        }`}
                      >
                        <div>
                          <img src={item} width={24} height={24} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[20rem] bg-n-8 rounded-2xl overflow-hidden md:h-[25rem]">
                  <img
                    src={service3}
                    className="w-full h-full object-cover rounded-2xl"
                    width={560}
                    height={480}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
