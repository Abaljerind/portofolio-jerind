export default function MySkills({ skill, icon, color }) {
  return (
    <div className="group rounded-full bg-white px-5 py-2 shadow-sm transition-all duration-300 hover:scale-110 dark:bg-[#373737]">
      <p className="flex cursor-pointer items-center justify-center gap-2 font-semibold text-[#393939] md:text-lg dark:text-white">
        <span
          className="text-xl transition duration-300 group-hover:text-[var(--hover-color)] hover:scale-125 md:text-2xl lg:text-3xl"
          style={{ "--hover-color": color }}
        >
          {icon}
        </span>
        {skill}
      </p>
    </div>
  );
}
