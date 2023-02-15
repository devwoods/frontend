import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import slug from "remark-slug";

interface IPostContentMarkDown {
  content: string;
}

export default function PostContentMarkDown({ content }: IPostContentMarkDown) {
  return <ReactMarkdown remarkPlugins={[gfm, slug]}>{content}</ReactMarkdown>;
}
