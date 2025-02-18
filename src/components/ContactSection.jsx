import Buttons from "./Buttons";

export default function ContactSection() {
  return (
    <div className="mt-12 px-2">
      <div className="texts mb-4 flex flex-col items-center justify-center text-center">
        <p className="mb-4 text-3xl font-bold text-[#373737]">
          Let's work together.
        </p>
        <small className="px-8 text-[16px] leading-7 font-medium break-words text-[#777777]">
          Crafting modern and user-friendly web interfaces
        </small>
      </div>
      <Buttons />
    </div>
  );
}
