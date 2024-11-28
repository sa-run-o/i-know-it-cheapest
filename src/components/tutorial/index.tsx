import qrpp from "../../assets/qrpp.jpg";
interface ITutorial {
  setIsOpenTutorial: React.Dispatch<React.SetStateAction<boolean>>;
}
const Tutorial = ({ setIsOpenTutorial }: ITutorial) => {
  return (
    <div
      className="w-screen h-screen z-50  absolute left-0 top-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(60, 60, 60, 0.5)" }}
      onClick={() => setIsOpenTutorial(false)}
    >
      <div
        className="bg-[#FAFAFA] text-[#333333] w-[90%] h-[90%] rounded-md overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="font-bold text-2xl">
            👋🏼How to install this application to your mobile.
          </div>
          <div className="mt-1">
            <div>For Android:</div>
            <div
              className="cursor-pointer underline text-[#4A90E2]"
              onClick={() =>
                window.open(
                  "https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DAndroid&oco=0"
                )
              }
            >
              support.google.com/Android
            </div>
             
          </div>
          <div>
            <div>For IOS:</div>
            <div
              className="cursor-pointer underline text-[#4A90E2]"
              onClick={() =>
                window.open(
                  "https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DiOS&oco=0"
                )
              }
            >
              support.google.com/iOS
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="font-bold text-2xl">☕️Support me!</div>
          <div className="mt-2 h-[40%]">
            <img src={qrpp} alt="qr" className="border border-[#E0E0E0]" />
          </div>
        </div>
        <div className="p-5 h-[10%]">
          <div
            className="w-full flex justify-center items-center border rounded border-[#E0E0E0] h-full mb-5 cursor-pointer"
            onClick={() => setIsOpenTutorial(false)}
          >
            Close
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tutorial;
