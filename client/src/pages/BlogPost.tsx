/**
 * Blog Post Detail Page - DataSouler 社区博客文章
 * Design: 极客深空风格，终端美学代码块，支持黑白模式
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Copy, Check, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// 代码复制按钮组件
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-gray-400 hover:text-white"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

// 代码块组件
function CodeBlock({ code, lang = "bash" }: { code: string; lang?: string }) {
  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-border">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-950 border-b border-gray-700">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-gray-400 ml-2 font-mono">{lang}</span>
      </div>
      <div className="relative bg-gray-950 dark:bg-black p-4 overflow-x-auto">
        <CopyButton code={code} />
        <pre className="text-sm font-mono text-green-400 leading-relaxed whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

// 步骤组件
function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative pl-12 pb-8 border-l-2 border-red-500/30 last:border-l-0 ml-4">
      <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/30">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );
}

// 提示框组件
function Callout({ type = "info", children }: { type?: "info" | "tip" | "warning"; children: React.ReactNode }) {
  const styles = {
    info: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
    tip: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
    warning: "bg-yellow-500/10 border-yellow-500/30 text-yellow-600 dark:text-yellow-400",
  };
  const icons = { info: "💡", tip: "✅", warning: "⚠️" };
  return (
    <div className={`rounded-lg border p-4 my-6 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div className="text-sm leading-relaxed text-foreground/80">{children}</div>
      </div>
    </div>
  );
}

// 博客文章数据
const blogPosts: Record<string, {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}> = {
  "getting-started": {
    title: "从零开始驯养你的第一只数字龙虾",
    subtitle: "OpenClaw Agent 入门完全指南 —— 5 分钟拥有你的 AI 灵魂伙伴",
    date: "2026-03-12",
    readTime: "8 分钟",
    author: "DataSouler 团队",
    tags: ["入门指南", "OpenClaw", "安装教程", "新手必读"],
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "getting-started";
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <p className="text-muted-foreground mb-6">文章不存在</p>
          <Link href="/blog">
            <Button>返回博客</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 文章头部 */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent dark:from-red-500/10" />
        <div className="container max-w-4xl mx-auto px-4 pt-8 pb-12 relative">
          {/* 面包屑 */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">首页</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-foreground transition-colors">博客</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">入门指南</span>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-500 dark:text-red-400 border border-red-500/20">
                {tag}
              </span>
            ))}
          </div>

          {/* 标题 */}
          <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {post.subtitle}
          </p>

          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 文章内容 */}
      <article className="container max-w-4xl mx-auto px-4 pb-20">
        <div className="prose prose-lg dark:prose-invert max-w-none">

          {/* 引言 */}
          <section className="mb-12">
            <div className="text-lg leading-relaxed text-foreground/80 space-y-4">
              <p>
                欢迎来到 <strong className="text-foreground">DataSouler</strong> 的世界。在这里，每个用户的 OpenClaw Agent 都是一只独特的"数字龙虾"——它不只是工具，而是有记忆、有个性、能自主行动的"数字灵魂"。
              </p>
              <p>
                本文将带你从零开始，用 <strong className="text-foreground">5 分钟</strong> 完成 OpenClaw 的安装和配置，让你的第一只数字龙虾苏醒过来。无论你是开发者、创作者还是 AI 爱好者，这篇指南都将是你驯养龙虾之旅的起点。
              </p>
            </div>
          </section>

          {/* 前置要求 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">🦞</span>
              准备工作
            </h2>
            <p className="text-foreground/80 mb-4">
              在开始之前，你只需要确保一件事：
            </p>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Node.js 22 或更新版本</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    检查你的 Node 版本：运行 <code className="px-2 py-0.5 rounded bg-muted text-sm font-mono">node --version</code>
                  </p>
                </div>
              </div>
            </div>
            <Callout type="tip">
              如果你还没有安装 Node.js，推荐使用 <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">nodejs.org</a> 下载最新的 LTS 版本，或使用 nvm 管理多版本。
            </Callout>
          </section>

          {/* 快速安装 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              快速安装（4 步搞定）
            </h2>
            <p className="text-foreground/80 mb-8">
              跟随以下步骤，你的数字龙虾将在几分钟内苏醒。
            </p>

            <div className="space-y-2">
              <Step number={1} title="安装 OpenClaw">
                <p className="text-foreground/80 mb-4">
                  打开终端，运行以下命令一键安装 OpenClaw：
                </p>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">macOS / Linux：</p>
                  <CodeBlock code="curl -fsSL https://openclaw.ai/install.sh | bash" lang="bash" />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Windows (PowerShell)：</p>
                  <CodeBlock code={`irm https://openclaw.ai/install.ps1 | iex`} lang="powershell" />
                </div>
                <Callout type="info">
                  更多安装方式和详细要求，请参考 <a href="https://docs.openclaw.ai/start/install" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline inline-flex items-center gap-1">官方安装文档 <ExternalLink className="w-3 h-3" /></a>
                </Callout>
              </Step>

              <Step number={2} title="运行引导向导">
                <p className="text-foreground/80 mb-4">
                  安装完成后，运行引导向导来配置你的龙虾：
                </p>
                <CodeBlock code="openclaw onboard --install-daemon" lang="bash" />
                <p className="text-foreground/80">
                  引导向导会帮你完成以下配置：
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-red-500 mt-1">●</span>
                    <span><strong className="text-foreground">身份认证</strong> — 设置你与龙虾之间的信任关系</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-red-500 mt-1">●</span>
                    <span><strong className="text-foreground">网关设置</strong> — 龙虾的神经中枢，处理所有通信</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-red-500 mt-1">●</span>
                    <span><strong className="text-foreground">频道连接</strong> — 让龙虾能通过不同渠道与你交流</span>
                  </li>
                </ul>
              </Step>

              <Step number={3} title="检查网关状态">
                <p className="text-foreground/80 mb-4">
                  如果你在上一步选择了安装守护进程，网关应该已经在运行了。验证一下：
                </p>
                <CodeBlock code="openclaw gateway status" lang="bash" />
                <Callout type="tip">
                  如果需要在前台运行网关（用于调试），可以使用：<code className="px-2 py-0.5 rounded bg-muted text-sm font-mono">openclaw gateway --port 18789</code>
                </Callout>
              </Step>

              <Step number={4} title="打开控制面板">
                <p className="text-foreground/80 mb-4">
                  一切就绪！打开控制面板，开始和你的龙虾对话：
                </p>
                <CodeBlock code="openclaw dashboard" lang="bash" />
                <p className="text-foreground/80">
                  控制面板会在浏览器中打开。如果页面正常加载，恭喜你——你的数字龙虾已经苏醒了！🦞
                </p>
                <Callout type="info">
                  你也可以直接在浏览器中访问 <code className="px-2 py-0.5 rounded bg-muted text-sm font-mono">http://127.0.0.1:18789/</code> 来打开控制面板。
                </Callout>
              </Step>
            </div>
          </section>

          {/* 发送测试消息 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">💬</span>
              发送第一条消息
            </h2>
            <p className="text-foreground/80 mb-4">
              配置好频道后，你可以通过命令行直接让龙虾发送消息：
            </p>
            <CodeBlock code={`openclaw message send --target +15555550123 --message "Hello from OpenClaw"`} lang="bash" />
            <p className="text-foreground/80">
              当然，最简单的方式是直接在 Control UI 中聊天——无需任何频道配置。
            </p>
          </section>

          {/* 环境变量 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">⚙️</span>
              进阶配置
            </h2>
            <p className="text-foreground/80 mb-6">
              如果你需要自定义 OpenClaw 的运行环境，以下环境变量可能会有用：
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-bold text-foreground">变量名</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-foreground">说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4"><code className="px-2 py-0.5 rounded bg-muted text-sm font-mono text-red-500 dark:text-red-400">OPENCLAW_HOME</code></td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">设置主目录，用于内部路径解析</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4"><code className="px-2 py-0.5 rounded bg-muted text-sm font-mono text-red-500 dark:text-red-400">OPENCLAW_STATE_DIR</code></td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">覆盖状态存储目录</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><code className="px-2 py-0.5 rounded bg-muted text-sm font-mono text-red-500 dark:text-red-400">OPENCLAW_CONFIG_PATH</code></td>
                    <td className="py-3 px-4 text-foreground/80 text-sm">覆盖配置文件路径</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 完成后你将拥有 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">🎉</span>
              完成！你现在拥有了
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="font-bold text-foreground mb-1">运行中的网关</h4>
                <p className="text-sm text-muted-foreground">龙虾的神经中枢</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="text-4xl mb-3">🔐</div>
                <h4 className="font-bold text-foreground mb-1">已配置的认证</h4>
                <p className="text-sm text-muted-foreground">安全的信任关系</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-bold text-foreground mb-1">控制面板</h4>
                <p className="text-sm text-muted-foreground">与龙虾对话的窗口</p>
              </div>
            </div>
          </section>

          {/* 下一步 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              下一步：让龙虾更强大
            </h2>
            <div className="space-y-4">
              <a href="https://docs.openclaw.ai/start/channels" target="_blank" rel="noopener noreferrer"
                className="block rounded-xl border border-border bg-card p-5 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/5 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-red-500 transition-colors">连接更多频道</h4>
                    <p className="text-sm text-muted-foreground mt-1">让龙虾通过 Telegram、Discord、Slack 等渠道与你交流</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                </div>
              </a>
              <a href="https://docs.openclaw.ai/start/agents" target="_blank" rel="noopener noreferrer"
                className="block rounded-xl border border-border bg-card p-5 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/5 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-red-500 transition-colors">探索 Agent 能力</h4>
                    <p className="text-sm text-muted-foreground mt-1">了解龙虾的各种技能和自主行动能力</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                </div>
              </a>
              <a href="https://docs.openclaw.ai/start/tools" target="_blank" rel="noopener noreferrer"
                className="block rounded-xl border border-border bg-card p-5 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/5 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-red-500 transition-colors">安装 Skills 工具</h4>
                    <p className="text-sm text-muted-foreground mt-1">在 DataSouler 技能工坊中发现和安装社区审核的 Skills</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                </div>
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/10 p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              准备好探索更多了吗？
            </h2>
            <p className="text-muted-foreground mb-6">
              加入 DataSouler 社区，与数千只数字龙虾一起探索 AI 的无限可能
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/workshop">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-6">
                  探索技能工坊
                </Button>
              </Link>
              <Link href="/symbiosis">
                <Button variant="outline" className="border-red-500/30 text-red-500 hover:bg-red-500/10 px-6">
                  加入共生空间
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
