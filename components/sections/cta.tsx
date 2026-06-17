'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PageContainer from '@/components/layout/page-container';

export default function CtaSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error('이메일을 입력해주세요');
      return;
    }

    setIsLoading(true);

    // 시뮬레이션: 실제로는 API 호출
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setEmail('');
    toast.success(`${email}로 뉴스레터 구독이 완료되었습니다!`);
  };

  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
      <PageContainer>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 제목 */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground">
              최신 업데이트와 유용한 팁을 받아보세요. 언제든지 구독 해제 가능합니다.
            </p>
          </div>

          {/* 이메일 구독 폼 */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="sm:w-auto"
            >
              {isLoading ? '구독 중...' : '구독하기'}
            </Button>
          </form>

          {/* 소셜 증명 */}
          <p className="text-sm text-muted-foreground">
            ✨ 5,000명 이상이 이미 구독 중입니다
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
