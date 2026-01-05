import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Full Stack Developer",
    company: "DiracAI Private Limited",
    duration: "Jul 2024 – Present",
    type: "In-office",
    points: [
      "Developed scalable REST APIs using Django with modular backend logic and secure data handling",
      "Optimized PostgreSQL queries and database schemas for efficient data operations",
      "Implemented authentication, authorization, and backend error handling",
      "Built React.js components integrated with backend endpoints for interactive user experience",
      "Collaborated in a Linux-based development environment, improving deployment automation"
    ]
  },
  {
    title: "Frontend Developer Intern",
    company: "Ansmake Technologies LLP",
    duration: "Mar 2024 – May 2024",
    type: "Remote",
    points: [
      "Streamlined component rendering, improving UI performance by 30%",
      "Converted Figma designs into 10+ reusable React components"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-32 pb-24">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-red">EXP</span>ERIENCE
        </p>
        <LineGradient width="mx-auto w-2/5" />
      </motion.div>

      <div className="mt-16 flex flex-col gap-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-dark-grey rounded-lg p-6 border border-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="font-playfair font-semibold text-2xl text-yellow">
                  {exp.title}
                </h3>
                <p className="text-lg text-gray-300">{exp.company}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-red font-semibold">{exp.duration}</p>
                <p className="text-gray-400 text-sm">{exp.type}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="text-sm md:text-base">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
