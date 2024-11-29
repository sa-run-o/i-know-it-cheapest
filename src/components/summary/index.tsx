import { useEffect, useMemo, useState } from "react";
import { IOrderList } from "../../interfaces/order.interface";

interface ISummary {
  orderList: IOrderList[];
  setIsOpenSummary: React.Dispatch<React.SetStateAction<boolean>>;
  handleReset: () => void;
}
const Summary = ({ orderList, setIsOpenSummary, handleReset }: ISummary) => {
  const orderListFilter = useMemo(() => {
    // Filter out the record can not calculate
    return orderList.filter((e) => {
      return parseFloat(e.sizePerAmount) !== 0 && parseFloat(e.price) !== 0;
    });
  }, [orderList]);
  const [cheapestRecord, setCheapestRecord] = useState<IOrderList | undefined>(
    undefined
  );
  const [cheapestIndex, setCheapestIndex] = useState<number>(0);
  const [summaryCheapest, setSummaryCheapest] = useState<number[]>([]);
  const findCheapestItem = () => {
    // Calculate the cheapest from list
    const summaryResult = orderListFilter.map((e) => {
      return (
        parseFloat(e.price) /
        (parseFloat(e.sizePerAmount) * parseFloat(e.amount))
      );
    });
    const Cheapest = Math.min(...summaryResult);
    setSummaryCheapest(summaryResult);
    const cheapestIndexResult = summaryResult.indexOf(Cheapest);
    setCheapestIndex(cheapestIndexResult);
    const cheapestResult = orderListFilter[cheapestIndexResult];
    setCheapestRecord(cheapestResult);
  };
  const calculateCheaperPercentage = (expensive: number, cheaper: number) => {
    // Compare to be percent from 2 thing
    const percentageDifference = ((expensive - cheaper) / expensive) * 100;
    return percentageDifference.toFixed(2); // Return the result rounded to 2 decimal places
  };
  useEffect(() => {
    if (!orderListFilter.length) return;
    findCheapestItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderListFilter]);
  return (
    <div
      className="w-screen h-screen z-50  absolute left-0 top-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(60, 60, 60, 0.5)" }}
      onClick={() => setIsOpenSummary(false)}
    >
      <div
        className="bg-[#FAFAFA] text-[#333333] w-[90%] h-[90%] rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {orderListFilter.length ? (
          <div className="p-5 flex flex-col h-full justify-between">
            <div className="h-5/6 overflow-y-scroll">
              <div className="text-center text-xl">🏆 The winner is 🏆</div>
              <div className="text-center text-9xl mt-1">
                {cheapestRecord?.name}
              </div>
              <div className="text-center">{`(price: ${cheapestRecord?.price} size per amount: ${cheapestRecord?.sizePerAmount} amount: ${cheapestRecord?.amount})`}</div>
              <div className="text-center mb-4 text-xl">
                you pay {summaryCheapest[cheapestIndex]} per each.
              </div>
              {orderListFilter.map((e, idx) => {
                if (e.name === cheapestRecord?.name)
                  return <div key={idx}></div>;
                return (
                  <div key={idx}>{` cheaper than ${e.name}(${
                    summaryCheapest[idx]
                  }) = ${calculateCheaperPercentage(
                    summaryCheapest[idx],
                    summaryCheapest[cheapestIndex]
                  )}% per each`}</div>
                );
              })}
            </div>
            <div className="h-1/6">
              <div
                className="w-full flex justify-center items-center border rounded border-[#E0E0E0] h-14 mb-5 cursor-pointer"
                onClick={() => setIsOpenSummary(false)}
              >
                Back
              </div>
              <div
                className="w-full flex justify-center items-center border rounded border-[#E0E0E0] h-14 bg-[#27AE60] text-white cursor-pointer"
                onClick={() => {
                  setIsOpenSummary(false);
                  handleReset();
                }}
              >
                Reset
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 flex flex-col h-full justify-between">
            <div className="text-center h-5/6 flex justify-center flex-col items-center">
              <div className="text-3xl">Something went wrong.</div>
              <div>Please check your order and try again.</div>
            </div>
            <div className="h-1/6">
              <div
                className="w-full flex justify-center items-center border rounded border-[#E0E0E0] h-2/6 mb-5 cursor-pointer"
                onClick={() => setIsOpenSummary(false)}
              >
                Back
              </div>
              <div
                className="w-full flex justify-center items-center border rounded border-[#E0E0E0] h-3/6 bg-[#27AE60] text-white cursor-pointer"
                onClick={() => {
                  setIsOpenSummary(false);
                  handleReset();
                }}
              >
                Reset
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Summary;
