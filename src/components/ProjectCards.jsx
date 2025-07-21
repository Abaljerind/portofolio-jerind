import { useLocation } from "react-router-dom";

export default function ProjectCards() {
  const projectList = [
    {
      name: "Rest Countries API",
      image: "../images/projects/rest-countries-api.png",
      tech: "HTML, TailwindCSS, JavaScript, NPM, REST API, React JS, Vite, React Context, React Router",
      href: "https://rest-countries-api-three-neon.vercel.app/",
    },
    {
      name: "NFT Marketplace Design",
      image: "../images/projects/cryptobase.png",
      tech: "HTML, TailwindCSS, Vite, React JS, NPM, AXIOS, REST API, Firebase",
      href: "https://cryptobase-010325.web.app/",
    },
    {
      name: "Product List with Cart",
      image: "../images/projects/product-list-cart.jpg",
      tech: "HTML, TailwindCSS, Vite, React JS, NPM, JSON",
      href: "https://product-list-with-card-chi.vercel.app/",
    },
    {
      name: "Advice Generator",
      image: "../images/projects/advice-generator.jpg",
      tech: "HTML, TailwindCSS, Vite, React JS, NPM, REST API",
      href: "https://advice-generator-app-chi-six.vercel.app/",
    },
    {
      name: "Bookshelf Apps",
      image: "../images/projects/bookshelf-apps.png",
      tech: "HTML, CSS, JavaScript, JSON, Local Storage",
      href: "https://bookshelf-apps-sable.vercel.app/",
    },
    {
      name: "Todo Apps",
      image: "../images/projects/todo-apps.png",
      tech: "HTML, CSS, JavaScript, JSON, Local Storage",
      href: "https://todo-apps-seven.vercel.app/",
    },
  ];

  const location = useLocation();
  const filteredProjectList =
    location.pathname === "/project" ? projectList : projectList.slice(0, 3);

  return (
    <>
      <div className="projects mt-1 flex flex-col gap-4 rounded-xl p-1.5">
        {filteredProjectList.map((item, index) => {
          return (
            <div
              className="rounded-xl bg-white p-4 shadow-sm dark:border dark:border-[#3D3D3D] dark:bg-[#373737]"
              key={index + 1}
            >
              <a
                className="block"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-3 rounded-xl"
                />
                <p className="cursor-pointer text-[16px] font-semibold text-[#373737] md:text-lg dark:text-white">
                  {item.name}
                </p>
              </a>
              <small className="text-xs font-medium text-[#858585] md:text-sm dark:text-[#C0C0C0]">
                {item.tech}
              </small>
            </div>
          );
        })}
      </div>
    </>
  );
}
