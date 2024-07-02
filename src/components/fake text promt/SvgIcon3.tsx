import { memo, SVGProps } from 'react';

const SvgIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.46429 1.57143H8.53571C8.63095 1.57143 8.67857 1.61905 8.67857 1.71429V14.2857C8.67857 14.381 8.63095 14.4286 8.53571 14.4286H7.46429C7.36905 14.4286 7.32143 14.381 7.32143 14.2857V1.71429C7.32143 1.61905 7.36905 1.57143 7.46429 1.57143Z'
      fill='#DEE1EA'
    />
    <path
      d='M2.28571 7.32143H14.2857C14.381 7.32143 14.4286 7.36905 14.4286 7.46429V8.53571C14.4286 8.63095 14.381 8.67857 14.2857 8.67857H1.71429C1.61905 8.67857 1.57143 8.63095 1.57143 8.53571V7.46429C1.57143 7.36905 1.61905 7.32143 1.71429 7.32143H2.28571Z'
      fill='#DEE1EA'
    />
  </svg>
);

const Memo = memo(SvgIcon3);
export { Memo as SvgIcon3 };
