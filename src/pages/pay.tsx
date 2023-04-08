import Link from 'next/link';
import { useState } from 'react';

import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Header } from '@/components/Header';

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

function JusanQR() {
  return (
    <Image
      src={require('@/assets/images/qr.png')}
      alt='qr code'
      className='w-[400px] h-[400px] border-2 rounded-3xl bg-[#eee] mt-8 mb-8'
    />
  );
}

function Crypto() {
  return <div className=''>Crypto</div>;
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
