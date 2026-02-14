import { useForm, ValidationError } from "@formspree/react";
import Footer from "../components/Footer";
import GrayCircle from "../components/GrayCircle";
import GreenCircle from "../components/GreenCircle";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "motion/react";

function Contact() {
  const formSpreeID = import.meta.env.VITE_FORMSPREE_ID;
  const [submitData, setSubmitData] = useForm(formSpreeID);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleForSubmit(e) {
    e.preventDefault();
    await setSubmitData(e);
  }

  useEffect(() => {
    if (submitData.succeeded) {
      Swal.fire({
        title: "Pesan Anda berhasil dikirim!",
        icon: "success",
        draggable: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmitData({ succeeded: false, errors: [] });
    }
  }, [submitData.succeeded]);

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
    <>
      <div className="lg:px-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="title-contact flex items-center justify-between px-6 py-5"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-between"
          >
            <GrayCircle />
            <p className="text-lg font-semibold text-[#666666] md:text-xl dark:text-[#C0C0C0]">
              Hire Me
            </p>
          </motion.div>
          <motion.div variants={item}>
            <GreenCircle />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="intro-contacts flex flex-col px-6 md:mt-4"
        >
          <motion.h2
            variants={item}
            className="mb-4 text-3xl font-bold text-[#373737] md:text-4xl dark:text-white"
          >
            Frontend Request
          </motion.h2>
          <motion.p
            variants={item}
            className="mb-8 text-[16px] leading-7 tracking-tight text-[#666666] md:text-lg dark:text-[#C0C0C0]"
          >
            Have an idea and need a developer to bring your design to life?
            Reach out now
          </motion.p>
        </motion.div>

        <div className="form px-6">
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            action=""
            onSubmit={handleForSubmit}
            className="flex flex-col gap-3"
          >
            <motion.div variants={item} className="flex w-full gap-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-[50%] rounded-lg border border-[#2c2c2c]/10 bg-[#F7F7F7] p-3 text-sm font-medium text-[#515151] placeholder:text-sm placeholder:font-medium placeholder:text-[#A0A0A0] focus:border-[#2c2c2c]/50 focus:ring-0 focus:outline-0 md:p-4 dark:bg-[#2C2C2C] dark:text-[#fcfcfc]"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={submitData.errors}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="font-mediumplaceholder:font-medium w-[50%] rounded-lg border border-[#2c2c2c]/10 bg-[#F7F7F7] p-3 text-sm text-[#515151] placeholder:text-sm placeholder:text-[#A0A0A0] focus:border-[#2c2c2c]/50 focus:ring-0 focus:outline-0 dark:bg-[#2C2C2C] dark:text-[#fcfcfc]"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={submitData.errors}
              />
            </motion.div>
            <motion.textarea
              variants={item}
              name="message"
              id="message"
              placeholder="Message"
              className="h-36 rounded-lg border border-[#2c2c2c]/10 bg-[#F7F7F7] p-3 text-sm font-medium text-[#515151] placeholder:text-sm placeholder:font-medium placeholder:text-[#A0A0A0] focus:border-[#2c2c2c]/50 focus:ring-0 focus:outline-0 dark:bg-[#2C2C2C] dark:text-[#fcfcfc]"
              required
              value={formData.message}
              onChange={handleChange}
            ></motion.textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={submitData.errors}
            />

            <motion.button
              variants={item}
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-black py-3 text-sm font-bold text-white duration-500 hover:opacity-80 dark:bg-[#383838] dark:hover:bg-[#424242]"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
