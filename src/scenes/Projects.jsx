import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import anyquantImg from "../assets/AnyQuant_img.png";
import healthcareImg from "../assets/Healthcare_img.png";
import ecommerceImg from "../assets/Ecommerce_img.png";
import project1 from "../assets/netflix.png";
import project2 from "../assets/Gym-website.png";
import project3 from "../assets/Dashboard.png";
import project4 from "../assets/creative-webpage.png";
import project5 from "../assets/linkdin.png";
import project6 from "../assets/slack.png";
import project7 from "../assets/food2.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, linkurl, linkout, projectimg, isPrivate, isRestricted }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center  text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div
      variants={projectVariant}
      className="relative  shadow-lg cursor-pointer"
    >
      <div className={overlayStyles}>
        <p className="text-xl sm:text-2xl font-playfair px-2">{title}</p>
        <div className="flex m-2 gap-2 w-full px-4 sm:px-8">
          {isPrivate ? (
            <button
              className="bg-gray-500 text-white rounded-sm font-semibold w-[50%] py-2 sm:py-4 text-xs sm:text-base cursor-not-allowed"
              disabled
            >
              Private Code
            </button>
          ) : (
            <button
              className="bg-gradient-rainblue text-deep-blue rounded-sm font-semibold w-[50%] py-2 sm:py-4 text-xs sm:text-base
              hover:bg-blue hover:text-white transition duration-500"
            >
              <a href={linkurl}>View code</a>
            </button>
          )}
          {isRestricted ? (
            <button
              className="bg-gray-600 text-gray-300 w-[50%] py-2 sm:py-4 text-xs sm:text-base flex items-center justify-center font-playfair cursor-not-allowed"
              disabled
            >
              Restricted
            </button>
          ) : (
            <button className="bg-deep-blue text-yellow hover:text-red transition duration-500 w-[50%] py-2 sm:py-4 text-xs sm:text-base flex items-center justify-center font-playfair">
              <a href={linkout} target="_blank" rel="noopener noreferrer">View Live</a>
            </button>
          )}
        </div>
      </div>
      {projectimg ? (
        <img
          src={projectimg}
          alt={projectTitle}
          className="h-[250px] sm:h-[280px] w-full object-cover"
        />
      ) : (
        <div
          className="bg-gray-700 flex items-center justify-center text-gray-400 font-playfair h-[250px] sm:h-[280px] w-full"
        >
          <span className="text-sm sm:text-base px-4 text-center">{title}</span>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] h-[250px] sm:h-[280px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="AnyQuant Trading App"
            projectimg={anyquantImg}
            isPrivate={true}
            linkout="https://www.anyquant.co.uk/"
          />
          <Project
            title="Sushrusa E-Clinic"
            projectimg={healthcareImg}
            isPrivate={true}
            linkout="https://sushrusaeclinic.com/"
          />
          <Project
            title="Abriella Paintings"
            projectimg={ecommerceImg}
            isPrivate={true}
            linkout="https://abriellapaintings.diracai.com/"
          />
          <Project
            title="GovTechDSpace Court System"
            isPrivate={true}
            isRestricted={true}
          />
          <Project
            title="Food-Ordering App"
            projectimg={project7}
            linkurl="https://github.com/ss-sahoo/food-ordering-app"
            linkout="https://food-order-app-c4239.web.app/"
          />
          <Project
            title="Netflix-Clone"
            projectimg={project1}
            linkurl="https://github.com/ss-sahoo/Netflix-clone"
            linkout="https://netflix-build-cc39e.web.app"
          />
          <Project
            title="Slack-Clone"
            projectimg={project6}
            linkurl="https://github.com/ss-sahoo/slack-clone"
          />

          <Project
            title="Gym-website"
            projectimg={project2}
            linkurl="https://github.com/ss-sahoo/fitness-gym-react-template"
            linkout="https://ss-sahoo.github.io/fitness-gym-react-template/"
          />
          <Project
            title="Linkdin-Clone"
            projectimg={project5}
            linkurl="https://github.com/ss-sahoo/Linkedin-clone-page"
            linkout="https://linkedin-clone-ec13c.web.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Dashboard"
            projectimg={project3}
            linkurl="https://github.com/ss-sahoo/Board"
            linkout="https://deluxe-chimera-60f69c.netlify.app/"
          />
          {/* <Project
            title="creative-webpage"
            projectimg={project4}
            linkurl="https://github.com/ss-sahoo/Creative-web"
            linkout="https://ss-sahoo.github.io/Creative-web/"
          /> */}

        

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] h-[250px] sm:h-[280px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
