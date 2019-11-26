import React from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <>
      <h1>Payment Form</h1>
      <form className="payment-form">
        <h1>Payment Form</h1>
        <p>
          Required fields are followed by{" "}
          <strong>
            <abbr title="required"></abbr>*
          </strong>
          .
        </p>
        <section>
          <h2>Contact information</h2>
          <fieldset>
            <legend>Title</legend>
            <ul>
              <li>
                <label htmlFor="title_1">
                  <input type="radio" id="title_1" name="title" value="M." />
                  Mister
                </label>
              </li>
              <li>
                <label htmlFor="title_1">
                  <input type="radio" id="title_1" name="title" value="Ms." />
                  Miss
                </label>
              </li>
            </ul>
          </fieldset>
          <p>
            <label htmlFor="name">
              <span>Name: </span>
              <strong>
                <abbr title="required">*</abbr>
              </strong>
            </label>
            <input type="text" id="name" name="username" />
          </p>
          <p>
            <label htmlFor="mail">
              <span>E-mail: </span>
              <strong>
                <abbr title="required">*</abbr>
              </strong>
            </label>
            <input type="text" id="mail" name="usermail" />
          </p>
          <p>
            <label htmlFor="pwd">
              <span>Password: </span>
              <strong>
                <abbr title="required">*</abbr>
              </strong>
            </label>
            <input type="text" id="pwd" name="password" />
          </p>
        </section>
        <section>
          <h2>Payment information</h2>
          <p>
            <label htmlFor="card">
              <span>Card type:</span>
            </label>
            <select id="card" name="usercard">
              <option value="visa">Visa</option>
              <option value="mc">Mastercard</option>
              <option value="amex">American EXpress</option>
            </select>
          </p>
          <p>
            <label htmlFor="number">
              <span>Card number:</span>
              <strong>
                <abbr title="required">*</abbr>
              </strong>
            </label>
            <input type="tel" id="number" name="cardnumber" />
          </p>
          <p>
            <label htmlFor="date">
              <span>Expiration date:</span>
              <strong>
                <abbr title="required">*</abbr>
              </strong>
              <em>formatted as mm/yy</em>
            </label>
            <input type="date" id="date" name="expiration" />
          </p>
        </section>
        <p>
          <button type="submit">Validate the payment</button>
        </p>
      </form>
    </>
  );
};

export default PaymentForm;
