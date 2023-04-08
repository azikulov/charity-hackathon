import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();

  return (
    <header className='container py-3 flex items-center justify-between'>
      <Link
        href='/'
        className='inline-block text-2xl font-neue-plain text-[#222527] italic'
      >
        C&DC
      </Link>

      <div className='font-light text-sm'>
        <span className='text-base text-[#005BBB] font-normal'>RUS</span>
        /ENG/ҚАЗ
      </div>

      <nav className='flex gap-6'>
        <Link
          href='/'
          className={`${
            router.pathname === '/'
              ? 'text-[#005BBB] border-b-2 border-b-[#005BBB] font-bold'
              : 'font-light text-[#222527]'
          } inline-block`}
        >
          Главная
        </Link>

        <Link
          href='/board'
          className={`${
            router.pathname.includes('/board')
              ? 'text-[#005BBB] border-b-2 border-b-[#005BBB] font-bold'
              : 'font-light text-[#222527]'
          } inline-block`}
        >
          Доска обьявлений
        </Link>

        <Link
          href='/reporting'
          className={`${
            router.pathname.includes('/reporting')
              ? 'text-[#005BBB] border-b-2 border-b-[#005BBB] font-bold'
              : 'font-light text-[#222527]'
          } inline-block`}
        >
          Отчётность
        </Link>
      </nav>

      <Link
        href='/pay'
        className='flex items-center gap-x-3 py-1 px-4 rounded border border-[#005BBB]'
      >
        <span className='mt-[2px] italic  font-light text-[#005BBB]'>
          Внести донат
        </span>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
        >
          <circle cx='16' cy='16' r='16' fill='#005BBB' />
          <path d='M10 22L22 10M22 10H12.8696M22 10V18.3478' stroke='white' />
        </svg>
      </Link>
    </header>
  );
}
