import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <a href="https://x.com/M_Umar92" target="_blank" className="icon icon-x">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2H21.552L14.36 10.218L22.8 22H16.172L10.978 14.892L4.756 22H1.444L9.144 13.194L1.2 2H7.996L12.684 8.488L18.244 2ZM17.088 20H18.92L6.996 4H5.028L17.088 20Z" />
          </svg>
        </a>

        <a href="https://www.facebook.com/people/Umar-Shaikh/pfbid0mEAew3E21QYuZr3heZY7DCr64JNC8e6DQ17fmbpcyCPgQ8XhLVJCooKHW7e9TaUJl/" target="_blank" className="icon icon-facebook">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
          </svg>
        </a>

        <a href="https://github.com/umar-shaikh92" target="_blank" className="icon icon-github">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/muhammad-umar-949390255" target="_blank" className="icon icon-in">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    column-gap: 14px;
  }

  .icon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    text-decoration: none;
    font-size: 25px;
    outline: 2px solid white;
    border-radius: 50%;
    transition-property: outline-offset, outline-color, background-color;
    transition-duration: 0.25s;
    color: white;
    cursor: pointer;
  }

  .icon:hover {
    outline-offset: 4px;
  }

  .icon svg {
    margin: auto;
    width: 31px;
  }

  .icon-instagram:hover {
    background-color: red;
    outline-color: red;
  }

  .icon-dis:hover {
    background-color: rgb(76, 0, 255);
    outline-color: rgb(76, 0, 255);
  }
  .icon-x:hover {
    background-color: #303030;
    outline-color: #303030;
  }
  .icon-github:hover {
background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);
    outline-color: #8e32ac;
  }
  .icon-in:hover {
    background-color: #0a66c2;
    outline-color: #0a66c2;
  }
  .icon-facebook:hover {
    background-color: #0a66c2;
    outline-color: #0a66c2;
  }
  .icon:hover svg {
    animation: shake 0.25s;
  }

  @keyframes shake {
    10% {
      transform: rotate(15deg);
    }
    20% {
      transform: rotate(-15deg);
    }
  }
`;

export default Button;
