import { Fragment } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function ReportingPage() {
  const [isOpen, setIsOpen] = useState({
    meetingList: true,
    managedUse: false,
  });
  const [expenses, setExpenses] = useState<any[]>([]);
  const [reports, setReports] = useState<any[]>([]);

  function fetchReportingData() {
    fetch('https://charity-hackathon.herokuapp.com/api/expenses/')
      .then((res) => res.json())
      .then((data) => setExpenses(data));

    fetch('https://charity-hackathon.herokuapp.com/api/financial_reports/')
      .then((res) => res.json())
      .then((data) => setReports(data));
  }

  function collectedAmount() {
    let amount = 0;

    reports.forEach((report) => (amount += Number(report.amount)));

    return amount;
  }

  function totalAmount() {
    let amount = 0;

    expenses.forEach((expense) => (amount += Number(expense.amount)));

    return amount;
  }

  useEffect(() => {
    fetchReportingData();
  }, []);

  return (
    <Layout>
      <Header />

      <main className='container grid grid-cols-3 gap-x-6 py-8'>
        <div>
          <div className='bg-[#FFF8D2] p-8 rounded-2xl'>
            <h2 className='text-xl'>Мы смоги собрать...</h2>

            <hr className='my-5 bg-[#DEDEDE]' />

            <h2 className='text-xl'>Собранная сумма</h2>
            <h1 className='mt-3 font-bold italic text-xl'>
              {collectedAmount()} ₸
            </h1>
          </div>

          <div
            className={`${
              isOpen.meetingList ? '' : 'h-12 overflow-hidden'
            } bg-[#EDF6FF] mt-4 h- rounded-xl`}
          >
            <div
              onClick={() =>
                setIsOpen((prev) => ({
                  ...prev,
                  meetingList: !prev.meetingList,
                }))
              }
              className='flex select-none justify-between items-center px-8 py-3'
            >
              <span className='font-light'>Список собраний</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className={`${isOpen.meetingList ? 'rotate-180' : ''} w-6 h-6`}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>

            <div className='px-8 pb-4 flex flex-col gap-y-2'>
              <hr className='mt-1 mb-4' />

              {reports.map((report, index) => (
                <Fragment key={index}>
                  <div className=''>
                    <div className='font-light mb-1'>ФИО</div>
                    <div className='font-bold'>{report.full_name}</div>
                  </div>

                  <div className=''>
                    <div className='font-light mb-1'>Номер телефона</div>
                    <div className='font-bold'>{report.phone_number}</div>
                  </div>

                  <div className=''>
                    <div className='font-light mb-1'>Телеграмм</div>
                    <div className='font-bold text-[#005BBB]'>
                      {report.telegram}
                    </div>
                  </div>

                  <div className=''>
                    <div className='font-light mb-1'>Вводимая сумма</div>
                    <div className='font-bold'>{report.amount} ₸</div>
                  </div>

                  <div className=''>
                    <div className='font-light mb-1'>Дата пожертвования</div>
                    <div className='font-bold'>
                      {moment(report.donation_date).format('LLL')}
                    </div>
                  </div>

                  <hr className='my-4' />
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className=''>
          <div className='border-[#005BBB] border p-8 rounded-2xl'>
            <h2 className='text-xl'>Успели использовать...</h2>

            <hr className='my-5 bg-[#DEDEDE]' />

            <h2 className='text-xl'>Общая сумма</h2>
            <h1 className='mt-3 font-bold italic text-xl'>{totalAmount()} ₸</h1>
          </div>

          <div
            className={`${
              isOpen.managedUse ? '' : 'h-12 overflow-hidden'
            } border border-[#005BBB] mt-4 h- rounded-xl`}
          >
            <div
              onClick={() =>
                setIsOpen((prev) => ({
                  ...prev,
                  managedUse: !prev.managedUse,
                }))
              }
              className='flex select-none justify-between items-center px-8 py-3'
            >
              <span className='font-light'>Список собраний</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className={`${isOpen.managedUse ? 'rotate-180' : ''} w-6 h-6`}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>

            <div className='px-8 pb-4 flex flex-col gap-y-2'>
              <hr className='mt-1 mb-4' />
              {expenses.map((expense, index) => (
                <Fragment key={index}>
                  <div className=''>
                    <div className='font-light mb-1'>Используемая сумма</div>
                    <div className='font-bold'>{expense?.amount} ₸</div>
                  </div>

                  <div className=''>
                    <div className='font-light mb-1'>Описание</div>
                    <div className='font-bold'>{expense?.description}</div>
                  </div>

                  <div className='border p-4 rounded-xl'>
                    <div className='font-light mb-1'>Комментарий</div>
                    <div className='font-bold'>{expense?.comment}</div>
                  </div>

                  <hr className='my-4' />
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className='border-[#808080] h-fit border p-8 rounded-2xl'>
          <h2 className='text-xl'>Осталось всего...</h2>

          <hr className='my-5 bg-[#DEDEDE]' />

          <h2 className='text-xl'>Оставшаяся сумма</h2>
          <h1 className='mt-3 font-bold italic text-xl'>
            {collectedAmount() + totalAmount()} ₸
          </h1>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
