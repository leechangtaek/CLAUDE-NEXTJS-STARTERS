import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/layout/page-container';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* 배경 도트 패턴 */}
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* 그라디언트 블러 배경 */}
      <div className="absolute -top-1/2 right-0 -z-10 h-screen w-1/2 rounded-full blur-3xl bg-primary/10" />
      <div className="absolute -bottom-1/2 left-0 -z-10 h-screen w-1/2 rounded-full blur-3xl bg-secondary/10" />

      <PageContainer>
        <div className="flex flex-col items-center justify-center text-center md:text-left md:flex-row md:justify-between gap-8">
          {/* 좌측 콘텐츠 */}
          <div className="flex-1 space-y-6">
            {/* 배지 */}
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-3 py-1"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              새로운 기능 출시 →
            </Badge>

            {/* 제목 */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                <span className="block">완성도 높은</span>
                <span className="bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
                  웹 스타터킷
                </span>
              </h1>

              {/* 부제목 */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui로 구성된
                모던한 스타터킷. 빠르게 프로젝트를 시작하세요.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
              <Button size="lg" asChild>
                <Link href="#features" className="gap-2">
                  시작하기
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com" target="_blank">
                  GitHub 보기
                </Link>
              </Button>
            </div>

            {/* 소셜 증명 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-muted-foreground justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/50 border-2 border-background"
                    />
                  ))}
                </div>
                <span>1000+ 개발자가 사용 중</span>
              </div>
            </div>
          </div>

          {/* 우측 시각 요소 */}
          <div className="flex-1">
            <div className="relative">
              {/* 코드 블록 미리보기 */}
              <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-lg overflow-hidden shadow-xl">
                <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-auto text-xs font-mono text-muted-foreground">
                    components/layout/header.tsx
                  </span>
                </div>

                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-primary">
                    <span className="text-muted-foreground">import</span> &#123;
                    Header &#125;{' '}
                    <span className="text-muted-foreground">from</span>{' '}
                    <span className="text-green-500">'@/components/layout'</span>
                  </div>

                  <div className="mt-4 text-muted-foreground">
                    <span className="text-primary">export default function</span>{' '}
                    <span className="text-blue-500">App</span>()
                    <span className="text-muted-foreground"> &#123;</span>
                  </div>

                  <div className="pl-4">
                    <div className="text-muted-foreground">
                      <span className="text-primary">return</span> (
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      &lt;
                      <span className="text-primary">Header</span> /&gt;
                    </div>
                    <div className="text-muted-foreground">)</div>
                  </div>

                  <div className="text-muted-foreground">&#125;</div>
                </div>
              </div>

              {/* 데코레이션 배지 */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                빠른 설정
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
