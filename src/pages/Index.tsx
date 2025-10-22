import { Sidebar } from "@/components/sidebar";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Eye, Columns2 } from "lucide-react";

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

  return (
    <div className="flex min-h-screen bg-[#1f2326]">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-800 p-4 bg-[#1f2326]">
          <input
            type="text"
            placeholder="Note title..."
            className="w-full bg-transparent text-xl font-semibold text-gray-200 outline-none placeholder-gray-600"
          />
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex relative">
          {/* Edit View */}
          {(viewMode === "edit" || viewMode === "split") && (
            <div className={`${viewMode === "split" ? "w-1/2" : "w-full"} flex flex-col border-r border-gray-800`}>
              <textarea
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
