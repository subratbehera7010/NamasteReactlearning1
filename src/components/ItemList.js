import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <div className="py-2 flex justify-between">
              <div className="w-10/12">
                <span>{item.card.info.name}</span>
                {/* prettier-ignore */}
                <span> - ₹ {item.card.info.price ? item.card.info.price / 100: item.card.info.defaultPrice / 100}</span>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-2/12">
                <div className="absolute">
                  <button className="bg-black text-white shadow-lg rounded-lg mx-6 my-16">
                    Add +
                  </button>
                </div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-24 h-20 rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
