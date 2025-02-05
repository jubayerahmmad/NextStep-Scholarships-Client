import logo from "../assets/logo.png";
const Loader = () => {
  const sharedStyle = {
    content: "",
    width: "100%",
    height: "100%",
    display: "block",
    border: "5.6px solid teal",
    borderRadius: "50%",
    boxShadow: "0 -33.6px 0 -5.6px cyan",
    position: "absolute",
    animation: "spinner-rotate 1.25s infinite ease",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center gap-2 animate-bounce">
        <img className="w-12 h-12" src={logo} alt="" />
        <div className="text-left bg-gradient-to-br from-cyan-500 via-cyan-700 to-cyan-900 bg-clip-text text-transparent">
          <h1 className="text-base lg:text-xl font-bold">NextStep</h1>
          <p className="text-sm lg:text-lg font-bold">Scholarships</p>
        </div>
      </div>
      <div className="relative mt-16 w-[22.4px] h-[22.4px]">
        <div
          style={{
            ...sharedStyle,
            animation:
              "spinner-b4c8mmmd 0.5s backwards, spinner-rotate 1.25s 0.5s infinite ease",
          }}
        ></div>
        <div
          style={{
            ...sharedStyle,
            animationDelay: "0s, 1.25s",
          }}
        ></div>
        <style>
          {`
            @keyframes spinner-b4c8mmmd {
              from {
                box-shadow: 0 0 0 -5.6px teal;
              }
            }
  
            @keyframes spinner-rotate {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Loader;
