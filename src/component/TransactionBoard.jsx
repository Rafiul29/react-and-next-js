import ExpanseForm from "./ExpenseForm";
import ExpanseSummary from "./ExpanseSummary";
import IncomeList from "./IncomeList";
import ExpanseList from "./ExpenseList";
import { useState } from "react";




const categories = {
  income: ["Salary", "Outsourcing", "Bond", "Dividend"],
  expense: [
    "Education",
    "Food",
    "Health",
    "Bill",
    "Insurance",
    "Tax",
    "Transport",
    "Telephone",
  ],
};

const TransactionBoard = () => {
  const [transactions, setTransactions] = useState([]);

  const [editTranstion,setEditTransaction] = useState()
  const handelAddEditTransaction = (formData, isAdd) => {
    if (isAdd) {
      setTransactions((prevTransactions) => {
        const updatedTransactions = [
         formData,
          ...prevTransactions,
        ];
        return updatedTransactions;
      });
    } else {
      // setTransactions(tra));
    }
    setEditTransaction(null)
  };

  const handleDeleteTransaction=(id)=>{
    setTransactions(transactions.filter((tr)=>tr.id!==id))
  }

  const editTransaction=(id)=>{
    const findTransaction=transactions.find((tr)=>tr.id===id);
    setEditTransaction(findTransaction)
  }

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpanseForm onAddEditForm={handelAddEditTransaction} categories={categories} editTranstion={editTranstion}/>

        <div className="lg:col-span-2">
          <ExpanseSummary transactions={transactions} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeList transactions={transactions} categories={categories} onDelTask={handleDeleteTransaction} onEdit={editTransaction}/>
            <ExpanseList transactions={transactions} categories={categories} onDelTask={handleDeleteTransaction}/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TransactionBoard;
