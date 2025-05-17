import { Link, useParams } from "react-router-dom";
import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();

  const { expense, errors, isLoading } = useExpenseByExpenseId(expenseId!);

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {errors && <p className="text-danger">{errors}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button className="btn btn-outline-danger">Delete</button>
        <button className="btn btn-outline-warning mx-2">Edit</button>
        <Link className="btn btn-outline-secondary" to="/">
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-body p-3">
          <table className="table table-borderless table-responsive">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{expense ? expense.name : "ไม่พบข้อมูล"}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{expense ? expense.category : "ไม่พบข้อมูล"}</td>
              </tr>
              <tr>
                <th>Amount</th>
                <td>
                  {expense
                    ? CurrencyUtils.formatToTHB(expense.amount)
                    : "ไม่พบข้อมูล"}
                </td>
              </tr>
              <tr>
                <th>Date</th>
                <td>
                  {expense
                    ? DateUtils.formatDateString(expense.date)
                    : "ไม่พบข้อมูล"}
                </td>
              </tr>
              <tr>
                <th>Note</th>
                <td>{expense ? expense.note : "ไม่พบข้อมูล"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
