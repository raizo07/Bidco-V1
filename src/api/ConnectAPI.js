export const connectWallet = async (dispatch, connect) => {
  const connection = await connect();
  if (connection && connection.isConnected) {
    const { selectedAddress: address, account } = connection;
    dispatch({
      type: "connectWallet",
      payload: { connection, address, account },
    });
  }
};

export const disconnectWallet = async (dispatch, disconnect) => {
  await disconnect();
  dispatch({
    type: "disconnectWallet",
  });
};
