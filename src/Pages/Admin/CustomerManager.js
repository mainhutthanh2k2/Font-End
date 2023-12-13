import AdminDirectory from "~/commonest/directories/AdminDirectory";
import "./CustomerManager.scss";

function CustomerManager() {
  return (
    <div className="admin-page_container">
      <AdminDirectory></AdminDirectory>
      <h1>Customer Manager</h1>
    </div>
  );
}

export default CustomerManager;
