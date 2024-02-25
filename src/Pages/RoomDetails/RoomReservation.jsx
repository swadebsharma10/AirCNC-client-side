import Button from "../../components/Button/Button";
import Calender from "../../components/Calender/Calender";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$200</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
      <hr />
      <Calender />
      <hr />
        <div className="p-4">
            <Button label={'Reserve'}/>
        </div>
      <div className="p-4 flex flex-row justify-between items-center font-semibold text-lg">
      <div>Total</div>
      <div>$300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
