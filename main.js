  function executeCode() {
            const codeInput = document.getElementById("code").value;
            const terminal = document.getElementById("terminal");
            terminal.innerHTML += " ";

            // Execute Python code using PyScript
            const pyScript = document.createElement("py-script");
            pyScript.innerHTML = codeInput;
            document.body.appendChild(pyScript);
        }

        // Bind the button click to execute the code
        document.getElementById("execute").addEventListener("click", executeCode);