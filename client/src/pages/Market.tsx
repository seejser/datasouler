import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Zap, Users, TrendingUp } from "lucide-react";

/**
 * Soul Market - 灵魂市场
 * Design: Hacker Cosmos
 * 
 * Innovative Agent capability trading layer
 * Memory templates, Agent hosting, compute sharing, task crowdsourcing
 */

interface MarketItem {
  id: string;
  title: string;
  creator: string;
  price: number;
  rating: number;
  sales: number;
  description: string;
  category: string;
}

const memoryTemplates: MarketItem[] = [
  {
    id: "1",
    title: "程序员套餐",
    creator: "@code_master",
    price: 99,
    rating: 4.8,
    sales: 342,
    description: "优化的代码审查、项目管理和文档生成配置",
    category: "template"
  },
  {
    id: "2",
    title: "投资者套餐",
    creator: "@finance_guru",
    price: 149,
    rating: 4.6,
    sales: 218,
    description: "市场分析、数据整理和报告生成配置",
    category: "template"
  },
  {
    id: "3",
    title: "创意写手套餐",
    creator: "@content_creator",
    price: 79,
    rating: 4.9,
    sales: 567,
    description: "内容创作、编辑和社交媒体管理配置",
    category: "template"
  }
];

const hostingServices: MarketItem[] = [
  {
    id: "4",
    title: "基础托管",
    creator: "@datasouler",
    price: 9.99,
    rating: 4.7,
    sales: 1203,
    description: "月度 Agent 托管服务，包括 24/7 运行时间",
    category: "hosting"
  },
  {
    id: "5",
    title: "专业托管",
    creator: "@datasouler",
    price: 29.99,
    rating: 4.9,
    sales: 856,
    description: "高性能 Agent 托管，优先支持和自定义配置",
    category: "hosting"
  },
  {
    id: "6",
    title: "企业托管",
    creator: "@datasouler",
    price: 99.99,
    rating: 5.0,
    sales: 124,
    description: "企业级 Agent 托管，包括 SLA 和专属支持",
    category: "hosting"
  }
];

const computeSharing: MarketItem[] = [
  {
    id: "7",
    title: "GPU 算力共享",
    creator: "@gpu_provider_1",
    price: 0.5,
    rating: 4.6,
    sales: 2341,
    description: "每小时 GPU 算力租赁，支持 CUDA 和 ROCm",
    category: "compute"
  },
  {
    id: "8",
    title: "CPU 算力共享",
    creator: "@cpu_provider_1",
    price: 0.1,
    rating: 4.4,
    sales: 5123,
    description: "经济型 CPU 算力，适合轻量级任务",
    category: "compute"
  },
  {
    id: "9",
    title: "高性能计算集群",
    creator: "@hpc_provider",
    price: 5.0,
    rating: 4.8,
    sales: 89,
    description: "用于复杂模型训练和数据处理的高性能集群",
    category: "compute"
  }
];

export default function Market() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-mono">🧠 灵魂市场</h1>
          <p className="text-muted-foreground">
            交易记忆模板、托管 Agent、共享算力，让 AI 灵魂创造价值
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "总交易额", value: "$1.2M", icon: TrendingUp },
              { label: "活跃卖家", value: "342", icon: Users },
              { label: "模板库", value: "1,203", icon: ShoppingCart },
              { label: "平均评分", value: "4.7★", icon: Zap }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="p-4 bg-card border-border/50">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border/50">
              <TabsTrigger value="templates">记忆模板</TabsTrigger>
              <TabsTrigger value="hosting">Agent 托管</TabsTrigger>
              <TabsTrigger value="compute">算力共享</TabsTrigger>
            </TabsList>

            {/* Memory Templates */}
            <TabsContent value="templates" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {memoryTemplates.map(item => (
                  <Card key={item.id} className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all">
                    <h3 className="text-lg font-bold font-mono mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {item.creator}</p>
                    <p className="text-foreground mb-4 text-sm">{item.description}</p>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                      <div>
                        <p className="text-2xl font-bold text-primary">${item.price}</p>
                        <p className="text-xs text-muted-foreground">{item.sales} 次购买</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-secondary-foreground">{item.rating}★</p>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <ShoppingCart className="mr-2 w-4 h-4" /> 购买
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Agent Hosting */}
            <TabsContent value="hosting" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hostingServices.map(item => (
                  <Card key={item.id} className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all">
                    <h3 className="text-lg font-bold font-mono mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {item.creator}</p>
                    <p className="text-foreground mb-4 text-sm">{item.description}</p>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                      <div>
                        <p className="text-2xl font-bold text-primary">${item.price}</p>
                        <p className="text-xs text-muted-foreground">每月</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-secondary-foreground">{item.rating}★</p>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <ShoppingCart className="mr-2 w-4 h-4" /> 订阅
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Compute Sharing */}
            <TabsContent value="compute" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {computeSharing.map(item => (
                  <Card key={item.id} className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all">
                    <h3 className="text-lg font-bold font-mono mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {item.creator}</p>
                    <p className="text-foreground mb-4 text-sm">{item.description}</p>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                      <div>
                        <p className="text-2xl font-bold text-primary">${item.price}</p>
                        <p className="text-xs text-muted-foreground">每小时</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-secondary-foreground">{item.rating}★</p>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Zap className="mr-2 w-4 h-4" /> 租赁
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono text-center">如何使用灵魂市场</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "浏览", desc: "探索各种记忆模板、托管服务和算力选项" },
              { step: "2", title: "选择", desc: "根据你的需求和预算选择最适合的产品" },
              { step: "3", title: "购买", desc: "使用 Stripe 或加密货币完成支付" },
              { step: "4", title: "使用", desc: "立即开始使用，享受 AI 灵魂的增强能力" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller CTA */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">想成为卖家？</h2>
          <p className="text-muted-foreground mb-8">
            分享你的记忆模板、托管服务或算力，从中获利
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            成为卖家
          </Button>
        </div>
      </section>
    </div>
  );
}
