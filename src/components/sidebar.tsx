import React, { useState } from 'react';
import {
  FileText,
  BookOpen,
  Trash2,
  CircleDot,
  Tag,
  ChevronDown,
  ChevronRight,
  Plus,
  Settings,
  Circle,
  PauseCircle,
  CheckCircle,
  XCircle,
  User,
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isStatusOpen, setIsStatusOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const [isNotebooksOpen, setIsNotebooksOpen] = useState(true);

  return (
    <div className={`flex flex-col h-screen w-64 bg-[#1f2326] border-r border-[#2d3236] ${className}`}>
      {/* macOS Window Controls & Settings */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2d3236]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28CA42]"></div>
        </div>
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-2">
        {/* All Notes */}
        <button className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">All Notes</span>
          </div>
          <span className="text-xs text-gray-500 group-hover:text-gray-400">2</span>
        </button>

        {/* Notebooks */}
        <div className="mt-1">
          <button
            onClick={() => setIsNotebooksOpen(!isNotebooksOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Notebooks</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Add notebook logic
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-[#333840] rounded"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </button>

          {isNotebooksOpen && (
            <div className="ml-4">
              <button className="w-full flex items-center justify-between pl-8 pr-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">First Notebook</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400">2</span>
              </button>
            </div>
          )}
        </div>

        {/* Trash */}
        <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors mt-1">
          <Trash2 className="w-5 h-5" />
          <span className="text-sm font-medium">Trash</span>
        </button>

        {/* Status Section */}
        <div className="mt-4">
          <button
            onClick={() => setIsStatusOpen(!isStatusOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <CircleDot className="w-5 h-5" />
              <span className="text-sm font-medium">Status</span>
            </div>
            {isStatusOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {isStatusOpen && (
            <div className="mt-1 space-y-1">
              <button className="w-full flex items-center justify-between pl-8 pr-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group">
                <div className="flex items-center gap-3">
                  <Circle className="w-4 h-4 text-blue-500 fill-blue-500" />
                  <span className="text-sm">Active</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400">0</span>
              </button>

              <button className="w-full flex items-center justify-between pl-8 pr-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group">
                <div className="flex items-center gap-3">
                  <PauseCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-sm">On Hold</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400">0</span>
              </button>

              <button className="w-full flex items-center justify-between pl-8 pr-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Completed</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400">0</span>
              </button>

              <button className="w-full flex items-center justify-between pl-8 pr-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group">
                <div className="flex items-center gap-3">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Dropped</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400">0</span>
              </button>
            </div>
          )}
        </div>

        {/* Tags Section */}
        <div className="mt-4">
          <button
            onClick={() => setIsTagsOpen(!isTagsOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5" />
              <span className="text-sm font-medium">Tags</span>
            </div>
            {isTagsOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {isTagsOpen && (
            <div className="mt-1">
              <button className="w-full flex items-center justify-between pl-8 pr-4 py-2 text-gray-400 hover:bg-[#282c30] hover:text-gray-200 transition-colors group">
                <div className="flex items-center gap-3">
                  <Circle className="w-2 h-2 fill-gray-400" />
                  <span className="text-sm">Tutorial</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400">2</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* User Profile Section */}
      <div className="border-t border-[#2d3236]">
        <button className="w-full flex items-center justify-between px-4 py-3 text-gray-400 hover:bg-[#282c30] transition-colors group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#333840] flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-200">Takuya Matsuyama</p>
              <p className="text-xs text-gray-500">Syncing...</p>
            </div>
          </div>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
