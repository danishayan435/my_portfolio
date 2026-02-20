import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedinFilled,
  IconBrandGmail,
  IconFileCvFilled,
  IconBrandInstagramFilled,
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebookFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/share/17tvNLE2hP/?mibextid=wwXIfr",
    },
    {
        title: "Email",
        icon: (
          <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "mailto:danishayan543@gmail.com",
      },
      {
        title: "LinkedIn",
        icon: (
          <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/muhammad-danish-marketer?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      },
  
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagramFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/adopt.growth_brandsolutions?igsh=MnFtbzZraDhvZ2cy&utm_source=qr",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCvFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1-iArUTMiPm9i4XmD5bKbdiiNg3kzTFZE/view?usp=drivesdk",
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
