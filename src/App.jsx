import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleGoalChange(e) {
    setGoal(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
  }

  const remaining = goal - count;

  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center bg-base-200">
        <section className="contadorCarreira">
          <h1 className=" text-2xl font-bold text-primary text-center mb-3">
            contador
            <br />
            de carreiras
          </h1>

          <div className="card bg-base-100 card-border border-base-300 card-sm overflow-hidden p-2 flex flex-col items-center gap-2 radius-md">
            <div className="flex flex-col items-center gap-4 p-8">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">meta:</span>

                <div className="flex items-center gap-2 border-2 border-accent rounded-full px-3 py-1 overflow-hidden">
                  <input
                    type="number"
                    className="bg-transparent w-7 text-center focus:outline-none font-normal appearance-none"
                    value={goal}
                    onChange={handleGoalChange}
                  />
                  <span className="text-black font-normal">carreiras</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button
                  className="btn btn-circle btn-primary text-lg"
                  onClick={() => count > 0 && handleDecrement()}
                >
                  −
                </button>
                <span className="text-3xl font-bold">{count}</span>
                <button
                  className="btn btn-circle btn-primary text-lg"
                  onClick={() => handleIncrement()}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-outline btn-primary text-sm h-8"
                onClick={() => handleReset()}
              >
                resetar
              </button>

              <p className="text-xl font-normal w-50 text-center">
                faltam <span className="font-bold">{remaining} carreiras</span>
                <progress
                  className={`progress ${count >= goal ? "progress-success" : "progress-info"}`}
                  value={count > 0 ? count : undefined}
                  max={goal}
                />
              </p>
            </div>
          </div>
        </section>
        <ul className="menu menu-horizontal flex flex-row gap-2 items-center justify-center p-5 bg-base-200 rounded-box w-full">
          <li>
            <a className="tooltip bg-base-100 p-3" data-tip="Contador">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip bg-base-100 p-3" data-tip="Materiais">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip bg-base-100 p-3" data-tip="Projetos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip bg-base-100 p-3" data-tip="Calculadora">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a className="tooltip bg-base-100 p-3" data-tip="Configurações">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </a>
          </li>
        </ul>

      </section>
    </>
  );
}

export default App;
