import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Zap, Users, Sparkles } from "lucide-react";
import { useState } from "react";

/**
 * OpenClaw Community Hub - Home Page
 * Design: Hacker Cosmos (Dark Space Theme)
 * 
 * Key Elements:
 * - Deep space hero with neon accents
 * - Glowing lobster mascot
 * - Terminal-style quick start
 * - User testimonials showcase
 */

interface Testimonial {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    author: "张三",
    role: "AI 开发者",
    content: "OpenClaw 改变了我的工作流程。从邮件到代码审查，一切都自动化了。",
    avatar: "👨‍💻"
  },
  {
    author: "李四",
    role: "创业者",
    content: "这是我用过的最强大的 AI 助手。它就像一个 24/7 的团队成员。",
    avatar: "👩‍💼"
  },
  {
    author: "王五",
    role: "开源贡献者",
    content: "OpenClaw 的开放架构让我能够创建自己的 Skills。太棒了！",
    avatar: "👨‍🔬"
  }
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          const opacity = Math.random() * 0.6 + 0.1;
          const duration = Math.random() * 4 + 2;
          const delay = Math.random() * 2;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: size + "px",
                height: size + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: opacity,
                animation: `twinkle ${duration}s infinite ${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663332236731/W9GFumZCwHZxSn6p9pLVte/hero-deep-space-Y4RQRPyFpTTLy4vPhRLgNt.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl">
          {/* Glowing Lobster Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary-foreground to-primary rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663332236731/W9GFumZCwHZxSn6p9pLVte/glowing-lobster-logo-WkDkuKgzaciubF7TjpPwSS.webp"
                alt="OpenClaw Lobster"
                className="w-full h-full object-contain drop-shadow-lg animate-pulse relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 20px #ff1744) drop-shadow(0 0 40px #ff1744)',
                }}
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
            OpenClaw
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-secondary-foreground mb-2 font-mono">
            THE AI THAT ACTUALLY DOES THINGS
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            一个开源的 AI 电脑助手，能够自动化你的日常任务、开发项目、整理文件。24/7 运行在你的电脑上。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              开始使用 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-secondary-foreground/50 hover:bg-secondary/20 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="mr-2 w-5 h-5" /> GitHub
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded border border-border/50 bg-card/50 backdrop-blur">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Skills</div>
            </div>
            <div className="p-4 rounded border border-border/50 bg-card/50 backdrop-blur">
              <div className="text-2xl font-bold text-secondary-foreground">5K+</div>
              <div className="text-sm text-muted-foreground">开发者</div>
            </div>
            <div className="p-4 rounded border border-border/50 bg-card/50 backdrop-blur">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">开源</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-mono">
            为什么选择 OpenClaw
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "极速自动化",
                description: "用自然语言描述任务，OpenClaw 立即执行。无需编程。"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "社区驱动",
                description: "10000+ 社区创建的 Skills，持续增长的生态系统。"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "完全开源",
                description: "代码完全开放，可自定义，可扩展，社区维护。"
              }
            ].map((feature, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`text-primary mb-4 transition-all ${hoveredCard === idx ? 'scale-110' : ''}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-mono">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-mono">快速开始</h2>

          <Card className="bg-card border-border/50 p-8 overflow-hidden">
            <div className="space-y-4 font-mono text-sm">
              <div className="text-secondary-foreground">
                <span className="text-primary">$</span> npm install openclaw
              </div>
              <div className="text-secondary-foreground">
                <span className="text-primary">$</span> openclaw init
              </div>
              <div className="text-secondary-foreground">
                <span className="text-primary">$</span> openclaw start
              </div>
              <div className="text-muted-foreground mt-4">
                # 现在你有了一个 24/7 的 AI 助手！
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Button className="bg-primary hover:bg-primary/90">
              查看完整文档 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 bg-card/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-mono">
            社区声音
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-20 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">
            准备好了吗？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            加入数千名开发者，体验 AI 助手的未来。
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/50"
          >
            立即开始 <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Styles for animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
