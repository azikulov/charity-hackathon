import { Layout } from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout>
      <header className='container py-3 flex items-center justify-between'>
        <Link
          href='#'
          className='inline-block text-2xl font-neue-plain text-[#222527] italic'
        >
          C&DC
        </Link>

        <nav className='flex gap-6'>
          <Link
            href='/'
            className='inline-block text-[#005BBB] border-b-2 border-b-[#005BBB] font-bold'
          >
            Главная
          </Link>
          <Link href='#' className='inline-block font-light text-[#222527]'>
            Доска обьявлений
          </Link>
        </nav>

        <Link
          href='#'
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

      <main className='container mb-12 mt-16'>
        <div className='flex gap-x-36'>
          <p className='font-bold text-5xl flex-shrink-0'>
            Помогаем Восстановить <br /> Школы в{' '}
            <span className='text-[#005BBB]'>Укра</span>
            <span className='text-[#FFD605]'>ине</span>
          </p>

          <p className='text-[#222527] font-light'>
            Lorem Ipsum - это текст-рыба, часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
            латинице с начала XVI века
          </p>
        </div>

        <div className='flex items-center justify-center gap-32 my-8'>
          <ul className=''>
            <li className='flex items-center gap-2 font-light text-lg'>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
              >
                <path
                  d='M1 21L21 1M21 1H5.78261M21 1V14.913'
                  stroke='#222527'
                />
              </svg>
              Хронология проекта
            </li>

            <li className='flex items-center gap-2 font-light text-lg'>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
              >
                <path
                  d='M1 21L21 1M21 1H5.78261M21 1V14.913'
                  stroke='#222527'
                />
              </svg>
              СМИ о нас
            </li>

            <li className='flex items-center gap-2 font-light text-lg'>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
              >
                <path
                  d='M1 21L21 1M21 1H5.78261M21 1V14.913'
                  stroke='#222527'
                />
              </svg>
              Реквизиты Фонда
            </li>
          </ul>

          <Link
            href='#'
            className='flex items-center w-fit text-2xl italic bg-[#005BBB] gap-x-5 py-5 px-12 rounded-lg border border-[#005BBB]'
          >
            <span className='text-[#fff]'>Внести донат</span>

            <svg
              width='64'
              height='64'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
            >
              <circle cx='32' cy='32' r='32' fill='#FFD605' />
              <path
                d='M20 44L44 20M44 20H25.7391M44 20V36.6957'
                stroke='#222527'
                stroke-width='2'
              />
            </svg>
          </Link>
        </div>

        <div className='flex items-end justify-between my-8'>
          <div className='font-light text-sm'>
            <span className='text-base text-[#005BBB] font-normal'>RUS</span>
            /ENG/ҚАЗ
          </div>

          <Image
            src={require('@/assets/images/image1.png')}
            width={384}
            alt=''
          />

          <Image
            src={require('@/assets/images/image2.png')}
            width={524}
            alt=''
          />
        </div>
      </main>

      <br />

      <section className='container my-12'>
        <div className='grid grid-cols-3 gap-y-5 grid-rows-3'>
          <div
            className='text-4xl indent-32 text-[#222527] border-b border-[#808080] mb-2'
            style={{ gridArea: '1 / 2 / 2 / 4' }}
          >
            С начала полномасштабной войны в Украине в результате ракетныхударов
            свыше <span className='text-[#005BBB] font-bold'>2500</span> учебных
            заведений были повреждены
          </div>

          <Image
            style={{ gridArea: '1 / 1 / 3 / 2' }}
            width={353}
            height={400}
            src={require('@/assets/images/image3.png')}
            alt=''
          />
          <div
            className='text-3xl text-[#222527]'
            style={{ gridArea: '3 / 1 / 4 / 2' }}
          >
            Более <span className='font-bold text-[#FFD605]'>400</span> учебных
            заведений разрушены полностью
          </div>
          <Image
            src={require('@/assets/images/image4.png')}
            alt=''
            width={747}
            height={243}
            className='w-full'
            style={{ gridArea: '2 / 2 / 4 / 4' }}
          />
        </div>
      </section>

      <section className='container flex gap-x-32 mb-36'>
        <div className='flex flex-col justify-between flex-shrink-0 w-[433px]'>
          <div className='flex flex-col gap-10'>
            <p className='text-[#222527] italic font-bold text-5xl'>
              Почему нам <br /> стоит доверять?
            </p>

            <p className='text-[#222527] text-lg'>
              Наша некоммерческая организация была основана с целью оказания
              помощи детям, пострадавшим от войны на Востоке Украины, а также
              семьям переселенцев, оказавшихся в трудных условиях, многодетным и
              кризисным семьям, детским домам, интернатам
            </p>
          </div>

          <Link
            href='#'
            className='flex items-center w-fit text-2xl italic text-[#222527] bg-[#FFD605] gap-x-5 py-5 px-12 rounded-lg border border-[#FFD605]'
          >
            <span>Внести донат</span>

            <svg
              width='64'
              height='64'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
            >
              <circle cx='32' cy='32' r='32' fill='#005BBB' />
              <path
                d='M20 44L44 20M44 20H25.7391M44 20V36.6957'
                stroke='#fff'
                stroke-width='2'
              />
            </svg>
          </Link>
        </div>

        <div className='flex flex-col w-full'>
          <div className='mb-10'>
            <p className='font-bold text-7xl italic mb-5'>1 835</p>
            <p className='text-xl text-[#222527]'>
              семей уже получили помощь <br /> с участием нашего фонда
            </p>
          </div>

          <hr />

          <div className='mb-10 mt-10'>
            <p className='font-bold text-7xl italic mb-5'>3 112</p>
            <p className='text-xl text-[#222527]'>
              проектов по благотворительности <br /> успешно выполненые
            </p>
          </div>

          <hr />

          <div className='mt-10'>
            <p className='font-bold text-7xl italic mb-5'>684</p>
            <p className='text-xl text-[#222527]'>
              мероприятия по реабилитации <br /> для детей проведены
            </p>
          </div>
        </div>
      </section>

      <footer className='bg-[#222527]'>
        <div className='container py-12 flex justify-between'>
          <div className='flex flex-col justify-between'>
            <div className='grid gap-y-5'>
              <Link href='/' className='text-2xl italic text-white'>
                C&DC
              </Link>

              <p className='text-white'>
                Лучший в свом деле <br /> - да, король на месте
              </p>
            </div>

            <div className='text-white'>by al1m_design</div>
          </div>

          <div className='flex gap-12'>
            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Алтай</div>
              <div className='text-white'>- Backend Developer</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@h_eimu</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 073 6981</div>
            </div>

            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Алим</div>
              <div className='text-white'>- UI/UX Дизайнер</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@alimdesign</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 103 6410</div>
            </div>

            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Маулен</div>
              <div className='text-white'>- Frontend Developer</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@azikulov</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 400 6125</div>
            </div>

            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Марк</div>
              <div className='text-white'>- Backend Developer</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@Samangelof</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 675 8154</div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
