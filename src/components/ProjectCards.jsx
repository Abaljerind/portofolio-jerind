export default function ProjectCards() {
  const projectList = [
    {
      name: "Contact Form",
      image: "../images/projects/contact-form.jpg",
      tech: "HTML, TailwindCSS, JavaScript, NPM",
      href: "https://contact-form-main-omega.vercel.app/",
    },
    {
      name: "Advice Generator",
      image: "../images/projects/advice-generator.jpg",
      tech: "HTML, TailwindCSS, Vite, React JS, NPM, API",
      href: "https://advice-generator-app-chi-six.vercel.app/",
    },
    {
      name: "Product List with Cart",
      image: "../images/projects/product-list-cart.jpg",
      tech: "HTML, TailwindCSS, Vite, React JS, NPM, JSON",
      href: "https://product-list-with-card-chi.vercel.app/",
    },
  ];

  return (
    <>
      <div className="projects mt-1 flex flex-col gap-4 rounded-xl p-1.5">
        {projectList.map((item, index) => {
          return (
            <div className="rounded-xl bg-white p-4 shadow-sm" key={index + 1}>
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
                <p className="cursor-pointer text-[16px] font-semibold text-[#373737]">
                  {item.name}
                </p>
              </a>
              <small className="text-xs font-medium text-[#858585]">
                {item.tech}
              </small>
            </div>
          );
        })}
      </div>
    </>
  );
}
