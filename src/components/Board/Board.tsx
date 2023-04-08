export function Board() {
  return (
    <div className='rounded-lg border'>
      <div className='flex m-6 mb-4 gap-x-24'>
        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Имя</p>
          <p className='font-bold text-2xl text-[#222527]'>Наталия</p>
        </div>

        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Телефон</p>
          <p className='font-bold text-2xl text-[#222527]'>
            +7 (747) 103-64-10
          </p>
        </div>

        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Телеграмм</p>
          <p className='font-bold text-2xl text-[#005BBB]'>@alimdesign</p>
        </div>

        <div className=''>
          <p className='font-light mb-1 text-[#222527]'>Необходимая сумма</p>
          <p className='font-bold text-2xl text-[#222527]'>100 000₸</p>
        </div>
      </div>

      <div className='px-8 py-6 border rounded-md mx-6 mb-6'>
        Lorem Ipsum - это текст - рыба, часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
        латинице с начала XVI века. В то время некий безымянный печатник создал
        большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
        распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
        изменений пять веков, но и перешагнул в электронный дизайн
      </div>
    </div>
  );
}
