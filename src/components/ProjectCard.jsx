const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="bg-dark-300 rounded-xl overflow-hidden hover:-translate-y-1 transition duration-300 cursor-pointer shadow-lg">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-contain bg-dark-400"
      />

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        <p className="text-sm text-gray-400 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech?.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-dark-400 rounded-full text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm text-white transition duration-300"
          >
            Demo
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg text-sm transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
