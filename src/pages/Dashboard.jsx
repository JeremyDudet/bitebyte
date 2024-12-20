import InputArea from "../components/InputArea";
import DatePicker from "../components/DatePicker";
import ApplicationShell from "../components/ApplicationShell";
import Stats from "../components/Stats";
import ExpenseTable from "../components/ExpeseTable";

function Dashboard() {
  return (
    <ApplicationShell>
      <div className="flex flex-col h-full justify-between">
        <div>
          <DatePicker />
          <Stats />
          <ExpenseTable />
        </div>
        <div className="w-full mx-auto">
          <InputArea />
        </div>
      </div>
    </ApplicationShell>
  );
}

export default Dashboard;
