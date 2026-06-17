import PageContainer from '@/components/layout/page-container';

// 통계 데이터
const stats = [
  {
    value: '1000+',
    label: '활성 개발자',
  },
  {
    value: '500+',
    label: '생성된 프로젝트',
  },
  {
    value: '99.9%',
    label: '업타임',
  },
  {
    value: '24/7',
    label: '커뮤니티 지원',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24">
      <PageContainer>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
