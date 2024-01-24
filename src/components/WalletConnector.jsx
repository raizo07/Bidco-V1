import { connect, disconnect } from "get-starknet";
import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet, disconnectWallet } from "../api/ConnectAPI";

function WalletConnector() {
  const { dispatch, connection } = useConnectWallet();
  return (
    <>
      {connection ? (
        <>
          <button
            className="rounded bg-[#EB001B] p-[12px] text-sm font-semibold text-white"
            onClick={() => disconnectWallet(dispatch, disconnect)}
          >
            Disconnect Wallet
          </button>
        </>
      ) : (
        <button
          className="rounded bg-[#EB001B] p-[12px] text-sm font-semibold text-white"
          onClick={() => connectWallet(dispatch, connect)}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}

export default WalletConnector;
