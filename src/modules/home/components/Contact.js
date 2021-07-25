import React, { memo } from "react";

function Contact() {
  return (
    <div className="contact">
      <h6>RETAIL STOCKS AVAILABLE</h6>
      <div className="rte-setting">
        <p>
          <strong>Brotherbird Bakehouse</strong>
          <br></br>
          114 Lavender Street (CT Hub 2)
          <br></br>
          #01-05, S338729
          <br></br>
          <em>10:00am - 3:00pm / till sold out</em>
          <br></br>
          <span>-</span>
          <br></br>
          <strong>Brotherbird Coffeehouse</strong>
          <br></br>
          32 Bali Lane, S189868
          <br></br>
          <em>10:00am - 4:00pm (mon-tue)</em>
          <br></br>
          <em>10:00am - 6:00pm (wed-sun)</em>
          <br></br>
          (Dine-in service reopens on the 01 JULY)
        </p>
      </div>
    </div>
  );
}

export default memo(Contact);
