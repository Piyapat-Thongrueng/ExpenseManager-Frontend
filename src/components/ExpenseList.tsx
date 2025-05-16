import type { Expense } from "../model/Expense";
import CurrencyUtils from "../utils/CurrencyUtils";
import DateUtils from "../utils/DateUtils";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    // <div>
    //   <table border={1}>
    //     <thead>
    //       <tr>
    //         <th>Title</th>
    //         <th>Amount</th>
    //         <th>Date</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {expenses.map((expense) => (
    //         <tr key={expense.expenseId}>
    //           <td>{expense.name}</td>
    //           <td>{expense.amount}</td>
    //           <td>{expense.date}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <div className="card">
      <h5 className="card-header">
        ค่าใช้จ่าย
        <span className="float-end">จำนวนเงิน</span>
      </h5>
      <div className="card-body">
        {expenses.map((expense) => (
          <div key={expense.expenseId}>
            <div className="d-flex justify-content-between border-bottom-1 p-3 text-dark">
              <div className="card-title m-0">
                <h5>{expense.name}</h5>
                <span className="fst-italic">
                  {DateUtils.formatDateString(expense.date)}
                </span>
              </div>
              <div className="card-subtitle">
                <span className="badge rounded-pill app-primary-bg-color">
                  {CurrencyUtils.formatToTHB(expense.amount)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
