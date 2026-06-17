'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

// 네비게이션 메뉴 항목
const navItems = [
  { label: '홈', href: '/' },
  { label: '기능', href: '#features' },
  { label: '소개', href: '#about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold">
              WS
            </div>
            <span className="hidden sm:inline">Starter Kit</span>
          </Link>

          {/* 데스크톱 네비게이션 메뉴 */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* 우측 액션 버튼들 */}
          <div className="flex items-center space-x-2">
            {/* 다크모드 토글 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="테마 전환"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* 시작하기 버튼 (데스크톱) */}
            <Button
              variant="default"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="#cta">시작하기</Link>
            </Button>

            {/* 모바일 메뉴 토글 */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="메뉴 열기"
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="space-y-4 py-4">
                  {/* 모바일 네비게이션 링크 */}
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-border pt-4">
                    <Button
                      variant="default"
                      className="w-full"
                      asChild
                      onClick={closeMenu}
                    >
                      <Link href="#cta">시작하기</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
