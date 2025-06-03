const transactions = [
  {
    title: "Refueling gasoline",
    date: "16 July 2021",
    amount: -201.34,
  },
  {
    title: "Purchase of furniture",
    date: "13 July 2021",
    amount: -567.14,
  },
  {
    title: "Cash refund for tickets",
    date: "10 July 2021",
    amount: 568.11,
  },
];

export default function LatestTransactions() {
  return (
    <div className="bg-black text-white rounded-xl shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] p-4 w-[60%]">
      <h3 className="text-lg font-semibold mb-6">Latest Transactions</h3>
      <div className="space-y-6">
        {transactions.map((tx, index) => (
          <div key={index} className="flex justify-between items-start border-b border-gray-700 pb-4">
            <div>
              <div className="font-medium">{tx.title}</div>
              <div className="text-xs text-gray-400 mt-1">{tx.date}</div>
            </div>
            <div
              className={`font-semibold ${
                tx.amount < 0 ? "text-red-500" : "text-green-400"
              }`}
            >
              {tx.amount < 0 ? `-$${Math.abs(tx.amount).toFixed(2)}` : `+$${tx.amount.toFixed(2)}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
