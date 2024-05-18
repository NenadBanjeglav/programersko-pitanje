"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { SignedOut, useAuth } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavContent = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  let updatedSideBarlinks = sidebarLinks;

  if (!userId) {
    updatedSideBarlinks = sidebarLinks.filter(
      (el) => el.route !== "/profile" && el.route !== "/collection"
    );
  }

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {updatedSideBarlinks.map((el) => {
        const isActive = pathname.startsWith(el.route) || pathname === el.route;

        return (
          <SheetClose asChild key={el.route}>
            <Link
              href={el.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={el.imgURL}
                alt={el.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {el.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevOverflow"
          />
          <p className="h2-bold  text-dark100_light900 font-spaceGrotesk ">
            Programersko<span className="text-primary-500">Pitanje</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button
                    className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3
                   shadow-none"
                  >
                    <span className="primary-text-gradient">Prijava</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button
                    className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg px-4
                   py-3 shadow-none"
                  >
                    Registracija
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}
