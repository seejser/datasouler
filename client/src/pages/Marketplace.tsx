import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, Download, Filter } from "lucide-react";
import { useState } from "react";

/**
 * OpenClaw Marketplace - Skills Showcase
 * Design: Hacker Cosmos
 * 
 * Features:
 * - Skill search and filtering
 * - Category browsing
 * - Rating system
 * - Installation quick-copy
 */

interface Skill {
  id: string;
  name: string;
  author: string;
  description: string;
  category: string;
  rating: number;
  downloads: number;
  tags: string[];
  installCommand: string;
}

const skills: Skill[] = [
  {
    id: "1",
    name: "apple-notes",
    author: "@openclaw",
    description: "与 Apple Notes 集成，自动保存笔记和想法。",
    category: "productivity",
    rating: 9.8,
    downloads: 282955,
    tags: ["notes", "productivity", "apple"],
    installCommand: "npx @skill-hub/cli install apple-notes"
  },
  {
    id: "2",
    name: "summarize",
    author: "@openclaw",
    description: "快速总结任何文本、文章或代码。AI 驱动的摘要。",
    category: "writing",
    rating: 9.7,
    downloads: 233795,
    tags: ["summarize", "writing", "ai"],
    installCommand: "npx @skill-hub/cli install summarize"
  },
  {
    id: "3",
    name: "goplaces",
    author: "@openclaw",
    description: "规划行程、查找景点、预订酒店。一站式旅行助手。",
    category: "travel",
    rating: 9.6,
    downloads: 229809,
    tags: ["travel", "planning", "maps"],
    installCommand: "npx @skill-hub/cli install goplaces"
  },
  {
    id: "4",
    name: "file-search",
    author: "@massgen",
    description: "使用 ripgrep 和 ast-grep 进行高效的文件搜索。",
    category: "development",
    rating: 9.0,
    downloads: 150000,
    tags: ["search", "development", "tools"],
    installCommand: "npx @skill-hub/cli install file-search"
  },
  {
    id: "5",
    name: "skill-creator",
    author: "@davepoon",
    description: "创建自己的 Skills 的完整框架和工具。",
    category: "development",
    rating: 9.1,
    downloads: 120000,
    tags: ["skill", "development", "framework"],
    installCommand: "npx @skill-hub/cli install skill-creator"
  },
  {
    id: "6",
    name: "systematic-debugging",
    author: "@obra",
    description: "结构化的调试方法论，快速定位和修复 Bug。",
    category: "development",
    rating: 9.2,
    downloads: 110000,
    tags: ["debugging", "development", "methodology"],
    installCommand: "npx @skill-hub/cli install systematic-debugging"
  }
];

const categories = [
  { name: "全部", value: "all" },
  { name: "开发", value: "development" },
  { name: "生产力", value: "productivity" },
  { name: "写作", value: "writing" },
  { name: "旅行", value: "travel" }
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyCommand = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-mono">Skill 市场</h1>
          <p className="text-muted-foreground mb-8">
            浏览和安装社区创建的 Skills，扩展 OpenClaw 的功能。
          </p>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="搜索 Skills..."
              className="pl-10 bg-card border-border/50 text-foreground placeholder:text-muted-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? "default" : "outline"}
                className={selectedCategory === cat.value ? "bg-primary" : "border-border/50"}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map(skill => (
              <Card
                key={skill.id}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold font-mono text-primary">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.author}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-card/50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-bold">{skill.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground mb-4">{skill.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary/30 text-secondary-foreground rounded border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{skill.downloads.toLocaleString()}</span>
                  </div>
                </div>

                {/* Install Command */}
                <div className="bg-background/50 border border-border/50 rounded p-3 mb-4 font-mono text-xs text-secondary-foreground overflow-x-auto">
                  {skill.installCommand}
                </div>

                {/* Copy Button */}
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => handleCopyCommand(skill.installCommand, skill.id)}
                >
                  {copiedId === skill.id ? "已复制！" : "复制命令"}
                </Button>
              </Card>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">没有找到匹配的 Skills</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Footer */}
      <section className="border-t border-border/50 py-12 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">社区 Skills</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary-foreground mb-2">4.5M+</div>
            <p className="text-muted-foreground">总下载量</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">开源免费</p>
          </div>
        </div>
      </section>
    </div>
  );
}
