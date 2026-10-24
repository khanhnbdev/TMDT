import type { PanelProps } from "./types";
export default function LanguagePanel(props: PanelProps) {
  return (
    <div className="language-options">
      {["English", "Tiếng Việt"].map((choice) => (
        <button
          key={choice}
          onClick={() => {
            props.onLanguage(choice);
            props.onClose();
          }}
        >
          {choice}
          {props.language === choice && " ✓"}
        </button>
      ))}
      <p className="panel-muted">
        Product copy remains in the source design language.
      </p>
    </div>
  );
}
