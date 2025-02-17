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
    <div className="flex h-12 w-[120px] items-center justify-center rounded-lg transition duration-500 hover:bg-[#EBEBEB]">
      <button
        className={`flex w-28 cursor-pointer items-center rounded-md border-2 border-slate-300/50 bg-white p-2 text-[13px] font-bold ${!copyText ? "text-[#444444]" : "text-[#737373]"}`}
        onClick={copyEmail}
      >
        <img
          src="../images/Copy.svg"
          alt="copy icon"
          className="size-4 opacity-50"
        />
        <span className="pl-1">{buttonText}</span>
      </button>
    </div>
  );
}
