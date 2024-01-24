function TimeFilter() {
  const times = [
    {
      text: "1H",
    },
    {
      text: "6H",
    },
    {
      text: "24H",
    },
    {
      text: "1D",
    },
    {
      text: "7D",
    },
    {
      text: "30D",
    },
    {
      text: "ALL",
    },
  ];
  return (
    <div className="bg-[#f5f5f5] p-[2px] text-base font-semibold">
      {times.map((time, i) => (
        <button
          key={i}
          className={
            i === 2
              ? "rounded-sm bg-primaryColor px-[24px] py-[13px] text-white"
              : "rounded-sm bg-transparent px-[24px] py-[13px] transition-all duration-200 ease-out hover:bg-primaryColor hover:text-white"
          }
        >
          {time.text}
        </button>
      ))}
    </div>
  );
}

export default TimeFilter;
