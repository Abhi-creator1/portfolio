import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    { title: 'Project 1', desc: 'Description 1', media: '/project1.gif', link: 'https://github.com/myproject1' },
    { title: 'Project 2', desc: 'Description 2', media: '/project2.gif', link: 'https://github.com/myproject2' },
    { title: 'Project 3', desc: 'Description 3', media: '/project3.gif', link: 'https://github.com/myproject3' },
    { title: 'Project 4', desc: 'Description 4', media: '/project4.gif', link: 'https://github.com/myproject4' }
  ];

  const expertiseList = [
    { title: 'ROS2', desc: 'Expert in tools like MoveIt, Nav2, building custom packages' },
    { title: 'Embedded Systems', desc: 'Experienced with microcontrollers, RTOS, and hardware interfacing' },
    { title: 'AI Integration', desc: 'Integrating AI/ML algorithms into robotics applications' },
    { title: 'Robotics', desc: 'Designing and implementing robotic systems with motion planning and perception' }
  ];

  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Abhishek Thakur</h1>
          <div className="space-x-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-blue-400">Home</button>
            <button onClick={() => scrollToSection('expertise')} className="hover:text-blue-400">Expertise</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-400">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-900 px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/my-photo.jpg"
            alt="Profile"
            className="rounded-2xl shadow-lg w-80 mx-auto border-4 border-blue-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">Abhishek Thakur</h2>
            <p className="text-xl italic">“Building robots, one line of code at a time.”</p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-blue-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {expertiseList.map((exp, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 border border-gray-700 text-blue-300 px-6 py-6 rounded-lg shadow hover:shadow-lg transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-300 text-sm">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-blue-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.a
                key={i}
                href={proj.link}
                target="_blank"
                className="p-6 bg-gray-900 shadow-md rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-700 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                variants={fadeInUp}
              >
                <div className="relative w-full h-48 mb-4">
                  <img
                    src={proj.media}
                    alt={proj.title}
                    className="w-full h-full object-cover rounded-xl transition-opacity duration-500 hover:opacity-0 absolute top-0 left-0"
                  />
                  <video
                    src={proj.media}
                    className="w-full h-full object-cover rounded-xl absolute top-0 left-0 opacity-0 hover:opacity-100"
                    autoPlay
                    loop
                    muted
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{proj.title}</h3>
                <p className="text-gray-300">{proj.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-blue-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Experience
          </motion.h2>
          <div className="space-y-6">
            {['Robotics Intern at XYZ', 'Research Assistant at ABC'].map((exp, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition border border-gray-700"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                variants={fadeInUp}
              >
                {exp}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-3xl font-bold mb-6 text-blue-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="mb-8 text-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            abhishek@example.com | GitHub | LinkedIn
          </motion.p>
          <motion.a
            href="/cv.pdf"
            download
            className="bg-blue-400 text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-blue-300 transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            Download CV
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© 2025 Abhishek Thakur</p>
      </footer>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-400 hover:bg-blue-300 text-gray-900 p-3 rounded-full shadow-lg transition"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
}
