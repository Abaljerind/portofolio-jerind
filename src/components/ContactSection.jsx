import Buttons from "./Buttons";

export default function ContactSection() {
  return (
    <div className="mt-12 px-2">
      <div className="texts mb-4 flex flex-col items-center justify-center text-center">
        <h3 className="mb-4 text-3xl font-bold text-[#373737] dark:text-white">
          Let's work together.
        </h3>
        <small className="px-8 text-[16px] leading-7 font-medium break-words text-[#777777] dark:text-[#B7B7B7]">
          Crafting modern and user-friendly web interfaces
        </small>
      </div>
      <Buttons />
    </div>
  );
}
