import { memo, SVGProps } from 'react';

const SvgIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 5.27321H10.0661L13.6036 0.803571C13.6768 0.708928 13.6107 0.571428 13.4911 0.571428H6.64286C6.59286 0.571428 6.54464 0.598214 6.51964 0.642857L1.89286 8.63393C1.8375 8.72857 1.90536 8.84821 2.01607 8.84821H5.13036L3.53393 15.2339C3.5 15.3732 3.66786 15.4714 3.77143 15.3714L14.0982 5.51786C14.1911 5.43036 14.1286 5.27321 14 5.27321ZM5.61071 11.9375L6.6875 7.63393H3.87679L7.2625 1.7875H11.2732L7.55357 6.48929H11.3214L5.61071 11.9375Z'
      fill='white'
      fillOpacity={0.25}
    />
  </svg>
);

const Memo = memo(SvgIcon6);
export { Memo as SvgIcon6 };
