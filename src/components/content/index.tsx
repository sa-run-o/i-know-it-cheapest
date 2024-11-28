import Record from "./Record";
import { IOrderList } from "../../interfaces/order.interface";

interface IContent {
  orderList: IOrderList[];
  handleRemoveOrder: (indexToRemove: number) => void;
  handleInputChange: (
    index: number,
    field: keyof IOrderList,
    value: number
  ) => void;
}
const Content = ({
  orderList,
  handleRemoveOrder,
  handleInputChange,
}: IContent) => {
  return (
    <div className="w-full h-full px-2 overflow-y-scroll overflow-x-hidden">
      <div className="w-full flex items-center mb-2 text-xs">
        <div className="w-[20%] ml-[5%] text-center font-bold">Amount</div>
        <div className="w-[22%] ml-[1%] text-center font-bold">Size/Amount</div>
        <div className="w-[40%] ml-[1%] text-center font-bold">Total Price</div>
      </div>
      {orderList.map((order, idx) => {
        return (
          <Record
            key={idx}
            idx={idx}
            order={order}
            handleRemoveOrder={() => handleRemoveOrder(idx)}
            handleInputChange={handleInputChange}
          />
        );
      })}
    </div>
  );
};
export default Content;
