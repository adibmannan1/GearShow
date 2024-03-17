import Image from "next/image"
import Link from "next/link"

const footerSections = [
  {
    title: "Company",
    links: [
      { text: "About Us", url: "/about" },
      { text: "Blog", url: "https://www.truecar.com/best-cars-trucks/cars/" },
      { text: "Github", url: "https://github.com/" },
      { text: "Free Products", url: "https://www.latestfreestuff.co.uk/" },
    ],
  },
  {
    title: "Help and Support",
    links: [
      { text: "Knowledge Center", url: "https://en.wikipedia.org/wiki/Car" },
      { text: "Contact Us", url: "https://www.cars.com/contact/" },
      { text: "Premium Support", url: "https://cloud.google.com/support/docs/premium" },
      { text: "Pricing", url: "https://res.cloudinary.com/practicaldev/image/fetch/s--OcSoDaEr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/esc3s3p8ihmhbbyk1ebt.png" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Documentation", url: "https://www.safedrivingforlife.info/advice/car-driving/your-vehicle-and-documents/vehicle-documents-for-car-drivers/" },
      { text: "Custom Development", url: "https://en.wikipedia.org/wiki/Custom_car" },
      { text: "Discord", url: "https://discord.com/" },
      { text: "Tailwind Components", url: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { text: "React Js", url: "https://react.dev/" },
      { text: "HTML", url: "https://html.com/" },
      { text: "Javascript", url: "https://www.javascript.com/" },
      { text: "Next Js", url: "https://nextjs.org/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-200 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col w-full md:w-[30%] flex-wrap px-16 gap-3 md:items-start py-5 mx-auto  lg:justify-between">
      {/* logo section */}
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li>
                <Link href={"/"}>
                  <Image src="/logo.svg" width={90} height={90} alt="logo" className="object-contain mr-2 w-10"/>
                </Link>
            </li>
          </ul>
        </div>
        
        {/* Copyright Section */}
        <p className="text-center text-gray-400">
          @2024 All rights reserved by GearShow.
        </p>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <Link href='https://www.facebook.com/' target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
          </Link>
          <Link href='https://twitter.com' target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
          </Link>
          <Link href='https://www.instagram.com/' target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#000000" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
          </Link>
          <Link href='https://www.linkedin.com/' target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#000000" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-[70%] justify-around px-5">
        {/* Mapping through footerSections array */}
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col manrope margin font-light">
            <Link href={`/${section.title.toLowerCase()}`} className="font-bold m-0 text-black">
              <h1 className="m-0">{section.title}</h1>
            </Link>
            {/* Mapping through links in each section */}
            {section.links.map((link, linkIndex) => (
              //  The rel attribute helps to ensure that the new tab has no access to the window.opener property, which can be a security risk.
              <Link key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="m-0 text-gray-500 hover:text-black">
                {link.text}
              </Link>
            ))}
          </div>
        ))}
      </div>

    </footer>
  )
}