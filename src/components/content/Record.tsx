import { IOrderList } from "../../interfaces/order.interface";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";

interface IRecord {
  order: IOrderList;
  handleRemoveOrder: () => void;
  idx: number;
  handleInputChange: (
    index: number,
    field: keyof IOrderList,
    value: string
  ) => void;
}
const Record = ({
  order,
  handleRemoveOrder,
  idx,
  handleInputChange,
}: IRecord) => {
  return (
    <div className="w-full h-20 flex items-center mb-2">
      <div className="w-[5%] text-center">{order.name}</div>
      <div className="h-full w-[20%] ml-[1%]">
        <input
          className="h-full w-full border border-[#E0E0E0] px-2 text-3xl rounded-md"
          onChange={(e) => handleInputChange(idx, "amount", e.target.value)}
          value={`${order.amount}`}
        />
      </div>
      <div className="h-full w-[22%] ml-[1%]">
        <input
          className="h-full w-full border border-[#E0E0E0] px-2 text-3xl rounded-md"
          type="text"
          pattern="^\d*\.?\d*$"
          onChange={(e) =>
            handleInputChange(idx, "sizePerAmount", e.target.value)
          }
          value={`${order.sizePerAmount}`}
        />
      </div>
      <div className="h-full w-[40%] ml-[1%]">
        <input
          className="h-full w-full border border-[#E0E0E0] px-2 text-3xl rounded-md"
          onChange={(e) => handleInputChange(idx, "price", e.target.value)}
          value={`${order.price}`}
        />
      </div>
      {idx !== 1 && idx !== 0 && (
        <div
          className="w-[8%] ml-[2%] text-center"
          onClick={() => handleRemoveOrder()}
        >
          <RemoveIcon />
        </div>
      )}
    </div>
  );
};
export default Record;
