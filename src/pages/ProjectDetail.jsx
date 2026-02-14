import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import { projectList } from "../../data/projects";
import { IoMdArrowBack } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { motion } from "motion/react";

const ProjectDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const detail = projectList.find(
    (project) => project.id === Number(params.id),
  );

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="">
      <ScrollRestoration />
      <motion.header
        variants={container}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <button onClick={() => navigate(-1)}>
          <IoMdArrowBack className="mt-2 ml-2 size-6 cursor-pointer dark:text-white" />
        </button>
        <motion.img
          variants={item}
          src={detail?.image}
          alt={detail?.name}
          className="mt-2 mb-4 rounded-md object-cover"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2 p-2 lg:p-4 dark:text-white"
        >
          <motion.h1 variants={item} className="text-lg font-bold xl:text-xl">
            {detail?.name}
          </motion.h1>
          <motion.p variants={item} className="text-sm xl:text-base">
            {detail?.about}
          </motion.p>
        </motion.div>
      </motion.header>

      <main className="space-y-4 p-2 lg:p-4 lg:pt-0 dark:text-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-2"
        >
          <motion.h2 variants={item} className="text-lg font-bold xl:text-xl">
            My Role
          </motion.h2>
          <motion.p variants={item} className="text-sm xl:text-base">
            {detail?.myRole}
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-2"
        >
          <motion.h2 variants={item} className="text-lg font-bold xl:text-xl">
            Key Features
          </motion.h2>
          <motion.ul variants={container} className="space-y-1.5">
            {detail?.features.map((feature, index) => {
              return (
                <motion.li
                  variants={item}
                  className="flex items-start gap-2 text-sm xl:text-base"
                  key={index + 1}
                >
                  <span className="">
                    <MdCheckBoxOutlineBlank className="mt-0.5 size-4 text-gray-400 xl:size-5 dark:text-white" />
                  </span>
                  {feature}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6"
        >
          <motion.h2
            variants={item}
            className="mb-4 text-lg font-bold xl:text-xl"
          >
            Technologies Used
          </motion.h2>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {detail?.tech.map((skill, index) => {
              return (
                <motion.li
                  variants={item}
                  className="cursor-pointer rounded-lg bg-white px-4 py-2 text-center text-sm font-medium shadow-md transition-all duration-300 hover:scale-110 dark:bg-[#373737] dark:text-white"
                  key={index + 1}
                >
                  {skill}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 flex gap-2.5"
        >
          <motion.button variants={item} className="buttons-project">
            <a href={detail?.repo} target="_blank">
              Project Repository
            </a>
          </motion.button>
          <motion.button variants={item} className="buttons-project">
            <a href={detail?.href} target="_blank">
              Live Preview
            </a>
          </motion.button>
        </motion.div>
      </main>
    </section>
  );
};

export default ProjectDetail;
