import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";

interface Props {
  loggedInUser: string;
  totalExpenses: number;
}

const DashboardStatus = ({ loggedInUser, totalExpenses }: Props) => {
  return (
    <div className="mt-3">
      <div className="text-center mb-4">
        <h5 className="mb-3">ค่าใช้จ่ายรวม</h5>
        <h3>
          <span className="badge rounded-pill app-primary-bg-color">
            {CurrencyUtils.formatToTHB(totalExpenses)}
          </span>
        </h3>
      </div>
      <div className="d-flex justify-content-between">
        <div className="mb-1">
          Welcome, <span className="app-primary-color">{loggedInUser}👋</span>
        </div>
        <div>{DateUtils.getFormattedDate(new Date())}</div>
      </div>
    </div>
  );
};

export default DashboardStatus;
