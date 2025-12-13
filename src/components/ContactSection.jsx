import Buttons from "./Buttons";

export default function ContactSection() {
  return (
    <div className="mt-12 px-2">
      <div className="texts mb-4 flex flex-col items-center justify-center text-center">
        <h3 className="mb-4 text-3xl font-bold text-[#373737] md:text-4xl dark:text-white">
          Let's work together.
        </h3>
        <small className="break-word px-8 text-[16px] leading-7 font-medium text-[#777777] md:text-lg dark:text-[#B7B7B7]">
          Crafting modern and user-friendly web interfaces
        </small>
      </div>
      <Buttons />
    </div>
  );
}
