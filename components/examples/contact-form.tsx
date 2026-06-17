'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

// 폼 유효성 스키마 (zod)
const contactFormSchema = z.object({
  name: z.string().min(2, { message: '이름은 2자 이상이어야 합니다.' }),
  email: z.string().email({ message: '유효한 이메일을 입력하세요.' }),
  message: z.string().min(10, { message: '메시지는 10자 이상이어야 합니다.' }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: '약관에 동의해주세요.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// react-hook-form + zod 패턴의 예제 폼 컴포넌트
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  // 폼 제출 핸들러
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // 시뮬레이션: 실제로는 API 호출
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    reset();
    toast.success('메시지가 전송되었습니다. 감사합니다!');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md space-y-6"
    >
      {/* 이름 필드 */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          이름
        </label>
        <Input
          id="name"
          placeholder="Your name"
          {...register('name')}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* 이메일 필드 */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          이메일
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register('email')}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* 메시지 필드 */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          메시지
        </label>
        <Textarea
          id="message"
          placeholder="Your message here..."
          rows={5}
          {...register('message')}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* 약관 동의 */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          {...register('agreeTerms')}
          disabled={isSubmitting}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          약관 및 개인정보처리방침에 동의합니다.
        </label>
      </div>
      {errors.agreeTerms && (
        <p className="text-sm text-destructive">{errors.agreeTerms.message}</p>
      )}

      {/* 제출 버튼 */}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? '전송 중...' : '메시지 전송'}
      </Button>
    </form>
  );
}
