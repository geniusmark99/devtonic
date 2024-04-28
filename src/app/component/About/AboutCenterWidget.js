import Image from "next/image";

export default function AboutCenterWidget() {
  return (
    <>
      <div id="about"></div>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="mt-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            {" "}
            About{" "}
          </h1>
          <p className="text-lg mt-4 text-slate-600">
            {" "}
            We are a small passionate team.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
          <h2 className="font-bold text-3xl text-gray-300 text-center">
            Empowering the world with our company.
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 text-center">
            We're a multi-cultural team from around the world! We come from
            diverse backgrounds, bringing different personalities, experiences
            and skills to the job. This is what makes our team so special.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
          <div className="group">
            <div className="w-full aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&fit=crop&w=280"
                alt="Janette Lynch"
                width={400}
                height={400}
                className="w-full rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg text-gray-400">Elvis</h2>
              <h3 className="text-sm text-slate-500"> Senior Director </h3>
            </div>
          </div>
          <div className="group">
            <div className="w-full aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?&fit=crop&w=280"
                alt="Marcell Ziemann"
                width={400}
                height={400}
                className="w-full rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg text-gray-400">Marcell Ziemann</h2>
              <h3 className="text-sm text-slate-500"> Principal Strategist </h3>
            </div>
          </div>
          <div className="group">
            <div className="w-full aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&fit=crop&w=280"
                alt="Robert Palmer"
                width={400}
                height={400}
                className="w-full rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg text-gray-400">Robert Palmer</h2>
              <h3 className="text-sm text-slate-500"> Marketing Engineer </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
