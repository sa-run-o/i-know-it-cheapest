import { useState } from "react";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";
import { IOrderList } from "../interfaces/order.interface";
import AddButton from "../components/AddButton";
import Summary from "../components/summary";
import Tutorial from "../components/tutorial";

const DEFAULT_ORDER_LIST = [
  {
    name: "A",
    amount: 1,
    sizePerAmount: 0,
    price: 0,
  },
  {
    name: "B",
    amount: 1,
    sizePerAmount: 0,
    price: 0,
  },
];
const Home = () => {
  const [orderList, setOrderList] = useState<IOrderList[]>(DEFAULT_ORDER_LIST);
  const [isOpenSummary, setIsOpenSummary] = useState<boolean>(false);
  const [isOpenTutorial, setIsOpenTutorial] = useState<boolean>(false);
  const handleAddNewOrder = () => {
    // Add the new record to orderList
    const result = [...orderList];
    const lastName = result[result.length - 1].name;
    if (String.fromCharCode(lastName.charCodeAt(0)) === "Z") return;
    const nextName = String.fromCharCode(lastName.charCodeAt(0) + 1);
    result.push({ name: nextName, amount: 1, sizePerAmount: 0, price: 0 });
    setOrderList(result);
  };
  const handleRemoveOrder = (indexToRemove: number) => {
    // Remove order by index
    const result = [...orderList];
    result.splice(indexToRemove, 1);
    setOrderList(result);
  };
  const handleInputChange = (
    index: number,
    field: keyof IOrderList,
    value: number
  ) => {
    // Check is it number?
    const numericValue = Number(value);
    if (isNaN(numericValue)) {
      return; // Exit if the value is not a number
    }
    // Update Order by index
    setOrderList((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };
  const handleReset = () => [
    // Reset Order list to default
    setOrderList(DEFAULT_ORDER_LIST),
  ];
  return (
    <div className="w-screen h-screen grid grid-cols-1 grid-rows-12 gap-5 relative bg-[#FAFAFA] text-[#333333]">
      {isOpenSummary && (
        <Summary
          orderList={orderList}
          setIsOpenSummary={setIsOpenSummary}
          handleReset={handleReset}
        />
      )}
      {isOpenTutorial && <Tutorial setIsOpenTutorial={setIsOpenTutorial} />}
      <AddButton handleAddNewOrder={handleAddNewOrder} />
      <div className="row-span-2">
        <Header setIsOpenTutorial={setIsOpenTutorial} />
      </div>
      <div className="row-span-9 overflow-y-scroll">
        <Content
          orderList={orderList}
          handleRemoveOrder={handleRemoveOrder}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="row-span-2">
        <Footer setIsOpenSummary={setIsOpenSummary} />
      </div>
    </div>
  );
};

export default Home;
