import { useState } from "react";
import { Code2, Mail, Github, ExternalLink, Twitter } from "lucide-react";
import profileImg from "./assets/fd1a5f1f-a798-4451-a306-82e20f879cf5.jpeg"

 function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visitorEmail, setVisitorEmail] = useState("");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration",
      tech: ["React", "Express", "Mongodb"],
      link: "https://shopping-cart-ruddy-nine.vercel.app",
    },
    {
      id: 2,
      title: "BlogSite",
      description: "Basic BlogSite where users can make post",
      tech: ["Javascript", "Mysql", "PHP"],
      link: "https://blog-me.infinityfree.me",
    },

  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "PHP",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "Mysql"
  ];

   const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (visitorEmail) {
      // Open user's email client with pre-filled info
      window.location.href = `mailto:ezeugwuanthony456@gmail.com.?subject=Let's Connect&body=Hi, I'm reaching out from your portfolio. You can reach me at ${visitorEmail}`;
      setVisitorEmail("");
    }
  };

  function goToProject(link){
    window.open(link, "_blank");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-8">
        <div className="max-w-4xl w-full">
          <div className="mb-6">
          </div>

          <div className="flex justify-center items-center w-60 h-60 rounded-full mb-4">
          <img
            src={profileImg}
            alt="Description"
            className="w-full h-full  object-cover rounded-full shadow-lg"
          />
        </div>

          <p className="text-2xl md:text-3xl text-gray-400 mb-8">
            Hey I'm Soft a FullStack Developer 
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12">
            Bringing your Website ideas to life
          </p>
          <div className="flex gap-6">
            <a
              href="#projects"
              className=" px-5 md:px-8 py-2 h-10  bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className=" px-5 md:px-8 py-2 h-10   rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-18 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-25 font-mono -rotate-10">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              My government name is Ezeugwu Anthony I'm a passionate web developer 
              who loves creating logic and making things work
               I build applications that are both
              beautiful and functional.
            </p>
            <p>
              My approach combines clean, maintainable code with thoughtful
              design decisions. I believe in continuous learning and staying
              up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 md:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-mono">
                My projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => goToProject(project.link)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-mono">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={24}
                    className={`transition-transform ${hoveredProject === project.id ? "translate-x-1 -translate-y-1" : ""}`}
                  />
                </div>
                <p
                  className={`mb-6 ${hoveredProject === project.id ? "text-gray-800" : "text-gray-400"}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm font-mono border ${
                        hoveredProject === project.id
                          ? "border-black"
                          : "border-white"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-mono">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border-2 border-black p-4 text-center font-mono hover:bg-black hover:text-white transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-mono">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>

          {/* Email Input Form */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-2">
              <input
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-black border-2 border-white text-white placeholder-gray-500 font-mono focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-semibold font-mono hover:bg-gray-200 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </form>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/MaddDugz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://x.com/king_Tony27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t-2 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-sm">
            © 2025 SoftDev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio