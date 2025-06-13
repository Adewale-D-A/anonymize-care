import Link from "next/link";
import { Logo } from "../logo";

import LinkedIn from "@/static/icons/linkedIn";
import Twitter from "@/static/icons/twitter";
import Instagram from "@/static/icons/instagram";

export default function FooterMenu() {
  return (
    <footer className=" w-full flex justify-center bg-dark-ash-700 text-white py-16 lg:py-24 ">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-8">
        <Logo />
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 flex-wrap">
          {[
            {
              id: 1,
              label: "Our Services",
              url: "https://www.7thcare.com/services",
            },
            {
              id: 2,
              label: "Who we are",
              url: "https://www.7thcare.com/about-us",
            },
            {
              id: 3,
              label: "News & Updates",
              url: "https://www.7thcare.com/support",
            },
            {
              id: 4,
              label: "Support",
              url: "https://www.7thcare.com/support",
            },
            {
              id: 5,
              label: "Privacy Policy",
              url: "https://www.7thcare.com/support",
            },
          ].map((section) => (
            <Link
              key={section?.id}
              target="_blank"
              rel="noreferrer"
              href={section?.url}
              className=" font-semibold"
            >
              {section?.label}
            </Link>
          ))}
        </div>
        <div className="w-full border-t border-gray-600 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 flex-wrap py-10">
          <Link
            target="_blank"
            rel="noreferrer"
            href={"mailto:info@7thcare.com"}
          >
            © 2025 7thCare Technology. All rights reserved.
          </Link>
          <div className=" flex items-center gap-4">
            {[
              {
                id: 1,
                icon: <LinkedIn className="w-4 h-4" />,
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/7thcare",
              },
              {
                id: 2,
                icon: <Twitter className="w-4 h-4" />,
                title: "X",
                url: "https://x.com/anonymizecare",
              },
              {
                id: 3,
                icon: <Instagram className="w-4 h-4" />,
                title: "Instagram",
                url: "https://www.instagram.com/anonymizecare",
              },
            ].map(({ id, icon, url, title }) => (
              <Link
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                title={title}
                className=" bg-theme_green/5 p-2 rounded-full hover:scale-125 transition-all text-theme_green"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
