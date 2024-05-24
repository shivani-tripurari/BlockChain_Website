import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center px-6 h-[3.5rem] bg-n-8/80 rounded-[1.7rem] text-base ${
        className || ""
      }`}
    >
      <img src={loading} className="w-5 h-5 mr-4" />
      New era of ForEx Trading ...
    </div>
  );
};

export default Generating;
