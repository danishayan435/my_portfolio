import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandGmail,
  IconFileCvFilled,
  IconBrandInstagramFilled,
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithubFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/fmughalishere",
    },
    {
        title: "Email",
        icon: (
          <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "mailto:fizamuneer0101@gmail.com",
      },
      {
        title: "LinkedIn",
        icon: (
          <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/fizza-muneer-aa054a316/",
      },
  
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagramFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/mern_dev_fiza/",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCvFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1tBeaNPm5rPd5D2qJzVcUjS3NPoZWSr2N/view?usp=drive_open",
    },
  ];
  return (
    <div className="flex items-center justify-center md:pt-10 w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
