import ItemsTable from "../components/ItemsTable";
import NavFilter from "../components/NavFilter";
import TopCategories from "../components/TopCategories";
import BiddingBanner from "../components/BiddingBanner";
import Footer from "../components/Footer";
import HeroSection from "../features/home/HeroSection";
import { useConnectWallet } from "../context/ConnectContext";
import { connect } from "get-starknet";
import { connectWallet } from "../api/ConnectAPI";

function HomePage() {
  const { connection, dispatch } = useConnectWallet();
  return (
    <div>
      <NavFilter />
      <HeroSection />
      <ItemsTable />
      <div className="mb-10 px-[80px]">
        {!connection && (
          <button
            className="homeConnect  flex w-full items-center justify-center gap-x-[10px] rounded bg-[#f5f5f5] py-5 text-center text-xl font-bold text-black transition-all duration-200 ease-out hover:bg-primaryColor hover:text-white"
            onClick={() => connectWallet(dispatch, connect)}
          >
            Connect Wallet
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 12.5H20.5M20.5 12.5L14.5 6.5M20.5 12.5L14.5 18.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      <TopCategories />
      <div className=" border-b-solid border-b-[1px] border-b-[#d2d2d2] px-20 py-10">
        <BiddingBanner />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
