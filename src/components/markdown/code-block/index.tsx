import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface ICodeBlock {
  className?: string;
  children: ReactNode;
}

export default function CodeBlock({ className, children }: ICodeBlock) {
  return (
    <SyntaxHighlighter
      language={className?.replace("language-", "")}
      style={codeStyle}
    >
      {children as string}
    </SyntaxHighlighter>
  );
}
