import React from "react";

export type InputType = {
  className?: string;
  smile1?: string;
  image?: string;
  attach?: string;
  location1?: string;
};

const Input: React.FC<InputType> = ({
  className = "",
  smile1,
  image,
  attach,
  location1,
}) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-col items-start justify-start p-[2rem] box-border max-w-full text-left text-[0.875rem] text-gray-2 font-plus-jakarta-sans ${className}`}
    >
      <div className="self-stretch rounded-31xl bg-whitesmoke-100 flex flex-row items-center justify-start p-[0.75rem] box-border gap-[1rem] max-w-full mq850:flex-wrap">
        {smile1 && (
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
            loading="lazy"
            alt=""
            src={smile1}
          />
        )}
        <div className="flex-1 relative leading-[0.625rem] font-medium inline-block min-w-[8.313rem] max-w-full">
          Escreva sua mensagem...
        </div>
        {image && (
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={image}
          />
        )}
        {attach && (
          <img
            className="h-[1.5rem] w-[1.5rem] relative"
            loading="lazy"
            alt=""
            src={attach}
          />
        )}
        {location1 && (
          <img
            className="h-[1.5rem] w-[1.5rem] relative"
            loading="lazy"
            alt=""
            src={location1}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
