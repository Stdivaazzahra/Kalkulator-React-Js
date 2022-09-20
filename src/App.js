import React, { useRef } from "react";

export const Kalkulator = () => {
  const result = useRef();
  const display = (a) => {
    if (a === "clear") {
      result.current.value = "";
    }
    // else if (a == "del") {
    //   result.value = result.value.slice(0, -1);
    // }
    else if (a === "negatif") {
      result.current.value = result.current.value * -1;
    } else if (a === "action") {
      try {
        result.current.value = eval(result.current.value);
      } catch (error) {
        alert("error");
      }
    } else {
      result.current.value += a;
    }
  };
  // useEffect(() => {
  //   let result = document.getElementById("screen");
  // }, []);
  return (
    <main class="card">
      <form class="display">
        <input ref={result} id="screen" placeholder="0" />
      </form>
      <section class="buttom">
        <div class="tombol-kiri">
          <button class="tombol ac" onClick={() => display("clear")}>
            AC
          </button>
          <button class="tombol plus__minus" onClick={() => display("negatif")}>
            +/-{" "}
          </button>
          <button class="tombol persen" onClick={() => display("%")}>
            %
          </button>
          <button class="tombol" onClick={() => display("7")}>
            7
          </button>
          <button class="tombol" onClick={() => display("8")}>
            8
          </button>
          <button class="tombol" onClick={() => display("9")}>
            9
          </button>
          <button class="tombol" onClick={() => display("4")}>
            4
          </button>
          <button class="tombol" onClick={() => display("5")}>
            5
          </button>
          <button class="tombol" onClick={() => display("6")}>
            6
          </button>
          <button class="tombol" onClick={() => display("1")}>
            1
          </button>
          <button class="tombol" onClick={() => display("2")}>
            2
          </button>
          <button class="tombol" onClick={() => display("3")}>
            3
          </button>
          <button class="tombol nol" onClick={() => display("0")}>
            0
          </button>
          <button class="tombol" onClick={() => display(".")}>
            .
          </button>
        </div>
        <div class="tombol-kanan">
          <button class="tombol" onClick={() => display("/")}>
            ÷
          </button>
          <button class="tombol" onClick={() => display("*")}>
            x
          </button>
          <button class="tombol" onClick={() => display("-")}>
            -
          </button>
          <button class="tombol" onClick={() => display("+")}>
            +
          </button>
          <button class="tombol" onClick={() => display("action")}>
            =
          </button>
        </div>
      </section>
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <Kalkulator />
    </div>
  );
}

export default App;
