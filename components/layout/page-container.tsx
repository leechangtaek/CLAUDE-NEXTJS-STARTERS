import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

// 일관된 너비와 패딩을 제공하는 래퍼 컴포넌트
export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
