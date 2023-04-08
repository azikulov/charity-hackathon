import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout>
      <Header />

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
            href='/pay'
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
                strokeWidth='2'
              />
            </svg>
          </Link>
        </div>

        <div className='flex items-end justify-between my-8 mx-16'>
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
            href='/pay'
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

      <Footer />
    </Layout>
  );
}
