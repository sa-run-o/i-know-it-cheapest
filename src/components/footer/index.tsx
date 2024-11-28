interface IFooter {
  setIsOpenSummary: React.Dispatch<React.SetStateAction<boolean>>;
}
const Footer = ({ setIsOpenSummary }: IFooter) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center border-t border-[#E0E0E0] text-2xl font-bold bg-[#4A90E2] text-[#FAFAFA] shadow"
      onClick={() => setIsOpenSummary(true)}
    >
      KNOW IT!
    </div>
  );
};
export default Footer;
