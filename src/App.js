import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/templates/navbar/Navbar";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import Register from "./components/pages/RegisterPage.js/Register";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import UserDashboard from "./components/pages/UserDashboard/UserDashboard";
import AdminDashboard from "./components/pages/AdminDashboard/AdminDashboard";
import AdminProfile from "./components/pages/AdminDashboard/AdminProfile/AdminProfile";
import AddCategory from "./components/pages/AdminDashboard/AddCategory/AddCategory";
import AddQuiz from "./components/pages/AdminDashboard/AddQuiz/AddQuiz";
import ShowQuiz from "./components/pages/AdminDashboard/ShowQuiz/ShowQuiz";
import AddQuestion from "./components/pages/AdminDashboard/AddQuestion/AddQuestion";
import ShowCategories from "./components/pages/UserDashboard/ShowCategories/ShowCategories";
import ShowQuizzes from "./components/pages/UserDashboard/ShowQuizzes/ShowQuizzes";
import AttemptQuiz from "./components/pages/UserDashboard/AttemptQuiz/AttemptQuiz";
import QuizOnGoing from "./components/pages/UserDashboard/QuizOnGoing/QuizOnGoing";
import QuizByCategory from "./components/pages/AdminDashboard/QuizByCategory/QuizByCategory";
import QuizByCategoryUser from "./components/pages/UserDashboard/QuizByCategoryUser/QuizByCategoryUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/user/dashboard" element={<UserDashboard />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/profile" element={<AdminProfile />} />
          <Route exact path="/admin/Categories" element={<AddCategory />} />
          <Route exact path="/user/Categories" element={<ShowCategories />} />
          <Route exact path="/admin/addQuiz" element={<AddQuiz />} />
          <Route exact path="/admin/showQuizzes" element={<ShowQuiz />} />
          <Route exact path="/admin/showQuizByCategory" element={<QuizByCategory />} />
          <Route exact path="/user/showQuizByCategory" element={<QuizByCategoryUser />} />
          <Route exact path="/user/showQuizzes" element={<ShowQuizzes />} />
          {/* <Route exact path='/admin/showQuestions' element={<AddQuestion/>} /> */}
          <Route
            exact
            path="/quiz/showQuestions/:quizId"
            element={<AddQuestion />}
          />
          <Route exact path="/quiz/attemptQuiz/:quizId" element={<AttemptQuiz/>}/>
          <Route exact path="/user/quizOnGoing" element={<QuizOnGoing/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
