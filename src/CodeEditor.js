import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/material.css";
import "./CodeEditor.css";

const CodeEditor = ({ passcode, socket }) => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const handleCodeChange = (newCode) => {
      if (newCode !== code) setCode(newCode);
    };

    socket.on("codeChange", handleCodeChange);
    socket.on("codeOutput", ({ result, error }) => setOutput(error || result));

    return () => {
      socket.off("codeChange", handleCodeChange);
      socket.off("codeOutput");
    };
  }, [code, socket]);

  const handleChange = (editor, data, value) => {
    setCode(value);
    socket.emit("codeChange", { passcode, code: value });
  };

  const runCode = () => {
    setOutput("Running...");
    socket.emit("runCode", { passcode, code }, (response) => {
      setOutput(response.error || response.result);
    });
  };

  return (
    <div className="code-editor-container">
      <CodeMirror
        value={code}
        options={{ mode: "javascript", theme: "material", lineNumbers: true }}
        onBeforeChange={handleChange}
      />
      <button className="run-button" onClick={runCode}>
        Run Code
      </button>
      <div className="output-container">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;