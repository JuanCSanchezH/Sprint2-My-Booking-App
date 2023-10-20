import "../priceDetails/style.scss"

export const PriceDetails = () => {
  return (
    <div className="price_details_container">
      <h2 className="price_details_title">
        <span>$</span>Price details
      </h2>
      <hr />
      <div className="price_details_basic">
        <p>Adult basic fee</p>
        <p>$150</p>
      </div>
      <div className="price_details_tax">
        <p>Tax</p>
        <p>included</p>
      </div>
      <div className="price_details_regular">
        <p>Regular total price</p>
        <p>$150</p>
      </div>
      <div className="price_details_save">
        <p>Save</p>
        <p>- $1.5</p>
      </div>
      <hr />
      <div className="price_details_total">
        <p>Total</p>
        <p>$148.5</p>
      </div>
    </div>
  );
};

export default PriceDetails;
