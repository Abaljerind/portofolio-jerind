export default function MySkills({ skill }) {
  return (
    <div className="rounded-full bg-white px-5 py-2 shadow-sm dark:bg-[#373737]">
      <p className="text-sm font-semibold text-[#393939] dark:text-white">
        {skill}
      </p>
    </div>
  );
}
