import { connect } from "get-starknet";
import illus from "../../assets/heroIllus.png";
import { useConnectWallet } from "../../context/ConnectContext";
import { connectWallet } from "../../api/ConnectAPI";

function HeroSection() {
  const { connection, dispatch } = useConnectWallet();
  return (
    <div
      style={{
        background:
          "linear-gradient(102deg, #012169 2.31%, #012169 54.18%, #01287E 56.58%, #013098 100%)",
      }}
      className="flex items-center justify-center gap-x-4 px-[80px] text-white"
    >
      <div>
        <h1 className="mb-8 text-[48px] font-normal leading-[57px]">
          Safely Bid, Buy, and Sell with BidCo&apos;s.
        </h1>
        <p className="text-base font-normal">
          BidCo is a safe online biding platform where you can bid on and buy
          items using cryptocurrency. Whether you want to sell items through
          bidding or buy by placing bids, BidCo makes the process simple and
          secure.
        </p>
        {!connection && (
          <button
            className="mt-8 flex cursor-pointer gap-x-[10px] bg-[#EB001B] p-4 text-base font-semibold"
            onClick={() => connectWallet(dispatch, connect)}
          >
            Connect wallet to login{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      <img src={illus} alt="" className="mt-[-60px] h-[660px] w-[686px]" />
    </div>
  );
}

export default HeroSection;
