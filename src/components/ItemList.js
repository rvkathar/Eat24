import Veg from "../utility/Icons/Veg.png";
import NonVeg from "../utility/Icons/NonVeg.png";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-grey-200"
        >
          <div className="">
            <p>
              {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
                <img src={Veg} />
              ) : (
                <img src={NonVeg} />
              )}
            </p>

            <span className="font-bold">{item.card.info.name}</span>
            <p className="font-semibold">
              ₹
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </p>
          </div>
          <p className="text-sm">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
