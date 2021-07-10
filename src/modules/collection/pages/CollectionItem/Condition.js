import React, { memo } from "react";

function Condition() {
  return (
    <div className="item-desc">
      <p className="hash">ORDERING ONLINE</p>
      <p>
        1. Due to system constraints, please ensure each checkout only contains{" "}
        <strong>
          <u>1</u>
        </strong>{" "}
        delivery date and <strong>1</strong> delivery address, with a maximum of{" "}
        <strong>5</strong> boxes.
      </p>
      <p style={{ marginTop: "50px" }}>
        2. In the event that you were able to checkout with two different dates
        in a single cart, the total quantity of the boxes ordered will instead
        be{" "}
        <strong>
          <u>combined</u>
        </strong>{" "}
        and sent only on the{" "}
        <strong>
          <u>earlier</u>
        </strong>{" "}
        delivery date selected. The later delivery date will be{" "}
        <strong>
          <u>voided</u>
        </strong>{" "}
        and{" "}
        <strong>
          <u>no refunds</u>
        </strong>{" "}
        will be issued.
      </p>
      <div className="hr-line"></div>
      <p className="hash">ISLAND-WIDE DELIVERY ORDERS</p>
      <p>
        3. Delivery is charged at a flat fee of{" "}
        <strong>$10.00 per location</strong>, for a maximum of{" "}
        <strong>5</strong> boxes.
      </p>
      <p>
        4. Delivery will be between <strong>12.00 pm to 3.00 pm</strong> daily.
        We are not able to cater to specific delivery timings.
      </p>
      <div className="hr-line"></div>
      <p className="hash">SELF-COLLECTION ORDERS</p>
      <p>5. Self-collections are available at:</p>
      <p className="hash" style={{ marginTop: "50px" }}>
        CTHUB 2, 114 Lavender Street, #01-05, Singapore 338729{" "}
      </p>
      <p> 10.30am to 2.30pm, Daily</p>
      <p className="hash" style={{ marginTop: "50px" }}>
        32 bali lane, Singapore 189868
      </p>
      <p>10.00am to 4.00pm (mon-tue)</p>
      <p>10.00am to 6.00pm (wed-sun)</p>
      <div className="hr-line"></div>
      <p className="hash">TERMS & CONDITIONS</p>
      <p>1. No refunds will be issued for:</p>
      <ul>
        <li>Order cancellations</li>
        <li>
          Late collections (past operating hours) whereby orders will be voided
        </li>
        <li>
          Submission of 2 different delivery dates per checkout for online
          ordering (as explained in Point 2 above)
        </li>
      </ul>
      <p style={{ marginTop: "20px" }}>
        2. Strictly no changing of order details (e.g. delivery address,
        pre-order dates etc) upon submission of orders.
      </p>
      <p style={{ marginTop: "20px" }}>
        3. All pre-order boxes come as a 6 flavour assorted box (one of each
        flavour). Strictly no swapping/customisation of flavours.
      </p>
      <div className="hr-line"></div>
      <p className="hash">PURCHASE THIS DATE-SLOT FOR THE MONTH OF JULY</p>
      <p className="hash">JULY 2021 flavours</p>
      <p style={{ fontWeight: "bold", marginBottom: "0" }}>
        MANGO STICKY RICE TWICE-BAKED
      </p>
      <p>
        <i>
          mango compote with fresh mango cube, pandan mochi and marshmallow slab
        </i>
      </p>
      <p style={{ fontWeight: "bold", marginBottom: "0" }}>
        MENTAIKO PRAWN TWICE-BAKED
      </p>
      <p>
        <i>mentaiko prawn filling, mozzarella, shredded chilli</i>
      </p>
      <p style={{ fontWeight: "bold", marginBottom: "0" }}>ROCHER CROISSANT</p>
      <p>
        <i>hazelnut filling, chocolate glaze and toasted almonds</i>
      </p>
      <p style={{ fontWeight: "bold", marginBottom: "0" }}>
        PASSIONFRUIT MERINGUE CROISSANT
      </p>
      <p>
        <i>passionfruit curd and torched italian meringue</i>
      </p>
      <p style={{ fontWeight: "bold", marginBottom: "0" }}>
        DUCK CONFIT TWICE-BAKED
      </p>
      <p>
        <i>homemade duck confit, veloute sauce, orange jam, cheddar cheese</i>
      </p>
      <p style={{ fontWeight: "bold", marginBottom: "0" }}>
        ORIGINAL CROISSANT
      </p>
      <p>
        <i>sugar glazed and sea salt</i>
      </p>
    </div>
  );
}
export default memo(Condition);
