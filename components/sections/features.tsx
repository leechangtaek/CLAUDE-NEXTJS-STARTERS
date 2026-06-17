import {
  Code2,
  Palette,
  Zap,
  Moon,
  Smartphone,
  Package,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PageContainer from '@/components/layout/page-container';

// 주요 기능 데이터
const features = [
  {
    title: 'Next.js 16',
    description: 'App Router, Server Components, 최신 기능을 즉시 활용하세요.',
    icon: Code2,
  },
  {
    title: 'TypeScript',
    description: 'Strict 모드로 타입 안전성을 확보하고 개발 경험을 향상시키세요.',
    icon: Package,
  },
  {
    title: 'Tailwind v4',
    description: 'CSS 변수 기반 설정으로 유연한 스타일링을 제공합니다.',
    icon: Palette,
  },
  {
    title: '성능 최적화',
    description: 'Image Optimization, Code Splitting 등으로 빠른 로딩을 보장합니다.',
    icon: Zap,
  },
  {
    title: '다크 모드',
    description: 'next-themes로 쉽게 라이트/다크 테마를 전환하세요.',
    icon: Moon,
  },
  {
    title: '반응형 디자인',
    description: '모바일부터 데스크톱까지 모든 기기에 최적화되어 있습니다.',
    icon: Smartphone,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <PageContainer>
        <div className="space-y-12">
          {/* 섹션 헤더 */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="inline-block">
              주요 기능
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              모든 개발자가 필요한 기능을 갖추었습니다
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Next.js, TypeScript, Tailwind CSS, shadcn/ui 등 최신 웹 기술로
              구성된 완성도 높은 스타터킷입니다.
            </p>
          </div>

          {/* 기능 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-md hover:border-primary/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
