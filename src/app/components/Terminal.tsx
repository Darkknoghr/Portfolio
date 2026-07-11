"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Terminal.module.css";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  about       — Who I am",
    "  skills      — Technical proficiencies",
    "  experience  — Work history",
    "  education   — Academic background",
    "  contact     — How to reach me",
    "  clear       — Clear the terminal",
    "  help        — Show this message",
  ],
  about: [
    "Cyril Nutsugah",
    "────────────────────────────────",
    "Resourceful IT professional with experience in",
    "digital record management, hardware/software",
    "troubleshooting, and web development.",
    "",
    "Currently pursuing a Diploma in Cybersecurity",
    "at Ghana Communication Technology University.",
  ],
  skills: [
    "Technical Skills",
    "────────────────────────────────",
    "Development : JavaScript, TypeScript, React,",
    "              Next.js, HTML5, CSS",
    "IT/Security : Cybersecurity, IT Support,",
    "              Data Entry, System Maintenance",
    "Soft Skills : Problem Solving, Collaboration,",
    "              Analytical Thinking, Communication",
  ],
  experience: [
    "Work Experience",
    "────────────────────────────────",
    "Intern — Bricsky",
    "  Feb 2026 – Mar 2026 · Tema, Ghana",
    "",
    "Intern, IT & Records — Serene Insurance",
    "  Oct 2025 · Ghana",
    "",
    "Volunteer — Mcloi Impact Foundation",
    "  Oct 2024 – Present · Ghana",
  ],
  education: [
    "Education",
    "────────────────────────────────",
    "Diploma in Cybersecurity",
    "  GCTU · 2025 – Present",
    "",
    "WASSCE Certificate, Visual Arts",
    "  Chemu Senior High School · 2021 – 2024",
  ],
  contact: [
    "Contact",
    "────────────────────────────────",
    "Email    : cyrilnutsugah@gmail.com",
    "LinkedIn : linkedin.com/in/cyril-nutsugah",
    "GitHub   : github.com/Darkknoghr",
    "Phone    : +233 257 617 950",
  ],
};

interface Line {
  type: "input" | "output";
  text: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: 'Welcome. Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [
      ...lines,
      { type: "input", text: cmd },
    ];

    if (cmd === "clear") {
      setLines([
        { type: "output", text: 'Terminal cleared. Type "help" for commands.' },
      ]);
      setInput("");
      return;
    }

    const response = COMMANDS[cmd];
    if (response) {
      response.forEach((line) => {
        newLines.push({ type: "output", text: line });
      });
    } else {
      newLines.push({
        type: "output",
        text: `command not found: ${cmd}. Type "help" for available commands.`,
      });
    }

    setLines(newLines);
    setInput("");
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.terminal} onClick={focusInput}>
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span className={styles.dot} data-color="red"></span>
          <span className={styles.dot} data-color="yellow"></span>
          <span className={styles.dot} data-color="green"></span>
        </div>
        <span className={styles.titleText}>cyril — terminal</span>
        <div className={styles.titleSpacer}></div>
      </div>
      <div className={styles.body}>
        {lines.map((line, i) => (
          <div key={i} className={styles.line}>
            {line.type === "input" ? (
              <>
                <span className={styles.prompt}>→ </span>
                <span className={styles.inputText}>{line.text}</span>
              </>
            ) : (
              <span className={styles.outputText}>{line.text}</span>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputLine}>
          <span className={styles.prompt}>→ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
