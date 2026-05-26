const CarRent = () => {
  return (
    <div id="car-rent" className="py-22">
      <section>
        <div className="text-center px-6">
          {/* SMALL LABEL */}
          <p className="text-xl uppercase tracking-[4px] text-slate-500 font-medium mb-4">
            Car Rentals
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Travel In Comfort
            <span className="block text-blue-600 mt-2">With Premium Cars</span>
          </h1>

          {/* LINE */}
          <div className="w-20 h-[2px] bg-slate-900 rounded-full mx-auto mt-6"></div>

          {/* DESCRIPTION */}
          <p className="max-w-2xl mx-auto mt-6 text-slate-500 text-sm md:text-base leading-relaxed">
            Choose from luxury SUVs, premium sedans, and comfortable family
            vehicles designed for smooth and unforgettable journeys.
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="innova.jpg" alt="Innova" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">Innova</h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="ertiga.jpg" alt="Ertiga" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">Ertiga</h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="swift.webp" alt="swift" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">Swift</h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="xuv.webp" alt="xuv" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">XUV 700</h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="brezza.jpg" alt="brezza" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">Brezza</h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="elevate.jpg" alt="Elevate" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">Elevate</h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="city.webp" alt="City" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">City</h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img src="slavia.avif" alt="Slavia" className="w-100 h-40 mb-4" />
            <h4 className="text-3xl font-semibold text-slate-800">Slavia</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarRent;
