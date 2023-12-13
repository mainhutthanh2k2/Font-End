import AdminDirectory from "~/commonest/directories/AdminDirectory";
import "./CategoryManager.scss";

function CategoryManager() {
  return (
    <div className="admin-page_container">
      <AdminDirectory></AdminDirectory>
      <h1>Category Manager</h1>
    </div>
  );
}

export default CategoryManager;
