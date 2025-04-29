"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigationItems = [
  {
    title: "guide",
    href: "/guide",
  },
  {
    title: "ㅂㅂ▾",
    href: "/bubble",
    subItems: [
      {
        year: "2020",
        href: "/bubble/2020",
        months: [{ title: "12월", href: "/bubble/2020/dec" }],
      },
      {
        year: "2021",
        href: "/bubble/2021",
        months: [
          { title: "1월", href: "/bubble/2021/jan" },
          { title: "2월", href: "/bubble/2021/feb" },
          { title: "3월", href: "/bubble/2021/mar" },
          { title: "4월", href: "/bubble/2021/apr" },
          { title: "5월", href: "/bubble/2021/may" },
          { title: "6월", href: "/bubble/2021/jun" },
          { title: "7월", href: "/bubble/2021/jul" },
          { title: "8월", href: "/bubble/2021/aug" },
          { title: "9월", href: "/bubble/2021/sep" },
          { title: "10월", href: "/bubble/2021/oct" },
          { title: "11월", href: "/bubble/2021/nov" },
          { title: "12월", href: "/bubble/2021/dec" },
        ],
      },
      {
        year: "2022",
        href: "/bubble/2022",
        months: [
          { title: "1월", href: "/bubble/2022/jan" },
          { title: "2월", href: "/bubble/2022/feb" },
          { title: "3월", href: "/bubble/2022/mar" },
          { title: "4월", href: "/bubble/2022/apr" },
          { title: "5월", href: "/bubble/2022/may" },
          { title: "6월", href: "/bubble/2022/jun" },
          { title: "7월", href: "/bubble/2022/jul" },
          { title: "8월", href: "/bubble/2022/aug" },
          { title: "9월", href: "/bubble/2022/sep" },
          { title: "10월", href: "/bubble/2022/oct" },
          { title: "11월", href: "/bubble/2022/nov" },
          { title: "12월", href: "/bubble/2022/dec" },
        ],
      },
      {
        year: "2023",
        href: "/bubble/2023",
        months: [
          { title: "1월", href: "/bubble/2023/jan" },
          { title: "2월", href: "/bubble/2023/feb" },
          { title: "3월", href: "/bubble/2023/mar" },
          { title: "4월", href: "/bubble/2023/apr" },
          { title: "5월", href: "/bubble/2023/may" },
        ],
      },
    ],
  },
  {
    title: "ㅇㅂㅅ▾",
    href: "/weverse",
    subItems: [
      {
        year: "2023",
        href: "/weverse/2023",
        months: [
          { title: "6월", href: "/weverse/2023/jun" },
          { title: "7월", href: "/weverse/2023/jul" },
          { title: "8월", href: "/weverse/2023/aug" },
          { title: "9월", href: "/weverse/2023/sep" },
          { title: "10월", href: "/weverse/2023/oct" },
          { title: "11월", href: "/weverse/2023/nov" },
          { title: "12월", href: "/weverse/2023/dec" },
        ],
      },
      {
        year: "2024",
        href: "/weverse/2024",
        months: [
          { title: "1월", href: "/weverse/2024/jan" },
          { title: "2월", href: "/weverse/2024/feb" },
          { title: "3월", href: "/weverse/2024/mar" },
          { title: "4월", href: "/weverse/2024/apr" },
          { title: "5월", href: "/weverse/2024/may" },
          { title: "6월", href: "/weverse/2024/jun" },
          { title: "7월", href: "/weverse/2024/jul" },
          { title: "8월", href: "/weverse/2024/aug" },
          { title: "9월", href: "/weverse/2024/sep" },
          { title: "10월", href: "/weverse/2024/oct" },
          { title: "11월", href: "/weverse/2024/nov" },
          { title: "12월", href: "/weverse/2024/dec" },
        ],
      },
      {
        year: "2025",
        href: "/weverse/2025",
        months: [
          { title: "1월", href: "/weverse/2025/jan" },
          { title: "2월", href: "/weverse/2025/feb" },
          { title: "3월", href: "/weverse/2025/mar" },
          { title: "4월", href: "/weverse/2025/apr" },
          { title: "5월", href: "/weverse/2025/may" },
          { title: "6월", href: "/weverse/2025/jun" },
          { title: "7월", href: "/weverse/2025/jul" },
          { title: "8월", href: "/weverse/2025/aug" },
          { title: "9월", href: "/weverse/2025/sep" },
          { title: "10월", href: "/weverse/2025/oct" },
          { title: "11월", href: "/weverse/2025/nov" },
          { title: "12월", href: "/weverse/2025/dec" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMainMenuClick = (item: (typeof navigationItems)[0]) => {
    if (!item.subItems) {
      // If no subitems, just navigate
      return;
    }
    // Toggle dropdown menu visibility
    setOpenDropdown(openDropdown === item.title ? null : item.title);
    // Reset subdropdown when toggling
    setOpenSubDropdown(null);
  };

  // Handle mouse enter for dropdown menu
  const handleMouseEnter = (title: string) => {
    setOpenDropdown(title);
    // Reset subdropdown state whenever dropdown changes
    setOpenSubDropdown(null);
  };

  return (
    <header
      ref={navbarRef}
      className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#1a1a1f] shadow dark:shadow-[0_1px_0_0_#a9a9ab]"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl">
          archiveproj
        </Link>

        {/* PC 메뉴 */}
        <div className="hidden lg:flex items-center gap-6">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative">
              <div className="flex items-center">
                <Link href={item.href} className="font-semibold">
                  {item.title.replace("▾", "")}
                </Link>
                {item.subItems && (
                  <button
                    className="ml-1 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMainMenuClick(item);
                    }}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* 드롭다운 메뉴 */}
              {openDropdown === item.title && item.subItems && (
                <div
                  className="absolute top-full right-0 mt-2 bg-white dark:bg-[#2c2c34] border dark:border-gray-600 rounded-lg shadow p-4 min-w-[200px] z-50"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.subItems.map((year) => (
                    <div
                      key={year.year}
                      className="relative"
                      onMouseEnter={() => setOpenSubDropdown(year.year)}
                    >
                      <span className="flex justify-between w-full items-center p-2 rounded cursor-pointer">
                        {year.year}
                        <ChevronDown className="w-4 h-4" />
                      </span>
                      {openSubDropdown === year.year && (
                        <ScrollArea
                          className="pl-4 mt-2"
                          style={{
                            maxHeight: "120px",
                            height:
                              year.months.length <= 3
                                ? `${year.months.length * 40}px`
                                : "120px",
                          }}
                        >
                          <div className="flex flex-col">
                            {year.months.map((month) => (
                              <Link
                                key={month.title}
                                href={month.href}
                                className="p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                {month.title}
                              </Link>
                            ))}
                          </div>
                        </ScrollArea>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile 메뉴 */}
        <div className="flex lg:hidden items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile 메뉴 펼침 */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow dark:bg-[#1a1a1f]">
          <div className="flex flex-col p-4 gap-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="flex items-center">
                  <Link href={item.href} className="font-semibold">
                    {item.title.replace("▾", "")}
                  </Link>
                  {item.subItems && (
                    <button
                      className="ml-1 flex items-center"
                      onClick={() => {
                        const newDropdownState =
                          openDropdown === item.title ? null : item.title;
                        setOpenDropdown(newDropdownState);
                        // Reset subdropdown when toggling dropdown
                        if (newDropdownState !== null) {
                          setOpenSubDropdown(null);
                        }
                      }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {item.subItems && openDropdown === item.title && (
                  <>
                    {item.subItems.map((year) => (
                      <div key={year.year} className="pl-4">
                        <button
                          className="flex w-full justify-between items-center p-2 text-left"
                          onClick={() =>
                            setOpenSubDropdown(
                              openSubDropdown === year.year ? null : year.year
                            )
                          }
                        >
                          {year.year}
                          <ChevronDown className="w-4 h-4" />
                        </button>

                        {openSubDropdown === year.year && (
                          <div
                            className="mt-2"
                            // style={{
                            //   maxHeight:
                            //     year.months.length <= 3
                            //       ? `${year.months.length * 36}px`
                            //       : "120px",
                            //   overflow: "auto",
                            // }}
                          >
                            {year.months.map((month) => (
                              <Link
                                key={month.title}
                                href={month.href}
                                className="pl-7 py-1 text-sm block"
                              >
                                {month.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="p-1 bg-transparent shadow-none hover:bg-transparent active:bg-transparent"
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

///////////////////////////

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const navigationItems = [
//   {
//     title: "guide",
//     href: "/guide",
//   },
//   {
//     title: "ㅂㅂ▾",
//     href: "/bubble",
//     subItems: [
//       {
//         year: "2020",
//         href: "/bubble/2020",
//         months: [{ title: "12월", href: "/bubble/2020/dec" }],
//       },
//       {
//         year: "2021",
//         href: "/bubble/2021",
//         months: [
//           { title: "1월", href: "/bubble/2021/jan" },
//           { title: "2월", href: "/bubble/2021/feb" },
//           { title: "3월", href: "/bubble/2021/mar" },
//           { title: "4월", href: "/bubble/2021/apr" },
//           { title: "5월", href: "/bubble/2021/may" },
//           { title: "6월", href: "/bubble/2021/jun" },
//           { title: "7월", href: "/bubble/2021/jul" },
//           { title: "8월", href: "/bubble/2021/aug" },
//           { title: "9월", href: "/bubble/2021/sep" },
//           { title: "10월", href: "/bubble/2021/oct" },
//           { title: "11월", href: "/bubble/2021/nov" },
//           { title: "12월", href: "/bubble/2021/dec" },
//         ],
//       },
//       {
//         year: "2022",
//         href: "/bubble/2022",
//         months: [
//           { title: "1월", href: "/bubble/2022/jan" },
//           { title: "2월", href: "/bubble/2022/feb" },
//           { title: "3월", href: "/bubble/2022/mar" },
//           { title: "4월", href: "/bubble/2022/apr" },
//           { title: "5월", href: "/bubble/2022/may" },
//           { title: "6월", href: "/bubble/2022/jun" },
//           { title: "7월", href: "/bubble/2022/jul" },
//           { title: "8월", href: "/bubble/2022/aug" },
//           { title: "9월", href: "/bubble/2022/sep" },
//           { title: "10월", href: "/bubble/2022/oct" },
//           { title: "11월", href: "/bubble/2022/nov" },
//           { title: "12월", href: "/bubble/2022/dec" },
//         ],
//       },
//       {
//         year: "2023",
//         href: "/bubble/2023",
//         months: [
//           { title: "1월", href: "/bubble/2023/jan" },
//           { title: "2월", href: "/bubble/2023/feb" },
//           { title: "3월", href: "/bubble/2023/mar" },
//           { title: "4월", href: "/bubble/2023/apr" },
//           { title: "5월", href: "/bubble/2023/may" },
//         ],
//       },
//     ],
//   },
//   {
//     title: "ㅇㅂㅅ▾",
//     href: "/weverse",
//     subItems: [
//       {
//         year: "2023",
//         href: "/weverse/2023",
//         months: [
//           { title: "6월", href: "/weverse/2023/jun" },
//           { title: "7월", href: "/weverse/2023/jul" },
//           { title: "8월", href: "/weverse/2023/aug" },
//           { title: "9월", href: "/weverse/2023/sep" },
//           { title: "10월", href: "/weverse/2023/oct" },
//           { title: "11월", href: "/weverse/2023/nov" },
//           { title: "12월", href: "/weverse/2023/dec" },
//         ],
//       },
//       {
//         year: "2024",
//         href: "/weverse/2024",
//         months: [
//           { title: "1월", href: "/weverse/2024/jan" },
//           { title: "2월", href: "/weverse/2024/feb" },
//           { title: "3월", href: "/weverse/2024/mar" },
//           { title: "4월", href: "/weverse/2024/apr" },
//           { title: "5월", href: "/weverse/2024/may" },
//           { title: "6월", href: "/weverse/2024/jun" },
//           { title: "7월", href: "/weverse/2024/jul" },
//           { title: "8월", href: "/weverse/2024/aug" },
//           { title: "9월", href: "/weverse/2024/sep" },
//           { title: "10월", href: "/weverse/2024/oct" },
//           { title: "11월", href: "/weverse/2024/nov" },
//           { title: "12월", href: "/weverse/2024/dec" },
//         ],
//       },
//       {
//         year: "2025",
//         href: "/weverse/2025",
//         months: [
//           { title: "1월", href: "/weverse/2025/jan" },
//           { title: "2월", href: "/weverse/2025/feb" },
//           { title: "3월", href: "/weverse/2025/mar" },
//           { title: "4월", href: "/weverse/2025/apr" },
//           { title: "5월", href: "/weverse/2025/may" },
//           { title: "6월", href: "/weverse/2025/jun" },
//           { title: "7월", href: "/weverse/2025/jul" },
//           { title: "8월", href: "/weverse/2025/aug" },
//           { title: "9월", href: "/weverse/2025/sep" },
//           { title: "10월", href: "/weverse/2025/oct" },
//           { title: "11월", href: "/weverse/2025/nov" },
//           { title: "12월", href: "/weverse/2025/dec" },
//         ],
//       },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
//   const navbarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         navbarRef.current &&
//         !navbarRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//         setOpenDropdown(null);
//         setOpenSubDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleMainMenuClick = (item: (typeof navigationItems)[0]) => {
//     if (!item.subItems) {
//       // If no subitems, just navigate
//       return;
//     }
//     // Toggle dropdown menu visibility
//     setOpenDropdown(openDropdown === item.title ? null : item.title);
//     // Reset subdropdown when toggling
//     setOpenSubDropdown(null);
//   };

//   // Handle mouse enter for dropdown menu
//   const handleMouseEnter = (title: string) => {
//     setOpenDropdown(title);
//     // Reset subdropdown state whenever dropdown changes
//     setOpenSubDropdown(null);
//   };

//   return (
//     <header
//       ref={navbarRef}
//       className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#1a1a1f] shadow dark:shadow-[0_1px_0_0_#a9a9ab]"
//     >
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <Link href="/" className="font-bold text-xl">
//           archiveproj
//         </Link>

//         {/* PC 메뉴 */}
//         <div className="hidden lg:flex items-center gap-6">
//           {navigationItems.map((item) => (
//             <div key={item.title} className="relative">
//               <div className="flex items-center">
//                 <Link href={item.href} className="font-semibold">
//                   {item.title.replace("▾", "")}
//                 </Link>
//                 {item.subItems && (
//                   <button
//                     className="ml-1 flex items-center"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleMainMenuClick(item);
//                     }}
//                     onMouseEnter={() => handleMouseEnter(item.title)}
//                   >
//                     <ChevronDown className="w-4 h-4" />
//                   </button>
//                 )}
//               </div>

//               {/* 드롭다운 메뉴 */}
//               {openDropdown === item.title && item.subItems && (
//                 <div
//                   className="absolute top-full right-0 mt-2 bg-white dark:bg-[#2c2c34] border dark:border-gray-600 rounded-lg shadow p-4 min-w-[200px] z-50"
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   {item.subItems.map((year) => (
//                     <div
//                       key={year.year}
//                       className="relative"
//                       onMouseEnter={() => setOpenSubDropdown(year.year)}
//                     >
//                       <span className="flex justify-between w-full items-center p-2 rounded cursor-pointer">
//                         {year.year}
//                         <ChevronDown className="w-4 h-4" />
//                       </span>
//                       {openSubDropdown === year.year && (
//                         <ScrollArea
//                           className="pl-4 mt-2"
//                           style={{
//                             maxHeight: "120px",
//                             height:
//                               year.months.length <= 3
//                                 ? `${year.months.length * 40}px`
//                                 : "120px",
//                           }}
//                         >
//                           <div className="flex flex-col">
//                             {year.months.map((month) => (
//                               <Link
//                                 key={month.title}
//                                 href={month.href}
//                                 className="p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700"
//                               >
//                                 {month.title}
//                               </Link>
//                             ))}
//                           </div>
//                         </ScrollArea>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//           <ModeToggle />
//         </div>

//         {/* Mobile 메뉴 */}
//         <div className="flex lg:hidden items-center gap-2">
//           <ModeToggle />
//           <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile 메뉴 펼침 */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t shadow dark:bg-[#1a1a1f]">
//           <div className="flex flex-col p-4 gap-4">
//             {navigationItems.map((item) => (
//               <div key={item.title} className="flex flex-col">
//                 <div className="flex items-center">
//                   <Link href={item.href} className="font-semibold">
//                     {item.title.replace("▾", "")}
//                   </Link>
//                   {item.subItems && (
//                     <button
//                       className="ml-1 flex items-center"
//                       onClick={() => {
//                         const newDropdownState =
//                           openDropdown === item.title ? null : item.title;
//                         setOpenDropdown(newDropdownState);
//                         // Reset subdropdown when toggling dropdown
//                         if (newDropdownState !== null) {
//                           setOpenSubDropdown(null);
//                         }
//                       }}
//                     >
//                       <ChevronDown className="w-4 h-4" />
//                     </button>
//                   )}
//                 </div>

//                 {item.subItems && openDropdown === item.title && (
//                   <>
//                     {item.subItems.map((year) => (
//                       <div key={year.year} className="pl-4">
//                         <button
//                           className="flex w-full justify-between items-center p-2 text-left"
//                           onClick={() =>
//                             setOpenSubDropdown(
//                               openSubDropdown === year.year ? null : year.year
//                             )
//                           }
//                         >
//                           {year.year}
//                           <ChevronDown className="w-4 h-4" />
//                         </button>

//                         {openSubDropdown === year.year && (
//                           <div
//                             className="mt-2"
//                             style={{
//                               maxHeight:
//                                 year.months.length <= 3
//                                   ? `${year.months.length * 36}px`
//                                   : "120px",
//                               overflow: "auto",
//                             }}
//                           >
//                             {year.months.map((month) => (
//                               <Link
//                                 key={month.title}
//                                 href={month.href}
//                                 className="pl-7 py-1 text-sm block"
//                               >
//                                 {month.title}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={toggleTheme}
//       className="p-1 bg-transparent shadow-none hover:bg-transparent active:bg-transparent"
//     >
//       {theme === "light" ? (
//         <Sun className="h-[1.2rem] w-[1.2rem]" />
//       ) : (
//         <Moon className="h-[1.2rem] w-[1.2rem]" />
//       )}
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
// }
