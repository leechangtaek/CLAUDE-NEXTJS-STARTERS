import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Code, Share2, Mail } from 'lucide-react';

const footerSections = [
  {
    title: '제품',
    links: [
      { label: '기능', href: '#features' },
      { label: '가격', href: '#pricing' },
      { label: '문서', href: '/docs' },
      { label: '변경 로그', href: '/changelog' },
    ],
  },
  {
    title: '회사',
    links: [
      { label: '소개', href: '/about' },
      { label: '블로그', href: '/blog' },
      { label: '채용', href: '/careers' },
      { label: '문의', href: '/contact' },
    ],
  },
  {
    title: '법적',
    links: [
      { label: '개인정보처리방침', href: '/privacy' },
      { label: '이용약관', href: '/terms' },
      { label: '쿠키 정책', href: '/cookies' },
      { label: '라이선스', href: '/license' },
    ],
  },
];

const socialLinks = [
  {
    icon: Code,
    href: 'https://github.com',
    label: 'GitHub',
    ariaLabel: '깃허브 링크',
  },
  {
    icon: Share2,
    href: 'https://twitter.com',
    label: 'X',
    ariaLabel: 'X 링크',
  },
  {
    icon: Mail,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    ariaLabel: '링크드인 링크',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 메인 푸터 콘텐츠 */}
        <div className="py-12">
          {/* 브랜드 + 소셜 링크 */}
          <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 font-bold text-lg mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold">
                  WS
                </div>
                <span>Starter Kit</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Next.js 16과 최신 웹 기술로 구성된 완성도 높은 웹 스타터킷.
                빠르게 프로젝트를 시작하세요.
              </p>
              {/* 소셜 링크 */}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* 푸터 섹션 (3열) */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-sm mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <Separator />

        {/* 카피라이트 */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Starter Kit. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
