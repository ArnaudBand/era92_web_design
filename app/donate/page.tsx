"use client";

import InputFeatured from "@/components/InputFeatured";
import { useState } from "react";
import Link from "next/link";

export default function DonatePage() {
  const [amount, setAmount] = useState<number>();
  const [isRecurring, setIsRecurring] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const handleDonate = () => {
     setThankYou(true);
  };

  return (
     <div className="bg-gray-50 py-16 px-6 text-black">
        {!thankYou ? (
           <>
              <h2 className="text-3xl font-semibold text-center mb-10">Support Our Mission</h2>
              
              {/* Suggested Donation Tiers */}
              <section className="text-center mb-10">
                 <h3 className="text-2xl font-semibold mb-4">Choose an Amount</h3>
                 <div className="flex justify-center gap-4">
                    <button onClick={() => setAmount(10)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                       $10
                    </button>
                    <button onClick={() => setAmount(25)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                       $25
                    </button>
                    <button onClick={() => setAmount(50)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                       $50
                    </button>
                 </div>
              </section>

              {/* Donation Form */}
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
                 <label className="block mb-4">
                    {/* <span className="text-gray-700 py-8">Other Amount:</span> */}
                    <InputFeatured
                       type="number"
                       label={"Amount"}
                       value={amount ?? ''}
                       onChange={(e) => setAmount(Number(e.target.value))}
                       className="block w-full bg-gray-100 rounded border-gray-300"
                    />
                 </label>

                 <label className="flex items-center mb-4">
                    <input
                       type="checkbox"
                       checked={isRecurring}
                       onChange={() => setIsRecurring(!isRecurring)}
                       className="mr-2"
                    />
                    <span>Make this a monthly donation</span>
                 </label>

                 <button
                    onClick={handleDonate}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                 >
                    Donate ${amount}
                 </button>
              </div>

              {/* Donation Impact */}
              <section className="text-center mb-10">
                 <h3 className="text-2xl font-semibold mb-4">Your Impact</h3>
                 <p className="max-w-xl mx-auto text-gray-600">
                    Every donation helps us provide essential services, from educational workshops to healthcare access for underserved communities.
                 </p>
              </section>
           </>
        ) : (
           <section className="text-center">
              <h2 className="text-3xl font-semibold text-green-600 mb-6">Thank You!</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                 Your generous donation of ${amount} will go a long way in supporting our programs and making a positive impact in the lives of many.
              </p>
              <Link href="/">Return to Home Page</Link>
           </section>
        )}
     </div>
  );
}
