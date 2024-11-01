"use client";

import InputFeatured from "@/components/InputFeatured";
import { useState } from "react";
import Link from "next/link";

export default function DonatePage() {
  const [amount, setAmount] = useState<number>();
  const [isRecurring, setIsRecurring] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("Visa");
  const [paypalEmail, setPaypalEmail] = useState<string>("");
  const [visaCardNumber, setVisaCardNumber] = useState<string>("");
  const [visaExpiryDate, setVisaExpiryDate] = useState<string>("");
  const [visaCVV, setVisaCVV] = useState<string>("");
  const [mobileMoneyProvider, setMobileMoneyProvider] =
    useState<string>("MoMo Pay");
  const [mobileMoneyPhoneNumber, setMobileMoneyPhoneNumber] =
    useState<string>("");

  const handleDonate = () => {
    if (paymentMethod === "PayPal" && !paypalEmail) {
      alert("Please enter your PayPal email.");
      return;
    } else if (
      paymentMethod === "Visa" &&
      (!visaCardNumber || !visaExpiryDate || !visaCVV)
    ) {
      alert("Please fill in all Visa card details.");
      return;
    } else if (paymentMethod === "Mobile Money" && !mobileMoneyPhoneNumber) {
      alert("Please enter your Mobile Money phone number.");
      return;
    }

    // Add payment processing logic here
    console.log("Processing donation via", paymentMethod);

    // After successful payment:
    setThankYou(true);
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    const isBaseFormValid = donorName && donorEmail && (amount ?? 0) > 0; // Check if base fields are filled
    const isPaymentValid =
      (paymentMethod === "PayPal" && paypalEmail) ||
      (paymentMethod === "Visa" &&
        visaCardNumber &&
        visaExpiryDate &&
        visaCVV) ||
      (paymentMethod === "Mobile Money" && mobileMoneyPhoneNumber);

    return isBaseFormValid && isPaymentValid; // Return true only if both conditions are met
  };

  return (
    <div className="bg-gray-50 py-16 px-6 text-black">
      {!thankYou ? (
        <>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Support Our Mission
          </h2>

          {/* Suggested Donation Tiers */}
          <section className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-4">Choose an Amount</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setAmount(10)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
              >
                $10
              </button>
              <button
                onClick={() => setAmount(25)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
              >
                $25
              </button>
              <button
                onClick={() => setAmount(50)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
              >
                $50
              </button>
            </div>
          </section>

          {/* Donation Form */}
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
            {/* Name Input */}
            <InputFeatured
              type="text"
              label="Name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="block w-full bg-gray-100 rounded border-gray-300 mb-4"
            />
            {/* Email Input */}
            <InputFeatured
              type="email"
              label="Email"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              className="block w-full bg-gray-100 rounded border-gray-300 mb-4"
            />
            {/* Amount Input */}
            <label className="block mb-4">
              <InputFeatured
                type="number"
                label="Amount"
                value={amount ?? ""}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="block w-full bg-gray-100 rounded border-gray-300"
              />
            </label>

            {/* Payment Method Selection as Buttons */}
            <div className="flex space-x-4 mb-4">
              {["Visa", "PayPal", "Mobile Money"].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`flex-1 py-2 rounded-lg transition-colors duration-200 ${
                    paymentMethod === method
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            {/* Conditional Fields for PayPal */}
            {paymentMethod === "PayPal" && (
              <label className="block mb-4">
                <InputFeatured
                  type="email"
                  label="PayPal Email"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                  className="block w-full bg-gray-100 rounded border-gray-300"
                />
              </label>
            )}

            {/* Conditional Fields for Visa */}
            {paymentMethod === "Visa" && (
              <>
                <label className="block mb-4">
                  <InputFeatured
                    type="text"
                    label="Card Number"
                    value={visaCardNumber}
                    onChange={(e) => setVisaCardNumber(e.target.value)}
                    className="block w-full bg-gray-100 rounded border-gray-300"
                  />
                </label>
                <div className="flex gap-4 mb-4">
                  <InputFeatured
                    type="text"
                    label="Expiry Date"
                    value={visaExpiryDate}
                    onChange={(e) => setVisaExpiryDate(e.target.value)}
                    className="block w-full bg-gray-100 rounded border-gray-300"
                  />
                  <InputFeatured
                    type="text"
                    label="CVV"
                    value={visaCVV}
                    onChange={(e) => setVisaCVV(e.target.value)}
                    className="block w-full bg-gray-100 rounded border-gray-300"
                  />
                </div>
              </>
            )}

            {/* Conditional Fields for Mobile Money */}
            {paymentMethod === "Mobile Money" && (
              <>
                {/* Mobile Money Provider Selection */}
                <label className="block mb-4">
                  <span className="text-gray-700">
                    Choose Mobile Money Provider:
                  </span>
                  <div className="flex space-x-4">
                    {["MoMo Pay", "Airtel Money"].map((provider) => (
                      <button
                        key={provider}
                        onClick={() => setMobileMoneyProvider(provider)}
                        className={`flex-1 py-2 rounded-lg transition-colors duration-200 ${
                          mobileMoneyProvider === provider
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                        }`}
                      >
                        {provider}
                      </button>
                    ))}
                  </div>
                </label>

                {/* Mobile Money Phone Number Input */}
                <label className="block mb-4">
                  <InputFeatured
                    type="text"
                    label="Mobile Money Phone Number"
                    value={mobileMoneyPhoneNumber}
                    onChange={(e) => setMobileMoneyPhoneNumber(e.target.value)}
                    className="block w-full bg-gray-100 rounded border-gray-300"
                  />
                </label>
              </>
            )}

            {/* Recurring Donation Checkbox */}
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isRecurring}
                onChange={() => setIsRecurring(!isRecurring)}
                className="mr-2"
              />
              <span>Make this a monthly donation</span>
            </label>
            {isRecurring && (
              <div className="">
                <p className="text-gray-600 text-sm">
                  Your card will be charged monthly for the selected amount.
                </p>
              </div>
            )}

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!isFormValid()} // Disable button if form is not valid
              className={`w-full py-2 rounded ${
                isFormValid()
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Donate ${amount}
            </button>
          </div>

          {/* Donation Impact */}
          <section className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-4">Your Impact</h3>
            <p className="max-w-xl mx-auto text-gray-600">
              Every donation helps us provide essential services, from
              educational workshops to healthcare access for underserved
              communities.
            </p>
          </section>

          {/* Navigation Links */}
          <div className="flex justify-center mt-6">
            <Link href="/" className="text-blue-500 hover:underline">
              Back to Home
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Thank You, {donorName}!
          </h2>
          <p>
            Your generous donation of ${amount} is truly appreciated. With your
            support, we’re able to make a lasting impact in our community.
          </p>
          <p className="mt-4">
            We’ve sent a confirmation email to{" "}
            <span className="font-semibold">{donorEmail}</span> with details of
            your donation.
          </p>
          <p className="mt-4">
            Please check your inbox for further information. If you have any
            questions, feel free to contact us!
          </p>
          <div className="mt-6">
            <Link href="/" className="text-blue-500 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
