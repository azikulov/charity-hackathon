import { useState } from 'react';

import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function BoardPage() {
  const router = useRouter();
  const [tab, setTab] = useState<'jusan' | 'crypto' | 'kaspi' | 'qr'>('jusan');

  return (
    <Layout>
      <Header />

      <main className='container my-10 flex items-start gap-36'>
        <button
          className='flex items-center font-light gap-x-2 text-[#808080]'
          onClick={() => router.back()}
        >
          <svg
            width='22'
            height='8'
            viewBox='0 0 22 8'
            fill='none'
            className='mb-[2px]'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21 4.5C21.2761 4.5 21.5 4.27614 21.5 4C21.5 3.72386 21.2761 3.5 21 3.5V4.5ZM0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM21 3.5H1V4.5H21V3.5Z'
              fill='#808080'
            />
          </svg>
          <span>Вернуться назад</span>
        </button>

        <div className=''>
          <h1 className='font-bold italic text-[#222527] text-4xl'>
            Сделать пожертвование
          </h1>

          <div className='flex gap-x-6 mt-6'>
            <button
              onClick={() => setTab('jusan')}
              className={`${
                tab === 'jusan'
                  ? 'border-t-[#EC712D] text-[#EC712D] font-bold'
                  : 'italic font-light border-t[#DEDEDE]'
              } border-t-2`}
            >
              Jusan QR
            </button>
            <button
              onClick={() => setTab('crypto')}
              className={`${
                tab === 'crypto'
                  ? 'font-bold text-[#F6D658] border-t-[#F6D658]'
                  : 'italic font-light border-t-[#DEDEDE]'
              } border-t-2`}
            >
              Crypto
            </button>
            <button
              onClick={() => setTab('kaspi')}
              className={`${
                tab === 'kaspi'
                  ? 'font-bold text-[#F14635] border-t-[#F14635]'
                  : 'italic font-light border-t-[#DEDEDE]'
              } border-t-2`}
            >
              Kaspi QR
            </button>
            <button
              onClick={() => setTab('qr')}
              className={`${
                tab === 'qr'
                  ? 'font-bold text-[#005BBB] border-t-[#005BBB]'
                  : 'italic font-light border-t-[#DEDEDE]'
              } border-t-2`}
            >
              QR-Код
            </button>
          </div>

          {tab === 'jusan' && <JusanQR />}
          {tab === 'crypto' && <Crypto />}
          {tab === 'kaspi' && <KaspiQR />}
          {tab === 'qr' && <QRCode />}
        </div>
      </main>

      <Footer />
    </Layout>
  );
}

function JusanQR() {
  return (
    <div className='w-[400px] h-[400px] border-2 rounded-3xl mt-8 mb-8 p-6'>
      <Image
        src={require('@/assets/images/jusanqr.jpg')}
        alt='qr code'
        className=''
      />
    </div>
  );
}

function Crypto() {
  return (
    <form className='mt-4'>
      <div className='grid grid-cols-2 gap-x-6 gap-y-3'>
        <div className='' aria-label='field'>
          <p className=''>Ваш номер счета</p>
          <input
            type='text'
            placeholder='Введите номер счета'
            className='px-4 rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>

        <div className='' aria-label='field'>
          <p className=''>Наш адрес</p>
          <input
            type='text'
            placeholder='Введите номер счета'
            value={'DS717DA7128D94'}
            className='px-4 rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>

        <div className='' aria-label='field'>
          <p className=''>Сумма ввода</p>
          <input
            type='text'
            placeholder='Введите сумму'
            className='px-4 rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>

        <div className='' aria-label='field'>
          <p className=''>Криптовалюта</p>

          <select
            className='px-4 w-full bg-white rounded-md font-neue-inktrap focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
            name=''
            id=''
          >
            <option value='USDT'>USDT</option>
            <option value='BTC'>BTC</option>
            <option value='ETH'>ETH</option>
          </select>
        </div>

        <div className='' aria-label='field'>
          <p className=''>Имя</p>
          <input
            type='text'
            placeholder='Введите имя'
            className='px-4 rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>

        <div className='' aria-label='field'>
          <p className=''>Фамилия</p>
          <input
            type='text'
            placeholder='Введите фамилию'
            className='px-4 rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>
      </div>

      <br />

      <button
        className='flex items-center w-fit text-base italic bg-[#005BBB] gap-x-5 py-2 px-6 rounded-lg border border-[#005BBB]'
        type='submit'
      >
        <span className='text-[#fff]'>Внести донат</span>
        <svg
          width='64'
          height='64'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-7 h-7'
        >
          <circle cx='32' cy='32' r='32' fill='#FFD605' />
          <path
            d='M20 44L44 20M44 20H25.7391M44 20V36.6957'
            stroke='#222527'
            strokeWidth='2'
          />
        </svg>
      </button>
    </form>
  );
}

function KaspiQR() {
  return (
    <Image
      src={require('@/assets/images/qr.png')}
      alt='qr code'
      className='w-[400px] h-[400px] border-2 rounded-3xl bg-[#eee] mt-8 mb-8'
    />
  );
}

function QRCode() {
  return (
    <div className='w-[400px] h-[400px] border-2 rounded-3xl bg-[#eee] mt-8 mb-8'>
      QRCode
    </div>
  );
}
