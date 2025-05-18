import { Link, useNavigate, useParams } from "react-router-dom";
import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useState } from "react";
import { deleteExpenseByExpenseId } from "../../services/expenseService";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const { expense, errors, isLoading, setLoader, setErrors } =
    useExpenseByExpenseId(expenseId!);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  if (!expenseId) {
    return <p className="text-danger">Invalid Expense Id</p>;
  }

  const handleCancel = () => {
    console.log("Cancel is clicked");
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setLoader(true);
    deleteExpenseByExpenseId(expenseId)
      .then((response) => {
        if (response && response.status === 204) {
          navigate("/");
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => {
        setLoader(false);
        setShowDialog(false);
      });
  };

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {errors && <p className="text-danger">{errors}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button
          className="btn btn-outline-danger"
          onClick={() => setShowDialog(true)}
        >
          Delete
        </button>
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
      <ConfirmDialog
        title="ยืนยันการลบรายการ"
        message="คุณแน่ใจแล้วใช่หรือไม่ที่จะลบรายการนี้?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ExpenseDetails;
