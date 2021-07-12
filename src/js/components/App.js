import React from "react";

import Questions from "./Questions.jsx";
import questions from "../content/faqs.js";

export default function App() {
  return <Questions questions={questions} />;
}
