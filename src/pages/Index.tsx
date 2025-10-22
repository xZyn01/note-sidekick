import { Sidebar } from "@/components/sidebar";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Eye, Columns2, Hash, Bold, Italic, Strikethrough, Link, List, ListOrdered, CheckSquare, Quote, Code, Code2, Minus, Image } from "lucide-react";

type ViewMode = "edit" | "preview" | "split";

const Index = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor

## Features
- Write in **markdown**
- Live preview
- Split view mode

### Example Code
\`\`\`javascript
const hello = "world";
\`\`\`

> This is a quote

- List item 1
- List item 2
`);
  const [viewMode, setViewMode] = useState<ViewMode>("edit");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertMarkdown = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const newText = markdown.substring(0, start) + before + selectedText + after + markdown.substring(end);
    
    setMarkdown(newText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  const toolbarButtons = [
    { icon: Hash, action: () => insertMarkdown("# "), title: "Heading" },
    { icon: Bold, action: () => insertMarkdown("**", "**"), title: "Bold" },
    { icon: Italic, action: () => insertMarkdown("_", "_"), title: "Italic" },
    { icon: Strikethrough, action: () => insertMarkdown("~~", "~~"), title: "Strikethrough" },
    { icon: Link, action: () => insertMarkdown("[", "](url)"), title: "Link" },
    { icon: List, action: () => insertMarkdown("- "), title: "Bullet List" },
    { icon: ListOrdered, action: () => insertMarkdown("1. "), title: "Numbered List" },
    { icon: CheckSquare, action: () => insertMarkdown("- [ ] "), title: "Checkbox" },
    { icon: Quote, action: () => insertMarkdown("> "), title: "Quote" },
    { icon: Code, action: () => insertMarkdown("`", "`"), title: "Inline Code" },
    { icon: Code2, action: () => insertMarkdown("```\n", "\n```"), title: "Code Block" },
    { icon: Minus, action: () => insertMarkdown("\n---\n"), title: "Horizontal Rule" },
    { icon: Image, action: () => insertMarkdown("![alt](", ")"), title: "Image" },
  ];

  return (
    <div className="flex min-h-screen bg-[#1f2326]">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-800 bg-[#1f2326]">
          <div className="p-4">
            <input
              type="text"
              placeholder="Note title..."
              className="w-full bg-transparent text-xl font-semibold text-gray-200 outline-none placeholder-gray-600"
            />
          </div>
          
          {/* Markdown Toolbar */}
          <div className="flex items-center gap-1 px-4 pb-3 border-t border-gray-800">
            {toolbarButtons.map((btn, idx) => (
              <div key={idx}>
                <button
                  onClick={btn.action}
                  className="p-2 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded transition-colors"
                  title={btn.title}
                >
                  <btn.icon className="w-4 h-4" />
                </button>
                {(idx === 4 || idx === 9) && (
                  <div className="inline-block w-px h-6 bg-gray-800 mx-1 align-middle" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex relative">
          {/* Edit View */}
          {(viewMode === "edit" || viewMode === "split") && (
            <div className={`${viewMode === "split" ? "w-1/2" : "w-full"} flex flex-col border-r border-gray-800`}>
              <textarea
                ref={textareaRef}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="flex-1 bg-[#1f2326] text-gray-300 p-6 outline-none resize-none font-mono text-sm leading-relaxed"
                placeholder="Start writing..."
              />
            </div>
          )}

          {/* Preview View */}
          {(viewMode === "preview" || viewMode === "split") && (
            <div className={`${viewMode === "split" ? "w-1/2" : "w-full"} overflow-auto`}>
              <div className="p-6 prose prose-invert prose-slate max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {markdown}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* View Mode Toggle Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={() => setViewMode(viewMode === "preview" ? "edit" : "preview")}
              className={`p-2 rounded ${
                viewMode === "preview" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-800 text-gray-400 hover:text-gray-200"
              } transition-colors`}
              title="Toggle preview"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode(viewMode === "split" ? "edit" : "split")}
              className={`p-2 rounded ${
                viewMode === "split" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-800 text-gray-400 hover:text-gray-200"
              } transition-colors`}
              title="Toggle split view"
            >
              <Columns2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
