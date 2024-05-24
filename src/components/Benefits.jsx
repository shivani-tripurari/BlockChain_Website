import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow.jsx";
import { GradientLight } from "./design/Benefits.jsx";

const Benefits = () => {
  return (
    <>
      <Section className=" -mt-[6.69rem]" id="features">
        <div className="container relative z-2">
          <Heading
            className=""
            title="Designed to cater both novice traders and seasoned professionals."
          />
          <div className="flex flex-wrap gap-10 mb-10">
            {benefits.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] shadow-md  "
                key={item.id}
              >
                <div className="relative flex flex-col z-2 min-h-[22rem] p-[2.4rem] pointer-events-none bg-n-9/10 backdrop-blur border border-n-1/10 rounded-2xl">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="p-[0.7rem] body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img src={item.iconUrl} width={48} height={48} />
                    <p className="p-2 ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1">
                      Know more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                {/*for displaying img while hovering*/}

                <div
                  className="absolute bg-n-8 inset-0.5"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Benefits;
