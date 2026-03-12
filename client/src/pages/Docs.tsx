import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, BookOpen, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Documentation Page
 * Design: Hacker Cosmos
 * 
 * Features:
 * - Quick start guide
 * - Installation instructions
 * - Skill creation tutorial
 * - API documentation
 */

interface DocSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "快速开始",
    icon: <Zap className="w-6 h-6" />,
    description: "5 分钟内安装并运行 DataSouler",
    items: [
      "系统要求",
      "安装步骤",
      "首次配置",
      "常见问题"
    ]
  },
  {
    id: "installation",
    title: "安装指南",
    icon: <Code className="w-6 h-6" />,
    description: "详细的安装和配置说明",
    items: [
      "macOS 安装",
      "Windows 安装",
      "Linux 安装",
      "Docker 部署"
    ]
  },
  {
    id: "skills",
    title: "Skill 开发",
    icon: <BookOpen className="w-6 h-6" />,
    description: "创建自己的 DataSouler Skills",
    items: [
      "Skill 结构",
      "API 参考",
      "示例项目",
      "发布到市场"
    ]
  }
];

const quickStartSteps = [
  {
    step: 1,
    title: "安装 DataSouler",
    code: "npm install -g datasouler"
  },
  {
    step: 2,
    title: "初始化项目",
    code: "datasouler init my-assistant"
  },
  {
    step: 3,
    title: "启动助手",
    code: "cd my-assistant && datasouler start"
  },
  {
    step: 4,
    title: "开始使用",
    code: "# 通过 Telegram/WhatsApp 与你的助手交互"
  }
];

export default function Docs() {
  const [expandedSection, setExpandedSection] = useState<string | null>("getting-started");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-mono">文档</h1>
          <p className="text-muted-foreground">
            完整的 DataSouler 文档、教程和 API 参考。
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono">快速开始</h2>

          <div className="space-y-4">
            {quickStartSteps.map(item => (
              <Card key={item.step} className="p-6 bg-card border-border/50">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <div className="bg-background/50 border border-border/50 rounded p-4 font-mono text-sm text-secondary-foreground overflow-x-auto">
                      <span className="text-primary">$</span> {item.code}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono">文档</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {docSections.map(section => (
              <Card
                key={section.id}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              >
                <div className="text-primary mb-4">{section.icon}</div>
                <h3 className="text-lg font-bold mb-2 font-mono">{section.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{section.description}</p>

                <div className={`space-y-2 overflow-hidden transition-all ${expandedSection === section.id ? 'max-h-96' : 'max-h-0'}`}>
                  {section.items.map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 border-border/50"
                >
                  {expandedSection === section.id ? "收起" : "查看"} <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference Preview */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-mono">API 参考</h2>

          <Card className="p-8 bg-card border-border/50">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold font-mono mb-4">核心 API</h3>
                <div className="space-y-3">
                  {[
                    { method: "POST", endpoint: "/api/skills/execute", desc: "执行 Skill" },
                    { method: "GET", endpoint: "/api/skills/list", desc: "列出所有 Skills" },
                    { method: "POST", endpoint: "/api/tasks/create", desc: "创建任务" },
                    { method: "GET", endpoint: "/api/status", desc: "获取系统状态" }
                  ].map((api, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-background/50 rounded border border-border/50">
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                        {api.method}
                      </span>
                      <code className="font-mono text-sm text-secondary-foreground flex-1">{api.endpoint}</code>
                      <span className="text-sm text-muted-foreground">{api.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="text-lg font-bold font-mono mb-4">请求示例</h3>
                <div className="bg-background/50 border border-border/50 rounded p-4 font-mono text-xs text-secondary-foreground overflow-x-auto">
                  <pre>{`curl -X POST http://localhost:3000/api/skills/execute \\
  -H "Content-Type: application/json" \\
  -d '{
    "skillName": "summarize",
    "input": "Your text here"
  }'`}</pre>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">需要帮助？</h2>
          <p className="text-muted-foreground mb-8">
            查看我们的常见问题、社区论坛或联系我们的支持团队。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">
              查看 FAQ
            </Button>
            <Button variant="outline" className="border-border/50">
              访问论坛
            </Button>
            <Button variant="outline" className="border-border/50">
              联系支持
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
