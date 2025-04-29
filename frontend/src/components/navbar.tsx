'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Moon, Sun, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { ScrollArea } from '@/components/ui/scroll-area'
import SearchModal from '@/components/ui/searchmodal'

const navigationItems = [
  {
    title: 'guide',
    href: '/guide',
  },
  {
    title: 'ㅂㅂ▾',
    href: '/bubble',
    subItems: [
      {
        year: '2020',
        href: '/bubble/2020',
        months: [{ title: '12월', href: '/bubble/2020/12' }],
      },
      {
        year: '2021',
        href: '/bubble/2021',
        months: [
          { title: '1월', href: '/bubble/2021/01' },
          { title: '2월', href: '/bubble/2021/02' },
          { title: '3월', href: '/bubble/2021/03' },
          { title: '4월', href: '/bubble/2021/04' },
          { title: '5월', href: '/bubble/2021/05' },
          { title: '6월', href: '/bubble/2021/06' },
          { title: '7월', href: '/bubble/2021/07' },
          { title: '8월', href: '/bubble/2021/08' },
          { title: '9월', href: '/bubble/2021/09' },
          { title: '10월', href: '/bubble/2021/10' },
          { title: '11월', href: '/bubble/2021/11' },
          { title: '12월', href: '/bubble/2021/12' },
        ],
      },
      {
        year: '2022',
        href: '/bubble/2022',
        months: [
          { title: '1월', href: '/bubble/2022/01' },
          { title: '2월', href: '/bubble/2022/02' },
          { title: '3월', href: '/bubble/2022/03' },
          { title: '4월', href: '/bubble/2022/04' },
          { title: '5월', href: '/bubble/2022/05' },
          { title: '6월', href: '/bubble/2022/06' },
          { title: '7월', href: '/bubble/2022/07' },
          { title: '8월', href: '/bubble/2022/08' },
          { title: '9월', href: '/bubble/2022/09' },
          { title: '10월', href: '/bubble/2022/10' },
          { title: '11월', href: '/bubble/2022/11' },
          { title: '12월', href: '/bubble/2022/12' },
        ],
      },
      {
        year: '2023',
        href: '/bubble/2023',
        months: [
          { title: '1월', href: '/bubble/2023/01' },
          { title: '2월', href: '/bubble/2023/02' },
          { title: '3월', href: '/bubble/2023/03' },
          { title: '4월', href: '/bubble/2023/04' },
          { title: '5월', href: '/bubble/2023/05' },
        ],
      },
    ],
  },
  {
    title: 'ㅇㅂㅅ▾',
    href: '/weverse',
    subItems: [
      {
        year: '2023',
        href: '/weverse/2023',
        months: [
          { title: '6월', href: '/weverse/2023/06' },
          { title: '7월', href: '/weverse/2023/07' },
          { title: '8월', href: '/weverse/2023/08' },
          { title: '9월', href: '/weverse/2023/09' },
          { title: '10월', href: '/weverse/2023/10' },
          { title: '11월', href: '/weverse/2023/11' },
          { title: '12월', href: '/weverse/2023/12' },
        ],
      },
      {
        year: '2024',
        href: '/weverse/2024',
        months: [
          { title: '1월', href: '/weverse/2024/01' },
          { title: '2월', href: '/weverse/2024/02' },
          { title: '3월', href: '/weverse/2024/03' },
          { title: '4월', href: '/weverse/2024/04' },
          { title: '5월', href: '/weverse/2024/05' },
          { title: '6월', href: '/weverse/2024/06' },
          { title: '7월', href: '/weverse/2024/07' },
          { title: '8월', href: '/weverse/2024/08' },
          { title: '9월', href: '/weverse/2024/09' },
          { title: '10월', href: '/weverse/2024/10' },
          { title: '11월', href: '/weverse/2024/11' },
          { title: '12월', href: '/weverse/2024/12' },
        ],
      },
      {
        year: '2025',
        href: '/weverse/2025',
        months: [
          { title: '1월', href: '/weverse/2025/01' },
          { title: '2월', href: '/weverse/2025/02' },
          { title: '3월', href: '/weverse/2025/03' },
          { title: '4월', href: '/weverse/2025/04' },
          { title: '5월', href: '/weverse/2025/05' },
          { title: '6월', href: '/weverse/2025/06' },
          { title: '7월', href: '/weverse/2025/07' },
          { title: '8월', href: '/weverse/2025/08' },
          { title: '9월', href: '/weverse/2025/09' },
          { title: '10월', href: '/weverse/2025/10' },
          { title: '11월', href: '/weverse/2025/11' },
          { title: '12월', href: '/weverse/2025/12' },
        ],
      },
    ],
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setOpenDropdown(null)
        setOpenSubDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMainMenuClick = (item: (typeof navigationItems)[0]) => {
    if (!item.subItems) return
    setOpenDropdown(openDropdown === item.title ? null : item.title)
    setOpenSubDropdown(null)
  }

  const handleMouseEnter = (title: string) => {
    setOpenDropdown(title)
    setOpenSubDropdown(null)
  }

  return (
    <header
      ref={navbarRef}
      style={{ '--navbar-height': '64px' } as React.CSSProperties}
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
                  {item.title.replace('▾', '')}
                </Link>
                {item.subItems && (
                  <button
                    className="ml-1 flex items-center"
                    onClick={(e) => {
                      e.preventDefault()
                      handleMainMenuClick(item)
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
                    <div key={year.year} className="relative" onMouseEnter={() => setOpenSubDropdown(year.year)}>
                      <span className="flex justify-between w-full items-center p-2 rounded cursor-pointer">
                        {year.year}
                        <ChevronDown className="w-4 h-4" />
                      </span>
                      {openSubDropdown === year.year && (
                        <ScrollArea
                          className="pl-4 mt-2"
                          style={{
                            maxHeight: '120px',
                            height: year.months.length <= 3 ? `${year.months.length * 40}px` : '120px',
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

          <SearchModal
            trigger={
              <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                <Search className="w-4 h-4" />
              </Button>
            }
          />

          <ModeToggle />
        </div>

        {/* Mobile 메뉴 */}
        <div className="flex lg:hidden items-center gap-2">
          <SearchModal
            trigger={
              <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                <Search className="w-4 h-4" />
              </Button>
            }
          />
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
                    {item.title.replace('▾', '')}
                  </Link>
                  {item.subItems && (
                    <button
                      className="ml-1 flex items-center"
                      onClick={() => {
                        const newDropdownState = openDropdown === item.title ? null : item.title
                        setOpenDropdown(newDropdownState)
                        if (newDropdownState !== null) {
                          setOpenSubDropdown(null)
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
                          onClick={() => setOpenSubDropdown(openSubDropdown === year.year ? null : year.year)}
                        >
                          {year.year}
                          <ChevronDown className="w-4 h-4" />
                        </button>

                        {openSubDropdown === year.year && (
                          <div className="mt-2">
                            {year.months.map((month) => (
                              <Link key={month.title} href={month.href} className="pl-7 py-1 text-sm block">
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
  )
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="p-1 bg-transparent shadow-none hover:bg-transparent active:bg-transparent"
    >
      {theme === 'light' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
