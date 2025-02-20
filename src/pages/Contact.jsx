import { useForm, ValidationError } from "@formspree/react";
import Footer from "../components/Footer";
import GrayCircle from "../components/GrayCircle";
import GreenCircle from "../components/GreenCircle";
import { useEffect, useState } from "react";

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
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [submitData.succeeded]);

  return (
    <>
      <div className="title-contact flex items-center justify-between px-6 py-5">
        <div className="flex items-center justify-between">
          <GrayCircle />
          <p className="text-lg font-semibold text-[#666666]">Hire Me</p>
        </div>
        <GreenCircle />
      </div>

      <div className="intro-contacts mt-4 flex flex-col px-6">
        <h2 className="mb-4 text-3xl font-bold text-[#373737]">
          Frontend Request
        </h2>
        <p className="mb-8 text-justify text-[16px] leading-7 tracking-tight text-[#666666]">
          Have an idea and need a developer to bring your design to life? Reach
          out now
        </p>
      </div>

      <div className="form px-6">
        <form
          action=""
          onSubmit={handleForSubmit}
          className="flex flex-col gap-3"
        >
          <div className="flex w-full gap-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-[50%] rounded-lg border border-[#2c2c2c]/10 bg-[#F7F7F7] p-3 text-sm font-medium text-[#515151] placeholder:text-sm placeholder:font-medium placeholder:text-[#A0A0A0] focus:border-[#2c2c2c]/50 focus:ring-0 focus:outline-0"
              value={formData.name}
              onChange={handleChange}
              required
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
              className="font-mediumplaceholder:font-medium w-[50%] rounded-lg border border-[#2c2c2c]/10 bg-[#F7F7F7] p-3 text-sm text-[#515151] placeholder:text-sm placeholder:text-[#A0A0A0] focus:border-[#2c2c2c]/50 focus:ring-0 focus:outline-0"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={submitData.errors}
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="h-36 rounded-lg border border-[#2c2c2c]/10 bg-[#F7F7F7] p-3 text-sm font-medium text-[#515151] placeholder:text-sm placeholder:font-medium placeholder:text-[#A0A0A0] focus:border-[#2c2c2c]/50 focus:ring-0 focus:outline-0"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={submitData.errors}
          />

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-black py-3 text-sm font-bold text-white duration-500 hover:opacity-80"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
