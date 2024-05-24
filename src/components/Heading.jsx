const Heading = ({ className, title, text }) => {
  return (
    <div
      className={`${className} md:max-w-sm lg:max-w-2xl max-w-[50rem] mx-11 mb-12 lg:mb-20`}
    >
      {title && <h3 className="h3">{title}</h3>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
