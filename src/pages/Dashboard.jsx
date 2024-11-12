import InputArea from "../components/InputArea";
import DatePicker from "../components/DatePicker";
import ApplicationShell from "../components/ApplicationShell";

function Dashboard() {
  return (
    <ApplicationShell>
      <div className="flex flex-col h-full justify-between">
        <DatePicker />

        <div className="w-full mx-auto">
          <InputArea />
        </div>
      </div>
    </ApplicationShell>
  );
}

export default Dashboard;
