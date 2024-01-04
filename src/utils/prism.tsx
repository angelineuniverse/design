import React from "react";
import type { CSSProperties } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { Icon } from "../library";
SyntaxHighlighter.registerLanguage("tsx", tsx);

const lineNumberStyle = {
  minWidth: "1.5em",
  paddingRight: "5px",
  fontWeight: "normal",
  textAlign: "left",
  userSelect: "none",
  color: "#888",
} as CSSProperties;
interface Model {
  code: string;
  showLine?: boolean;
}
const PrismCode = (model: Model) => {
  const [copy, setCopy] = React.useState(false);
  function CopytoClipboard() {
    setCopy(true);
    navigator.clipboard.writeText(model.code);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }
  return (
    <div className="relative">
      <SyntaxHighlighter
        showLineNumbers={model.showLine}
        language="tsx"
        style={vscDarkPlus}
        showInlineLineNumbers={false}
        customStyle={{
          // background: "#FBFBFB",
          borderRadius: "8px",
          padding: "12px",
          border: "1px solid #D3D3D3",
        }}
        lineNumberStyle={lineNumberStyle}
      >
        {model.code}
      </SyntaxHighlighter>
      <button
        type="button"
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => CopytoClipboard()}
      >
        {copy ? (
          <Icon width={14} height={14} color="#fefefe" icon="check" />
        ) : (
          <Icon width={14} height={14} color="#fefefe" icon="copy" />
        )}
      </button>
    </div>
  );
};

export default PrismCode;
