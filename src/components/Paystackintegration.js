import { React, useState } from "react";
import PaystackPop from "@paystack/inline-js";

const Paystackintegration = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLirstName] = useState("");
  const paywithpaystack = (e) => {
    e.preventDefault();
    alert("please fill all boxes");
  };
  return (
    <div className="w3-container W3-row">
      <div className="w3-container w3-blue">
        <h3 className="w3-center">Make payment</h3>
      </div>
      <div className="w3-container w3-card-4">
        <div className="w3-container w3-quarter"></div>
        <div className="w3-container w3-half">
          <form id="paymentForm">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w3-input"
                id="email-address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="tel"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w3-input"
                id="amount"
              />
            </div>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w3-input"
                id="first-name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLirstName(e.target.value)}
                className="w3-input"
                id="last-name"
              />
            </div>
            <div className="form-submit">
              <button
                className="w3-btn w3-block w3-blue"
                type="submit"
                onClick={paywithpaystack}
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Paystackintegration;
