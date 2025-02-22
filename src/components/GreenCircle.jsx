export default function GreenCircle() {
  return (
    <div className="flex items-center rounded-full bg-[#DFF7EC] lg:py-0.5 lg:pr-3 lg:pl-0.5 dark:bg-[#223A2F]">
      {/* Lingkaran Hijau */}
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DFF7EC] dark:bg-[#223A2F]">
        <div className="h-1.5 w-1.5 rounded-full bg-[#28C780] lg:h-[7px] lg:w-[7px]"></div>
      </div>

      {/* Teks (Hanya Muncul di Layar ≥ 1024px) */}
      <span className="hidden text-xs font-bold text-[#039754] lg:inline lg:tracking-wide dark:text-[#DFF7EC]">
        AVAILABLE FOR WORK
      </span>
    </div>
  );
}
