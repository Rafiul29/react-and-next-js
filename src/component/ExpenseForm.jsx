import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const ExpanseForm = ({ onAddEditForm ,categories,editTranstion}) => {
console.log(editTranstion)
  const [transactionType, setTransactionType] = useState("expense");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  console.log(transactionType,editTranstion)
  useEffect(()=>{
    if(editTranstion?.id){
    setCategory(editTranstion?.category)
    setAmount(editTranstion?.amount)
    setDate(editTranstion?.date)
    setTransactionType(editTranstion?.transactionType)
    }

    console.log
  },[editTranstion?.id])

const isAdd =Object.is(editTranstion,null)


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: uuidv4(),
      transactionType,
      category,
      amount:Number(amount),
      date,
    };
    console.log(formData)
    onAddEditForm(formData, isAdd,editTranstion?.id);

      setCategory("")
      setAmount("")
      setDate("")
  };

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            onClick={() => setTransactionType("expense")}
            className={`${
              transactionType === "expense" ? "active" : ""
            } cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 `}
          >
            Expense
          </div>

          <div
            onClick={() => setTransactionType("income")}
            className={`${
              transactionType === "income" ? "active" : ""
            } cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 `}
          >
            Income
          </div>
        </div>

        <div className="mt-3">
          <label
            for="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              autoComplete="category-name"
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="" selected disabled>
                select category
              </option>
              
             
              {categories[transactionType]?.map((category,i) => (
                <option key={i} value={category} >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3">
          <label
            for="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              id="amount"
              autoComplete="off"
              placeholder="12931"
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            for="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="off"
              placeholder="12931"
              className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ExpanseForm;
