const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "🚀", // Replace with a relevant React Icon or image
      title: "Fast & Reliable",
      description:
        "We deliver high-quality services within the shortest possible time.",
    },
    {
      id: 2,
      icon: "💼",
      title: "Expert Professionals",
      description:
        "Our team consists of experienced and certified professionals.",
    },
    {
      id: 3,
      icon: "💡",
      title: "Innovative Solutions",
      description:
        "We use the latest tools and technologies to stay ahead of the competition.",
    },
  ];

  return (
    <div className=" py-10 ">
      <div className=" text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
      Why Choose Us?
        </h2>
        <p className="text-blue-600 font-semibold mb-8 tracking-widest">
        Discover why our clients love working with us.
        </p>
        
       
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black">
                {feature.title}
              </h3>
              <p className="text-black mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
