import { FaRegClock, FaStar } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestCard = ({ data }) => {
  return (
    <Link to={`/restaurant/${data.id}`} className="shadow rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer hover:shadow-lg">
      <img src={data.photo} alt={data.name} className="w-full object-contain" />
      <div className="p-3">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{data.name}</h3>
          <p className="flex gap-2 items-center">
            <FaStar className="text-red-500" />
            {data.rating}
          </p>
        </div>
        <p className="text-sm my-2 text-gray-500">
          <span>{data.minPrice}$ minimum</span>
        </p>
        <div className="flex gap-4">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <FaRegClock />
            {data.estimatedDelivery} minutes
          </p>
          {data.isDeliveryFree && (
            <p className="flex items-center gap-2 text-sm font-bold text-red-500">
              <MdDeliveryDining className="text-2xl"/>
              ücretsiz
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestCard;
