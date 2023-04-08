import { IBoard } from './types';

export function Board(props: IBoard) {
  return (
    <div className='rounded-lg border'>
      <div className='flex m-6 mb-4 gap-x-24'>
        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Имя</p>
          <p className='font-bold text-2xl text-[#222527]'>{props.full_name}</p>
        </div>

        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Телефон</p>
          <p className='font-bold text-2xl text-[#222527]'>
            {props.phone_number}
          </p>
        </div>

        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Телеграмм</p>
          <a
            href={`https://t.me/${'props.telegram'.replace('@', '')}`}
            target='_blank'
            className='font-bold text-2xl text-[#005BBB]'
          >
            {props.telegram || '@johndoe'}
          </a>
        </div>

        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Необходимая сумма</p>
          <p className='font-bold text-2xl text-[#222527]'>
            {props.required_amount} ₸
          </p>
        </div>
      </div>

      <div className='px-8 py-6 border rounded-md mx-6 mb-6'>
        {props.message}
      </div>
    </div>
  );
}
