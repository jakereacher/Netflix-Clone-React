import React from "react";
import LanguageButton from "./Buttons/LanguageButton";

const Footer = () => {
  const footerList = [
    {
      items: ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    },
    {
      items: ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
    },
    {
      items: [
        "Account",
        "Ways to Watch",
        "Corporate Information",
        "Only on Netflix",
      ],
    },
    {
      items: ["Media Centre", "Terms of Use", "Contact Us"],
    },
  ];

  return (
    <div className="mb-24">
      <p className="text-zinc-400 text-md font-medium mt-16">
        Questions? Call 000-800-919-1743
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-400 my-12">
        {footerList.map((col, i) => (
          <ul
            key={i}
            className="flex flex-col gap-2 text-left text-md font-medium"
          >
            {col.items.map((item, j) => (
              <li key={j}>
                <a href="#" className="underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div>
        <LanguageButton />
        <p className="text-zinc-400 mt-8">Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;
