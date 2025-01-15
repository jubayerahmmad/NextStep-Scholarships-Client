const Heading = ({ Heading, subHeading }) => {
  return (
    <div className="max-w-7xl mx-auto mb-6 lg:mb-4 space-y-1  border-l-4 border-teal-800 px-2 animate__animated animate__zoomIn">
      <h2 className="text-2xl lg:text-3xl font-bold">{Heading}</h2>
      <p className="text-sm lg:text-base">{subHeading}</p>
    </div>
  );
};

export default Heading;
