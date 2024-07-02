import { memo, SVGProps } from 'react';

const ImgDownSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.8125 3H11.6406C11.5609 3 11.4859 3.03906 11.4391 3.10313L7 9.22188L2.56094 3.10313C2.51406 3.03906 2.43906 3 2.35938 3H1.1875C1.08594 3 1.02656 3.11563 1.08594 3.19844L6.59531 10.7937C6.79531 11.0687 7.20469 11.0687 7.40312 10.7937L12.9125 3.19844C12.9734 3.11563 12.9141 3 12.8125 3Z'
      fill='white'
      fillOpacity={0.25}
    />
  </svg>
);

const Memo = memo(ImgDownSvgIcon);
export { Memo as ImgDownSvgIcon };
