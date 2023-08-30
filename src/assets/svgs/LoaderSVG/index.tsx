import React, { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

const infiniteRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const SVGLoaderContainer = styled.svg`
  animation: ${infiniteRotate} 1s linear infinite;
`;

interface IProps extends HTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
}

const LoaderSVG: React.FC<IProps> = ({ ...props }) => {
  return (
    <SVGLoaderContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient id="spinner-secondHalf">
          <stop offset="0%" stopOpacity="0" stopColor="#E6E6E6" />
          <stop offset="100%" stopOpacity="0.5" stopColor="#808080" />
        </linearGradient>
        <linearGradient id="spinner-firstHalf">
          <stop offset="0%" stopOpacity="1" stopColor="#E6E6E6" />
          <stop offset="100%" stopOpacity="0.5" stopColor="#808080" />
        </linearGradient>
      </defs>

      <g strokeWidth="8">
        <path
          stroke="url(#spinner-secondHalf)"
          d="M 4 100 A 96 96 0 0 1 196 100"
        />
        <path
          stroke="url(#spinner-firstHalf)"
          d="M 196 100 A 96 96 0 0 1 4 100"
        />
      </g>
    </SVGLoaderContainer>
  );
};

export default LoaderSVG;
