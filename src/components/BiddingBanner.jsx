function BiddingBanner() {
  return (
    <div
      className="w-full rounded  p-12"
      style={{
        background:
          "linear-gradient(237deg, #FF5F00 30.82%, #FF8339 47.09%, #FF711D 55.1%)",
      }}
    >
      <h1 className="text-[47px] font-semibold text-white">
        Bidding and Buying
        <br />
        just got safer you.
      </h1>
      <p className="mb-[30px] mt-9 text-base font-normal text-white">
        Safely buy and sell on Bidco – our decentralized platform <br />
        guarantees a worry-free experience, securing your funds <br />
        for a transparent marketplace and unique finds.
      </p>
      <button
        className="bg-white p-[15px] text-base font-semibold text-black"
        onClick={() => scrollTo({ behavior: "smooth", top: 0, left: 0 })}
      >
        Get Started
      </button>
    </div>
  );
}

export default BiddingBanner;
