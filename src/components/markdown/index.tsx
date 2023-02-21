import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import slug from "remark-slug";

import BlockquoteBlock from "./blockquote-block";
import CodeBlock from "./code-block";
import LiBlock from "./li-block";

interface IPostContentMarkDown {
  content: string;
}

export default function PostContentMarkDown({ content }: IPostContentMarkDown) {
  return (
    <ReactMarkdown
      remarkPlugins={[gfm, slug]}
      components={{ code: CodeBlock, li: LiBlock, blockquote: BlockquoteBlock }}
    >
      {content}
    </ReactMarkdown>
  );
}
