import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import UserPage from "./pages/Lab1";  
import StudentTable from "./pages/Lab2";
import LoginForm from "./pages/lab3";
import User from "./pages/lab2.3";
import UserTable from "./pages/lab2.2";
import SigninForm from "./pages/lab3.1";
import AddForm from "./pages/lab3.2";
import Lab4 from "./pages/lab4";
import StoryList from "./pages/lab5";
import EditStory from "./pages/lab6";
function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              lab1
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              lab2
            </Link>
            <Link to="/abc" className="hover:text-gray-200">
              lab2.1
            </Link>
            <Link to="/edit" className="hover:text-gray-200">
              lab2.2
            </Link>
            <Link to="/lab3" className="hover:text-gray-200">
              lab3
            </Link>
              <Link to="/lab3.1" className="hover:text-gray-200">
                lab3.1
              </Link>
                <Link to="/lab3.2" className="hover:text-gray-200">
                  lab3.2
                </Link>
                <Link to="/lab4" className="hover:text-gray-200">
                  lab4
                </Link>
                 <Link to="/lab5" className="hover:text-gray-200">
                  lab5
                </Link>
                

          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

        {/* thêm router ở đây */}
        <Routes>
          <Route path="/list" element={<UserPage />} />
          <Route path="/add" element={<StudentTable />} />
           <Route path="/edit" element={<User />} />
            <Route path="/abc" element={<UserTable />} />
            <Route path="/lab3" element={<LoginForm />} />
            <Route path="/lab3.1" element={<SigninForm />} />
            <Route path="/lab3.2" element={<AddForm />} />
            <Route path="/lab4" element={<Lab4 />} />
              <Route path="/lab5" element={<StoryList />} />
             <Route path="/lab6/:id" element={<EditStory />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;