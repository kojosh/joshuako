import { useEffect, useState } from "react";
import "../App.css";

interface TypewriterProps {
  words: string[];
  period?: number;
}

export default function Typewriter({
  words,
  period = 2000,
}: TypewriterProps) {
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[loopNum % words.length];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      // Finished typing
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), period);
        return;
      }

      // Finished deleting
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, words, period]);

  return (
    <h1>
      <span className="typewriter">
        {text}
        <span className="cursor">|</span>
      </span>
    </h1>
  );
}