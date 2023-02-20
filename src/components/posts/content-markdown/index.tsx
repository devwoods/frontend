import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import slug from "remark-slug";

import BlockquoteBlock from "src/components/markdown/blockquote-block";
import CodeBlock from "src/components/markdown/code-block";
import LiBlock from "src/components/markdown/li-block";

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
