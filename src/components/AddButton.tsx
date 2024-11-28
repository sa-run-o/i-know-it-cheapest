interface IAddButton {
  handleAddNewOrder: () => void;
}
const AddButton = ({ handleAddNewOrder }: IAddButton) => {
  return (
    <div
      className="bg-[#4A90E2] text-[#FAFAFA] fixed right-5 bottom-16 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer text-2xl font-bold shadow-md"
      onClick={() => handleAddNewOrder()}
    >
      +
    </div>
  );
};
export default AddButton;
