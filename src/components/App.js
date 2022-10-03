import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5020/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));

  }, [])

  function handleAddQuestion(question) {
    setQuestions([...questions, question])
    setPage("List")
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> :
        <QuestionList questionDetail={questions} />}
    </main>
  );
}

export default App;
