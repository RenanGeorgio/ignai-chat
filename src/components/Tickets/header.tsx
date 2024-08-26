export const TicketsHeader = () => {
  return (
    <div className="self-stretch border-darkslategray-300 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[2.25rem] px-[2rem] pb-[2.125rem] gap-[0.75rem] mq450:flex-wrap">
      <h1 className="m-0 flex-1 relative text-inherit leading-[2.5rem] font-semibold font-[inherit] inline-block min-w-[9.063rem] mq450:text-[1.188rem] mq450:leading-[1.5rem] mq850:text-[1.625rem] mq850:leading-[2rem]">
        Messagens
      </h1>
      <div className="h-[3rem] w-[3rem] rounded-31xl border-darkslategray-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.687rem]">
        <img
          className="h-[1.5rem] w-[1.5rem] relative"
          alt=""
          src="/icon16lineedit.svg"
        />
      </div>
      <div className="h-[3rem] w-[3rem] rounded-31xl border-darkslategray-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.687rem]">
        <img
          className="h-[1.5rem] w-[1.5rem] relative"
          alt=""
          src="/search.svg"
        />
      </div>
    </div>
  );
}