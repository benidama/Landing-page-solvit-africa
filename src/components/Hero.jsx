import Workspace from "../images/workspace.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[515px] w-screen bg-cover bg-center bg-no-repeat px-0 ml-0"
      style={{ backgroundImage: `url(${Workspace})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-white text-lg mb-2">The Best WorkSpace in Kigali</p>
        <h1 className="text-base md:text-3xl font-bold text-white">
          <span className="text-palette-400">Professional</span>, Creative,{" "}
          <br />
          Flexible, Scalable <span className="text-palette-400">Workspace</span>
        </h1>
        <p className="text-gray-100 max-w-2xl mt-4">
          Discover your ideal workspace with us. Work smart, not hard in our
          fully‑equipped office spaces. Elevate your business with flexible
          solutions tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-1 bg-palette-400 text-white font-medium rounded hover:bg-teal-600 transition relative z-20 pointer-events-auto">
          Explore
        </button>
      </div>
    </section>
  );
};
export default Hero;
