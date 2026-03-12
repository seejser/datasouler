import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, Lock, Zap, Users } from "lucide-react";

/**
 * Security Guide - 安全指南
 * Design: Hacker Cosmos
 * 
 * Educational content about Skill security and VirusTotal partnership
 */

export default function Security() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold font-mono">🛡️ 安全指南</h1>
            <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded">VirusTotal 认证</span>
          </div>
          <p className="text-muted-foreground">
            了解 DataSouler 如何与 VirusTotal 合作保护您的 AI 灵魂安全
          </p>
        </div>
      </section>

      {/* VirusTotal Partnership */}
      <section className="py-16 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-mono">VirusTotal 合作</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">我们的承诺</h3>
              <p className="text-foreground mb-4">
                所有发布到技能工坊的 Skills 都通过 VirusTotal 进行自动安全扫描。我们使用 Code Insight 进行 LLM 驱动的代码分析，检测恶意行为、供应链风险和可疑模式。
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 自动威胁检测</li>
                <li>✓ 代码行为分析</li>
                <li>✓ 供应链可见性</li>
                <li>✓ 日常重新扫描</li>
              </ul>
            </div>

            <Card className="p-6 bg-secondary/10 border-secondary/50">
              <h3 className="text-lg font-bold mb-4">扫描流程</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold">发布 Skill</p>
                    <p className="text-xs text-muted-foreground">Skill 发布到技能工坊</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold">哈希计算</p>
                    <p className="text-xs text-muted-foreground">计算 SHA-256 哈希指纹</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold">VirusTotal 查询</p>
                    <p className="text-xs text-muted-foreground">检查威胁情报数据库</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">4</div>
                  <div>
                    <p className="font-bold">Code Insight 分析</p>
                    <p className="text-xs text-muted-foreground">LLM 驱动的代码安全分析</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">5</div>
                  <div>
                    <p className="font-bold">自动审批</p>
                    <p className="text-xs text-muted-foreground">根据结果自动处理</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Scan Status Explained */}
      <section className="py-16 px-4 border-b border-border/50 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-mono">扫描状态说明</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                status: "clean",
                label: "✓ 安全",
                color: "bg-green-500/20 text-green-500",
                icon: CheckCircle,
                description: "Skill 通过了所有安全检查，无已知威胁。自动批准发布。",
                actions: ["可以安心使用", "定期重新扫描", "社区审计"]
              },
              {
                status: "suspicious",
                label: "⚠ 可疑",
                color: "bg-yellow-500/20 text-yellow-500",
                icon: AlertTriangle,
                description: "检测到可能的风险行为。Skill 仍可使用，但需谨慎。",
                actions: ["标记警告", "需要审计", "发布者可申诉"]
              },
              {
                status: "malicious",
                label: "✗ 恶意",
                color: "bg-red-500/20 text-red-500",
                icon: Lock,
                description: "检测到恶意代码或行为。Skill 立即被阻止下载。",
                actions: ["立即阻止", "通知发布者", "社区告知"]
              },
              {
                status: "scanning",
                label: "⚡ 扫描中",
                color: "bg-blue-500/20 text-blue-500",
                icon: Zap,
                description: "Skill 正在进行 VirusTotal 扫描。请稍候。",
                actions: ["异步处理", "实时更新", "完成后通知"]
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 bg-card border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold">{item.label}</h3>
                  </div>
                  <p className="text-foreground mb-4 text-sm">{item.description}</p>
                  <div className="space-y-1">
                    {item.actions.map(action => (
                      <p key={action} className="text-xs text-muted-foreground">• {action}</p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-mono">安全最佳实践</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                对于用户
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "检查扫描状态",
                    desc: "始终查看 VirusTotal 扫描结果，了解 Skill 的安全状态"
                  },
                  {
                    title: "审查权限",
                    desc: "在安装前检查 Skill 需要的权限，确保合理"
                  },
                  {
                    title: "信任发布者",
                    desc: "优先选择认证或信任的发布者的 Skills"
                  },
                  {
                    title: "报告可疑行为",
                    desc: "如发现异常，立即向 security@openclaw.ai 报告"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-secondary/10 rounded border border-border/50">
                    <p className="font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                对于发布者
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "遵循安全标准",
                    desc: "编写安全的代码，避免可疑的行为模式"
                  },
                  {
                    title: "透明的权限",
                    desc: "清楚地声明 Skill 需要的所有权限"
                  },
                  {
                    title: "文档完整",
                    desc: "提供详细的 SKILL.md 文档说明功能"
                  },
                  {
                    title: "处理误判",
                    desc: "如被误判，及时向 security@openclaw.ai 申诉"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-secondary/10 rounded border border-border/50">
                    <p className="font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 border-b border-border/50 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-mono">常见问题</h2>

          <div className="space-y-4">
            {[
              {
                q: "VirusTotal 扫描会误判吗？",
                a: "是的，任何自动化工具都可能产生误判。如果您的 Skill 被误判，请联系 security@openclaw.ai，我们会进行人工审查。"
              },
              {
                q: "扫描需要多长时间？",
                a: "大多数 Skills 在几分钟内完成扫描。结果会实时显示在 Skill 页面上。"
              },
              {
                q: "我的 Skill 被标记为恶意，怎么办？",
                a: "请立即联系 security@openclaw.ai 并提供详细信息。我们会审查您的申诉并进行调查。"
              },
              {
                q: "VirusTotal 扫描是免费的吗？",
                a: "是的，对所有 DataSouler 用户免费。这是我们与 VirusTotal 的合作承诺。"
              },
              {
                q: "我可以信任所有'安全'的 Skills 吗？",
                a: "VirusTotal 扫描是一个安全层，但不是银弹。始终审查权限、发布者信誉和代码。"
              },
              {
                q: "如何报告可疑 Skill？",
                a: "在 Skill 页面上点击'报告'按钮，或直接发送邮件至 security@openclaw.ai。"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-card border-border/50">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">安全问题？</h2>
          <p className="text-muted-foreground mb-8">
            如有任何安全问题或疑虑，请联系我们的安全团队
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            security@openclaw.ai
          </Button>
        </div>
      </section>
    </div>
  );
}
