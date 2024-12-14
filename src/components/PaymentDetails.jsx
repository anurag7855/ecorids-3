import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const PaymentDetails = () => {
  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-3xl mx-auto">
      {/* Logo and Business Address */}
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#82CD47]">ECORIDES</h2>
        </div>
        <div className="text-right text-sm text-gray-600">
          <p>Business address</p>
          <p>City, State, IN - 000 000</p>
          <p>TAX ID 0XXXXXX123XXXX</p>
        </div>
      </div>

      {/* Billing Information */}
      <div className="mb-8">
        <h3 className="text-gray-500 mb-2">Billed to</h3>
        <div className="text-sm">
          <p className="font-medium text-gray-800">Abhishek</p>
          <p className="text-gray-600">Near DN mall</p>
          <p className="text-gray-600">BESR, Odisha - 765647</p>
          <p className="text-gray-600">+91 6384758475</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-4 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
        <div>
          <p className="text-gray-500 text-sm mb-1">Due date</p>
          <p className="font-medium">15 Mar, 2024</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Invoice date</p>
          <p className="font-medium">15 April, 2024</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Invoice number</p>
          <p className="font-medium">#AB2324-01</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Reference</p>
          <p className="font-medium">INV-057</p>
        </div>
      </div>

      {/* Items Table */}
      <div className="mb-8">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th className="pb-3">Item description</th>
              <th className="pb-3 text-center">Qty</th>
              <th className="pb-3 text-right">Rate</th>
              <th className="pb-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm">
              <td className="py-2">Item Name</td>
              <td className="py-2 text-center">01</td>
              <td className="py-2 text-right">₹3,000.00</td>
              <td className="py-2 text-right">₹3,000.00</td>
            </tr>
            <tr className="text-sm">
              <td className="py-2">Item Name</td>
              <td className="py-2 text-center">01</td>
              <td className="py-2 text-right">₹1,500.00</td>
              <td className="py-2 text-right">₹1,500.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="border-t pt-4 mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">₹4,500.00</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Tax (10%)</span>
          <span className="font-medium">₹450.00</span>
        </div>
        <div className="flex justify-between text-sm font-medium">
          <span>Total</span>
          <span>₹4,950.00</span>
        </div>
      </div>

      {/* Total Due Button */}
      <div className="mb-8">
        <button className="w-full bg-blue-500 text-white py-3 rounded-full text-sm font-medium">
          Total due: ₹ 4,950.00
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Four Thousand Nine Hundred Fifty Only.
        </p>
      </div>

      {/* Payment Details */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <h3 className="text-gray-700 font-medium mb-3">Payment details</h3>
        <div className="text-sm text-gray-600">
          <p>ABCD BANK</p>
          <p>SWIFT: ABCD0123BXXX</p>
          <p>Acct: #374748923000111</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600">
        <p className="font-medium mb-2">Thank you for the business!</p>
        <p className="mb-4">Please pay within 15 days of receiving this invoice.</p>
        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhone className="text-gray-400" />
            <span>+91 00000 00000</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-400" />
            <span>hello@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
