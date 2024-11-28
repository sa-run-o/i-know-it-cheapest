interface IHeader {
  setIsOpenTutorial: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ setIsOpenTutorial }: IHeader) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center "
      onClick={() => setIsOpenTutorial(true)}
    >
      <div className="w-[90%] h-[80%] border-2 border-[#E0E0E0] rounded-lg flex flex-col justify-center items-center bg-[#ECF0F1]">
        <div className="text-2xl font-bold">I KNOW IT CHEAPEST</div>
        <div className="text-xs font-thin">
          Click here to more information and support!
        </div>
      </div>
    </div>
  );
};
export default Header;
