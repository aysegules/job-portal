const NotFound = () => {
  return (
    <div className="min-h-screen flex items-start justify-center p-6 bg-linear-to-r from-slate-100 to-slate-200">
      <div className="w-full max-w-200 bg-white rounded-2xl text-center shadow shadow-[#0F172A1F] py-12 px-8">
        <p className="font-extrabold text-[#4f46e5] text-xl m-0 leading-none">
          404
        </p>
        <h1 className="my-6 mx-0 text-xl text-[#111827] font-bold">
          Page not found
        </h1>
        <p className="mt-0 mx-0 mb-7 text-[#6b7280] text-lg leading-1.6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="/"
            className="inline-block decoration-0 bg-indigo-600 text-white py-3 px-6 font-semibold rounded shadow shadow-indigo-600/25"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
