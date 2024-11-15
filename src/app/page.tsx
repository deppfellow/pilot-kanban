import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Deppfellow - News Board",
  description:
    "Read latest updates in world economy, technology, and other interesting topics.",
};

// const technologies = [
//   { name: 'JavaScript', icon: Icons.javascript },
//   { name: 'TypeScript', icon: Icons.typescript },
//   { name: 'React', icon: Icons.react },
//   { name: 'Node.js', icon: Icons.node },
//   // Add other tech stack icons
// ]

const workExperience = [
  {
    company: "AIA SINGAPORE",
    role: "Frontend Developer",
    period: "February 2023 - Present",
    logo: "/aia-logo.png",
    description:
      "Part of team responsible for developing and maintain project related to corporate customer app.",
    highlights: [
      "Improve existing codebase by upgrading React Native project from version 0.65 to latest stable release",
      "Monitor flow alerts for security vulnerabilities and fix any issues to maintain a secure codebase",
      "Consider reusability and understand when code is ready to be shared and delivered",
      "Perform code reviews and tests, and issue resolution",
      "Write and manage technical documentation using Atlassian Confluence",
    ],
  },
  // Add other work experiences
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-8 md:px-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex gap-4">
            {/* Social icons */}
            {[...Array(3)].map((_, index) => (
              <a key={index} href="#" className="text-white">
                <Image
                  src={`/icons/social-icon-${index + 1}.png`}
                  alt={`Icon ${index + 1}`}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            {["Home", "About", "Projects", "Posts"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm hover:text-lime-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>

        <section className="mb-20">
          <div className="flex flex-col">
            <Avatar className="w-56 h-56 overflow-visible">
              {/* <Image src={`/spino.jpg`} alt={`Profile Pics`} height="128" /> */}
              <img
                src="/spino.jpg"
                alt="Spino Image"
                className="object-cover rounded-sm"
              />
            </Avatar>

            <div>
              <h1 className="text-4xl font-bold mb-4">
                Hi, <span className="text-lime-400">Deppfellow</span> here.
              </h1>
              <p className="text-2xl mb-6">
                Frontend engineer with a casual interest in the finance world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
