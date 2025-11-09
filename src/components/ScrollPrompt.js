import React from "react";

interface ScrollPromptProps {
  target: string;
  label: string;
}

const ScrollPrompt: React.FC<ScrollPromptProps> = ({ target, label }) => {
  const handleScroll = () => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={handleScroll}
        className="text-lightblue_vs font-mono text-sm mt-4 animate-bounce"
      >
        {label} ↓
      </button>
    </div>
  );
};

export default ScrollPrompt;