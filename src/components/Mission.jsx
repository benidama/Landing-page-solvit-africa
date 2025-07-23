import bg2 from "../images/workspace.jpg";

const Mission = () => (
  <section className="relative w-screen h-[300px] my-20">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg2})` }}
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-black/30" />

    <div className="relative z-4 flex flex-col justify-center items-center w-screen py-16 px-4 text-center text-white">
      <h1 className="text-headline md:text-5xl font-bold">
        <span className="text-teal-500">Our</span> mission
      </h1>
      <p className="text-gray-100 max-w-3xl mt-4 md:text-xsm sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit
        odio felis aliquet montes turpis consequat, est sociosqu vitae id nec
        rutrum. Ornare dictumst et eget fames cursus vel penatibus quis posuere,
        ultrices fermentum libero pretium convallis pharetra
      </p>
      <div className="flex flex-row pt-5 pb-6 md:mt-6 md:pt-0 md:pb-0">
        <hr className="border-[1px] border-teal-400 mx-4 w-14" />
        <hr className="border-[1px] border-white mx-4 w-14" />
      </div>
    </div>
  </section>
);
export default Mission;
