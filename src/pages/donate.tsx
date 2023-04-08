import { Layout } from '@/components/Layout';
import { createRef } from 'react';

export default function Donate() {
  const inputRef = createRef<HTMLInputElement>();

  function handleSelect(value: string) {
    return function () {
      const inputElement = inputRef.current as HTMLInputElement;

      inputElement.value = value;
    };
  }

  return (
    <Layout>
      <div className='m-6'>
        <h1 className='italic text-4xl text-center'>C&DC</h1>
        <br />

        <div className='border rounded-md p-4'>
          <p className='text-center font-neue-inktrap'>
            Укажите или выберите сумму
          </p>
          <hr className='my-4' />

          <p className='flex justify-center items-center gap-x-2'>
            <input
              ref={inputRef}
              className='text-3xl outline-none w-44 text-right mt-2 mb-3'
              placeholder='0'
            />
            <span className='text-3xl'>$</span>
          </p>
          <p className='text-sm text-[#808080] text-center'>
            Минимальная сумма 10 %
          </p>
        </div>

        <ul className='flex justify-between items-center mt-4'>
          <li
            onClick={handleSelect('1000')}
            className='whitespace-nowrap px-2 text-[#005BBB] border border-[#005BBB] text-lg rounded-md'
          >
            1 000 $
          </li>
          <li
            onClick={handleSelect('5000')}
            className='whitespace-nowrap px-2 border border-[#005BBB] text-lg rounded-md bg-[#005BBB] text-white'
          >
            5 000 $
          </li>
          <li
            onClick={handleSelect('10000')}
            className='whitespace-nowrap px-2 text-[#005BBB] border border-[#005BBB] text-lg rounded-md'
          >
            10 000 $
          </li>
        </ul>

        <h2 className='text-center text-xl mt-5'>Курс валюты</h2>

        <div
          className='px-4 rounded-md font-neue-inktrap focus:border-[#222527] border font-light italic text-[#222527] py-2'
          aria-label='field'
        >
          <select className='outline-none w-full bg-white'>
            <option value='USDT'>USDT</option>
            <option value='BTC'>BTC</option>
            <option value='ETH'>ETH</option>
          </select>
        </div>

        <h2 className='text-center text-xl mt-4'>Данные карты</h2>

        <div className='mt-3' aria-label='field'>
          <input
            type='text'
            placeholder='Номер карты'
            className='px-4 w-full rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>

        <div className='mt-3' aria-label='field'>
          <input
            type='text'
            placeholder='Срок действия'
            className='px-4 w-full rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>

        <div className='mt-3' aria-label='field'>
          <input
            type='text'
            placeholder='CVV-код'
            className='px-4 w-full rounded-md focus:border-[#222527] border outline-none font-light italic text-[#222527] py-2'
          />
        </div>

        <button className='bg-[#005BBB] w-full rounded-lg mt-8 py-2 flex items-center justify-center gap-x-3'>
          <span className='text-white'>Внести пожертвование</span>

          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='12' r='12' fill='white' />
            <path
              d='M5.63604 12.0001H18.364M18.364 12.0001L13.5218 7.15793M18.364 12.0001L13.9369 16.4272'
              stroke='#005BBB'
            />
          </svg>
        </button>

        <br className='mb-12' />
      </div>
    </Layout>
  );
}