import { memo, SVGProps } from 'react';

const SvgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9 1.19209e-07C4.02991 1.19209e-07 1.19209e-07 4.02991 1.19209e-07 9C1.19209e-07 13.9701 4.02991 18 9 18C13.9701 18 18 13.9701 18 9C18 4.02991 13.9701 1.19209e-07 9 1.19209e-07ZM9 16.4732C4.87366 16.4732 1.52679 13.1263 1.52679 9C1.52679 4.87366 4.87366 1.52679 9 1.52679C13.1263 1.52679 16.4732 4.87366 16.4732 9C16.4732 13.1263 13.1263 16.4732 9 16.4732Z'
      fill='#DEE1EA'
    />
    <path
      d='M11.242 5.07656C10.6393 4.54821 9.84375 4.25893 9 4.25893C8.15625 4.25893 7.36071 4.55022 6.75804 5.07656C6.13125 5.625 5.78571 6.36228 5.78571 7.15179V7.30446C5.78571 7.39286 5.85804 7.46518 5.94643 7.46518H6.91071C6.99911 7.46518 7.07143 7.39286 7.07143 7.30446V7.15179C7.07143 6.26585 7.93728 5.54464 9 5.54464C10.0627 5.54464 10.9286 6.26585 10.9286 7.15179C10.9286 7.77656 10.4866 8.34911 9.80156 8.61228C9.37567 8.775 9.01406 9.06027 8.75491 9.43393C8.49174 9.81562 8.35513 10.2737 8.35513 10.7377V11.1696C8.35513 11.258 8.42746 11.3304 8.51585 11.3304H9.48013C9.56853 11.3304 9.64085 11.258 9.64085 11.1696V10.7136C9.64189 10.5186 9.70167 10.3284 9.8124 10.1679C9.92313 10.0073 10.0797 9.88387 10.2616 9.81362C11.4469 9.35759 12.2123 8.31295 12.2123 7.15179C12.2143 6.36228 11.8687 5.625 11.242 5.07656ZM8.19643 13.4196C8.19643 13.6328 8.28109 13.8372 8.43179 13.9879C8.58249 14.1386 8.78688 14.2232 9 14.2232C9.21312 14.2232 9.41751 14.1386 9.56821 13.9879C9.71891 13.8372 9.80357 13.6328 9.80357 13.4196C9.80357 13.2065 9.71891 13.0021 9.56821 12.8514C9.41751 12.7007 9.21312 12.6161 9 12.6161C8.78688 12.6161 8.58249 12.7007 8.43179 12.8514C8.28109 13.0021 8.19643 13.2065 8.19643 13.4196Z'
      fill='#DEE1EA'
    />
  </svg>
);

const Memo = memo(SvgIcon2);
export { Memo as SvgIcon2 };
