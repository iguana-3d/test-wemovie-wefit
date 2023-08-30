import React, { HTMLAttributes } from 'react';

const LogoSVG: React.FC<HTMLAttributes<SVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="101"
      height="16"
      viewBox="0 0 101 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.3359 1.22266L15.7031 15.5H12.2559L10.3223 8C10.2832 7.85677 10.2311 7.63867 10.166 7.3457C10.1009 7.05273 10.0326 6.73372 9.96094 6.38867C9.88932 6.03711 9.82422 5.70833 9.76562 5.40234C9.71354 5.08984 9.67773 4.84245 9.6582 4.66016C9.63867 4.84245 9.59961 5.08659 9.54102 5.39258C9.48893 5.69857 9.42708 6.02409 9.35547 6.36914C9.29036 6.71419 9.22526 7.03646 9.16016 7.33594C9.09505 7.63542 9.04297 7.86328 9.00391 8.01953L7.08008 15.5H3.64258L0 1.22266H2.97852L4.80469 9.01562C4.85677 9.25 4.91536 9.52995 4.98047 9.85547C5.05208 10.181 5.12044 10.5228 5.18555 10.8809C5.25716 11.2324 5.31901 11.5742 5.37109 11.9062C5.42969 12.2318 5.47201 12.515 5.49805 12.7559C5.5306 12.5085 5.57292 12.222 5.625 11.8965C5.67708 11.5645 5.73242 11.2292 5.79102 10.8906C5.85612 10.5456 5.92122 10.2266 5.98633 9.93359C6.05143 9.64062 6.11003 9.40299 6.16211 9.2207L8.24219 1.22266H11.1035L13.1836 9.2207C13.2292 9.39648 13.2812 9.63411 13.3398 9.93359C13.4049 10.2266 13.4701 10.5456 13.5352 10.8906C13.6003 11.2357 13.6589 11.5742 13.7109 11.9062C13.7695 12.2318 13.8118 12.515 13.8379 12.7559C13.8835 12.4303 13.9453 12.0365 14.0234 11.5742C14.1081 11.1055 14.196 10.64 14.2871 10.1777C14.3848 9.71549 14.4694 9.32812 14.541 9.01562L16.3574 1.22266H19.3359ZM25.4004 4.37695C26.4095 4.37695 27.2786 4.57227 28.0078 4.96289C28.737 5.34701 29.3001 5.9069 29.6973 6.64258C30.0944 7.37826 30.293 8.27669 30.293 9.33789V10.7832H23.252C23.2845 11.623 23.5352 12.2839 24.0039 12.7656C24.4792 13.2409 25.1367 13.4785 25.9766 13.4785C26.6732 13.4785 27.3112 13.4069 27.8906 13.2637C28.4701 13.1204 29.0658 12.9056 29.6777 12.6191V14.9238C29.1374 15.1908 28.571 15.3861 27.9785 15.5098C27.3926 15.6335 26.6797 15.6953 25.8398 15.6953C24.7461 15.6953 23.776 15.4935 22.9297 15.0898C22.0898 14.6862 21.429 14.071 20.9473 13.2441C20.472 12.4173 20.2344 11.3757 20.2344 10.1191C20.2344 8.8431 20.4492 7.7819 20.8789 6.93555C21.3151 6.08268 21.9206 5.44466 22.6953 5.02148C23.4701 4.5918 24.3717 4.37695 25.4004 4.37695ZM25.4199 6.49609C24.8405 6.49609 24.3587 6.68164 23.9746 7.05273C23.597 7.42383 23.3789 8.00651 23.3203 8.80078H27.5C27.4935 8.35807 27.4121 7.96419 27.2559 7.61914C27.1061 7.27409 26.8783 7.00065 26.5723 6.79883C26.2728 6.59701 25.8887 6.49609 25.4199 6.49609ZM38.9941 15.5L35.5566 4.29883H35.4688C35.4818 4.56576 35.5013 4.9694 35.5273 5.50977C35.5599 6.04362 35.5892 6.61328 35.6152 7.21875C35.6413 7.82422 35.6543 8.37109 35.6543 8.85938V15.5H32.9492V1.22266H37.0703L40.4492 12.1406H40.5078L44.0918 1.22266H48.2129V15.5H45.3906V8.74219C45.3906 8.29297 45.3971 7.77539 45.4102 7.18945C45.4297 6.60352 45.4525 6.04688 45.4785 5.51953C45.5046 4.98568 45.5241 4.58529 45.5371 4.31836H45.4492L41.7676 15.5H38.9941ZM61.5039 10.0215C61.5039 10.9329 61.3802 11.7402 61.1328 12.4434C60.8919 13.1465 60.5371 13.7422 60.0684 14.2305C59.6061 14.7122 59.0462 15.0768 58.3887 15.3242C57.7376 15.5716 57.002 15.6953 56.1816 15.6953C55.4134 15.6953 54.707 15.5716 54.0625 15.3242C53.4245 15.0768 52.8678 14.7122 52.3926 14.2305C51.9238 13.7422 51.5592 13.1465 51.2988 12.4434C51.0449 11.7402 50.918 10.9329 50.918 10.0215C50.918 8.81055 51.1328 7.78516 51.5625 6.94531C51.9922 6.10547 52.6042 5.46745 53.3984 5.03125C54.1927 4.59505 55.14 4.37695 56.2402 4.37695C57.2624 4.37695 58.1673 4.59505 58.9551 5.03125C59.7493 5.46745 60.3711 6.10547 60.8203 6.94531C61.276 7.78516 61.5039 8.81055 61.5039 10.0215ZM53.9551 10.0215C53.9551 10.7376 54.0332 11.3398 54.1895 11.8281C54.3457 12.3164 54.5898 12.6842 54.9219 12.9316C55.2539 13.179 55.6868 13.3027 56.2207 13.3027C56.748 13.3027 57.1745 13.179 57.5 12.9316C57.832 12.6842 58.0729 12.3164 58.2227 11.8281C58.3789 11.3398 58.457 10.7376 58.457 10.0215C58.457 9.29883 58.3789 8.69987 58.2227 8.22461C58.0729 7.74284 57.832 7.38151 57.5 7.14062C57.168 6.89974 56.735 6.7793 56.2012 6.7793C55.4134 6.7793 54.8405 7.04948 54.4824 7.58984C54.1309 8.13021 53.9551 8.94076 53.9551 10.0215ZM66.5625 15.5L62.4023 4.58203H65.5176L67.627 10.8027C67.7441 11.1673 67.8353 11.5514 67.9004 11.9551C67.972 12.3587 68.0208 12.7201 68.0469 13.0391H68.125C68.1445 12.694 68.1901 12.3262 68.2617 11.9355C68.3398 11.5449 68.4408 11.1673 68.5645 10.8027L70.6641 4.58203H73.7793L69.6191 15.5H66.5625ZM78.3301 4.58203V15.5H75.3516V4.58203H78.3301ZM76.8457 0.304688C77.2884 0.304688 77.6693 0.408854 77.9883 0.617188C78.3073 0.81901 78.4668 1.19987 78.4668 1.75977C78.4668 2.31315 78.3073 2.69727 77.9883 2.91211C77.6693 3.12044 77.2884 3.22461 76.8457 3.22461C76.3965 3.22461 76.0124 3.12044 75.6934 2.91211C75.3809 2.69727 75.2246 2.31315 75.2246 1.75977C75.2246 1.19987 75.3809 0.81901 75.6934 0.617188C76.0124 0.408854 76.3965 0.304688 76.8457 0.304688ZM85.9668 4.37695C86.9759 4.37695 87.8451 4.57227 88.5742 4.96289C89.3034 5.34701 89.8665 5.9069 90.2637 6.64258C90.6608 7.37826 90.8594 8.27669 90.8594 9.33789V10.7832H83.8184C83.8509 11.623 84.1016 12.2839 84.5703 12.7656C85.0456 13.2409 85.7031 13.4785 86.543 13.4785C87.2396 13.4785 87.8776 13.4069 88.457 13.2637C89.0365 13.1204 89.6322 12.9056 90.2441 12.6191V14.9238C89.7038 15.1908 89.1374 15.3861 88.5449 15.5098C87.959 15.6335 87.2461 15.6953 86.4062 15.6953C85.3125 15.6953 84.3424 15.4935 83.4961 15.0898C82.6562 14.6862 81.9954 14.071 81.5137 13.2441C81.0384 12.4173 80.8008 11.3757 80.8008 10.1191C80.8008 8.8431 81.0156 7.7819 81.4453 6.93555C81.8815 6.08268 82.487 5.44466 83.2617 5.02148C84.0365 4.5918 84.9382 4.37695 85.9668 4.37695ZM85.9863 6.49609C85.4069 6.49609 84.9251 6.68164 84.541 7.05273C84.1634 7.42383 83.9453 8.00651 83.8867 8.80078H88.0664C88.0599 8.35807 87.9785 7.96419 87.8223 7.61914C87.6725 7.27409 87.4447 7.00065 87.1387 6.79883C86.8392 6.59701 86.4551 6.49609 85.9863 6.49609ZM100.898 12.2578C100.898 13 100.723 13.6283 100.371 14.1426C100.026 14.6504 99.5085 15.0378 98.8184 15.3047C98.1283 15.5651 97.2689 15.6953 96.2402 15.6953C95.4785 15.6953 94.8242 15.6465 94.2773 15.5488C93.737 15.4512 93.1901 15.2884 92.6367 15.0605V12.5996C93.2292 12.8665 93.8639 13.0879 94.541 13.2637C95.2246 13.4329 95.8236 13.5176 96.3379 13.5176C96.9173 13.5176 97.3307 13.4329 97.5781 13.2637C97.832 13.0879 97.959 12.86 97.959 12.5801C97.959 12.3978 97.9069 12.235 97.8027 12.0918C97.7051 11.9421 97.4902 11.776 97.1582 11.5938C96.8262 11.4049 96.3053 11.1608 95.5957 10.8613C94.9121 10.5749 94.349 10.2852 93.9062 9.99219C93.4701 9.69922 93.1445 9.35417 92.9297 8.95703C92.7214 8.55339 92.6172 8.04232 92.6172 7.42383C92.6172 6.41471 93.0078 5.65625 93.7891 5.14844C94.5768 4.63411 95.6283 4.37695 96.9434 4.37695C97.6204 4.37695 98.265 4.44531 98.877 4.58203C99.4954 4.71875 100.13 4.93685 100.781 5.23633L99.8828 7.38477C99.3424 7.15039 98.8314 6.95833 98.3496 6.80859C97.8743 6.65885 97.3893 6.58398 96.8945 6.58398C96.4583 6.58398 96.1296 6.64258 95.9082 6.75977C95.6868 6.87695 95.5762 7.05599 95.5762 7.29688C95.5762 7.47266 95.6315 7.62891 95.7422 7.76562C95.8594 7.90234 96.0807 8.05534 96.4062 8.22461C96.7383 8.38737 97.2233 8.59896 97.8613 8.85938C98.4798 9.11328 99.0169 9.38021 99.4727 9.66016C99.9284 9.93359 100.28 10.2754 100.527 10.6855C100.775 11.0892 100.898 11.6133 100.898 12.2578Z"
        fill="white"
      />
    </svg>
  );
};

export default LogoSVG;
