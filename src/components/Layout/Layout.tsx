import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';

const fontNeueInktrap = localFont({
  src: [
    {
      path: '../../assets/fonts/PPNeueMachina-InktrapLight.otf',
      weight: '300',
    },
    {
      path: '../../assets/fonts/PPNeueMachina-InktrapRegular.otf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/PPNeueMachina-InktrapUltrabold.otf',
      weight: '900',
    },
  ],

  variable: '--font-neue-inktrap',
});

export function Layout(props: PropsWithChildren) {
  return (
    <div
      className={`${fontNeueInktrap.variable} font-neue-inktrap flex flex-col h-screen`}
    >
      {props.children}
    </div>
  );
}
