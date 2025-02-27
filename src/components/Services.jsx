
const Services = ({src, label, desc }) => {
  return (
    <div className="lg:col-span-4 col-span-12 bg-white flex justify-center gap-16 flex-col items-center w-full lg:w-[350px] rounded-[32px] border border-blue-200 p-16 shadow-lg hover:border-yellow-700">
      <div>
        <img src={src} alt="" />
      </div>
      <div className="text-center flex gap-8 flex-col">
        <h2 className="text-3xl font-semibold">{label}</h2>
        <p className="text-lg text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

export default Services
