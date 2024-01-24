function Footer() {
  return (
    <footer>
      <div className="border-b-solid footerLinks flex justify-between gap-x-[80px] border-b-[1px] border-b-[#D2D2D2] px-[170px] py-[60px] text-base font-normal text-[#B1B1B1]">
        <ul className="flex flex-col gap-y-3">
          <li className="mb-2 text-xl text-black">About Bidco</li>
          <li>
            <a href="#">About Bidco</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-3">
          <li className="mb-2 text-xl text-black">My Account</li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-3">
          <li className="mb-2 text-xl text-black">Buy and Sell</li>
          <li>
            <a href="#">How to buy</a>
          </li>
          <li>
            <a href="#">How to sell</a>
          </li>
          <li>
            <a href="#">Buyer Protection</a>
          </li>
          <li>
            <a href="#">Conditions of Business</a>
          </li>
          <li>
            <a href="#">Sellers terms</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-3">
          <li className="mb-2 text-xl text-black">More</li>
          <li>
            <a href="#">What is crytocurency</a>
          </li>
          <li>
            <a href="#">What is a crypto wallet?</a>
          </li>
          <li>
            <a href="#">What is a blockchain?</a>
          </li>
          <li>
            <a href="#">What are blockchain gas fees?</a>
          </li>
          <li>
            <a href="#">What is web3?</a>
          </li>
          <li>
            <a href="#">How to stay protected in web3</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between pb-[61px] pl-[169px] pr-[96px] pt-[39px] text-base font-normal text-[#b1b1b1]">
        <h6>(c) 2024, Bidco.com</h6>
        <div className="flex items-center gap-x-[47px]">
          <h6>
            <a href="#">Terms of Use</a>
          </h6>
          <h6>
            <a href="#">Data Protection & Privacy Notice</a>
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
