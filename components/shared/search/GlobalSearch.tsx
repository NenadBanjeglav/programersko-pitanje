import { Input } from "@/components/ui/input";
import Image from "next/image";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
// import React, { useEffect, useRef, useState } from "react";

const GlobalSearch = () => {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const searchParams = useSearchParams();
  //   const searchContainerRef = useRef(null);

  //   const query = searchParams.get("q");

  //   const [search, setSearch] = useState(query || "");
  //   const [isOpen, setIsopen] = useState(false);

  //   useEffect(() => {
  //     const handleOutsideClick = (event: any) => {
  //       if (
  //         searchContainerRef.current &&
  //         // @ts-ignore
  //         !searchContainerRef.current.contains(event.target)
  //       ) {
  //         setIsopen(false);
  //         setSearch("");
  //       }
  //     };

  //     setIsopen(false);

  //     document.addEventListener("click", handleOutsideClick);

  //     return () => {
  //       document.removeEventListener("click", handleOutsideClick);
  //     };
  //   }, [pathname]);

  //   useEffect(() => {
  //     const delayDebouncFn = setTimeout(() => {
  //       if (search) {
  //         const newUrl = formUrlQuery({
  //           params: searchParams.toString(),
  //           key: "global",
  //           value: search,
  //         });

  //         router.push(newUrl, { scroll: false });
  //       } else {
  //         if (query) {
  //           const newUrl = removeKeysFromQuery({
  //             params: searchParams.toString(),
  //             keysToRemove: ["global", "type"],
  //           });

  //           router.push(newUrl, { scroll: false });
  //         }
  //       }
  //     }, 300);

  //     return () => clearTimeout(delayDebouncFn);
  //   }, [search, pathname, router, searchParams, query]);

  return (
    <div
      className="relative w-full max-w-[600px] max-lg:hidden"
      //   ref={searchContainerRef}
    >
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Pretrazi celu bazu podataka"
          //   value={search}
          //   onChange={(e) => {
          //     setSearch(e.target.value);

          //     if (!isOpen) setIsopen(true);
          //     if (e.target.value === "" && isOpen) setIsopen(false);
          //   }}
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        />
      </div>
      {/* {isOpen && <GlobalResult />} */}
    </div>
  );
};

export default GlobalSearch;