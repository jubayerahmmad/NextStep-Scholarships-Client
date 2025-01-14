const Heading = ({ Heading, subHeading }) => {
  return (
    <div className="max-w-7xl mx-auto mb-6 lg:mb-4 space-y-1  border-l-4 border-teal-800 px-2">
      <h2 className="text-3xl font-bold">{Heading}</h2>
      <p className="text-lg">{subHeading}</p>
    </div>
  );
};

export default Heading;
