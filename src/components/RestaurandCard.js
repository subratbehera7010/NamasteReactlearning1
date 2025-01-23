import { CDN_URL } from "../utils/constants.JS";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[430px] bg-gray-100 rounded-lg hover:bg-gray-400">
      <img
        className="h-[150px] w-[240px] rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="whitespace-normal break-words">{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

//* Will write the higher order function if I have promoted label on my restaurant card. As I dont have in my API, i am just writing it for learning*/
//input - Restaurant card ==>> Restaurant card Promoted

export const withPromotedLabel = (RestaurantCard) => {
  return (/**props */) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard /*{...props}*/ />
      </div>
    );
  };
};

export default RestaurantCard;
