import { useState } from "react";

export default function CopyEmail() {
  //   Coba buat juga agar saat buttonText nya berganti ada animasi nya

  const [email] = useState("abaljerinda@gmail.com");
  const [buttonText, setButtonText] = useState("Copy Email");
  const [copyText, setCopyText] = useState(false);

  function copyEmail() {
    navigator.clipboard
      .writeText(email) // salin email ke clipboard
      .then(() => {
        setButtonText("Copied!"); // ubah isi buttonText jadi Copied
        setCopyText(!copyText);
        setTimeout(() => {
          setButtonText("Copy Email");
          setCopyText(false);
        }, 1850) // isi buttonText dikembalikan jadi Copy Email
          .catch((err) => console.error("Gagal menyalin email", err));
      });
  }

  return (
    <button
      className={`flex w-28 cursor-pointer items-center rounded-md border-2 border-slate-300/50 bg-white p-2 text-xs font-bold duration-300 hover:shadow-lg dark:border-slate-300/10 dark:bg-[#212121] ${!copyText ? "text-[#444444] dark:text-white" : "text-[#737373]"} md:w-fit md:text-sm`}
      onClick={copyEmail}
    >
      <img
        src="../images/Copy.svg"
        alt="copy icon"
        className="size-4 opacity-50 dark:brightness-0 dark:invert"
      />
      <span className="pl-1">{buttonText}</span>
    </button>
  );
}
