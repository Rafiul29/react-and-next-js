import { useEffect, useState } from "react";

const ExpenseSummary = ({ transactions }) => {
  //   console.log("transactions",transactions)
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
  });

  useEffect(() => {
    const result = transactions.reduce(
      (acc, transaction) => {
        if (transaction.transactionType === "income") {
          acc.totalIncome += transaction.amount;
        } else if (transaction.transactionType === "expense") {
          acc.totalExpense += transaction.amount;
        }

        return acc;
      },
      { totalIncome: 0, totalExpense: 0 }
    );

    setSummary(result);
  }, [transactions]);
  console.log(summary);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Balance</dt>
            <dd
              className={` ${
                summary.totalIncome - summary.totalExpense < 0
                  ? "text-rose-500"
                  : ""
              } order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl`}
            >
              BDT {summary.totalIncome - summary.totalExpense}
            </dd>
          </div>
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Total Income</dt>
            <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
              BDT {summary.totalIncome}
            </dd>
          </div>
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Total Expense</dt>
            <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
              BDT {summary.totalExpense}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ExpenseSummary;
