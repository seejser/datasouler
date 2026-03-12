import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Clock, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

/**
 * Skill Workshop - 技能工坊
 * Design: Hacker Cosmos
 * 
 * Community-driven skill auditing and certification
 * Solve the safety risks of malicious skills
 */

interface Skill {
  id: string;
  name: string;
  author: string;
  description: string;
  status: "pending" | "auditing" | "verified" | "rejected";
  riskLevel: "low" | "medium" | "high";
  auditorsCount: number;
  approvalRate: number;
  downloads: number;
  createdAt: string;
}

const skills: Skill[] = [
  {
    id: "1",
    name: "email-automation",
    author: "@dev_team",
    description: "自动化邮件管理和回复",
    status: "verified",
    riskLevel: "low",
    auditorsCount: 12,
    approvalRate: 98,
    downloads: 5420,
    createdAt: "2026-02-15"
  },
  {
    id: "2",
    name: "file-organizer",
    author: "@productivity_guru",
    description: "智能文件整理和分类",
    status: "verified",
    riskLevel: "low",
    auditorsCount: 8,
    approvalRate: 95,
    downloads: 3210,
    createdAt: "2026-02-10"
  },
  {
    id: "3",
    name: "code-reviewer",
    author: "@code_master",
    description: "自动代码审查和优化建议",
    status: "auditing",
    riskLevel: "medium",
    auditorsCount: 5,
    approvalRate: 72,
    downloads: 1840,
    createdAt: "2026-03-01"
  },
  {
    id: "4",
    name: "system-optimizer",
    author: "@unknown_user",
    description: "系统性能优化工具",
    status: "pending",
    riskLevel: "high",
    auditorsCount: 0,
    approvalRate: 0,
    downloads: 120,
    createdAt: "2026-03-10"
  }
];

const statusConfig = {
  verified: { icon: CheckCircle, label: "已认证", color: "text-green-500" },
  auditing: { icon: Clock, label: "审核中", color: "text-yellow-500" },
  pending: { icon: AlertCircle, label: "待审核", color: "text-orange-500" },
  rejected: { icon: AlertCircle, label: "已拒绝", color: "text-red-500" }
};

const riskConfig = {
  low: { label: "低风险", color: "bg-green-500/20 text-green-500" },
  medium: { label: "中风险", color: "bg-yellow-500/20 text-yellow-500" },
  high: { label: "高风险", color: "bg-red-500/20 text-red-500" }
};

export default function Workshop() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredSkills = filterStatus === "all" 
    ? skills 
    : skills.filter(s => s.status === filterStatus);

  const StatusIcon = selectedSkill ? statusConfig[selectedSkill.status as keyof typeof statusConfig]?.icon : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-mono">🛠️ 技能工坊</h1>
          <p className="text-muted-foreground">
            社区驱动的技能审计和认证系统，确保每个 Skill 都是安全可靠的
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "已认证", value: "42", icon: CheckCircle },
              { label: "审核中", value: "8", icon: Clock },
              { label: "审计员", value: "156", icon: Users },
              { label: "总下载", value: "125K+", icon: TrendingUp }
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

      {/* Filter Tabs */}
      <section className="py-8 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {[
              { label: "全部", value: "all" },
              { label: "已认证", value: "verified" },
              { label: "审核中", value: "auditing" },
              { label: "待审核", value: "pending" }
            ].map(tab => (
              <Button
                key={tab.value}
                variant={filterStatus === tab.value ? "default" : "outline"}
                className={filterStatus === tab.value ? "bg-primary" : "border-border/50"}
                onClick={() => setFilterStatus(tab.value)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills List */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {filteredSkills.map(skill => {
              const StatusIcon = statusConfig[skill.status]?.icon;
              return (
                <Card
                  key={skill.id}
                  className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold font-mono">{skill.name}</h3>
                        <div className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${riskConfig[skill.riskLevel].color}`}>
                          {riskConfig[skill.riskLevel].label}
                        </div>
                        {StatusIcon && (
                          <div className={`flex items-center gap-1 text-xs ${statusConfig[skill.status].color}`}>
                            <StatusIcon className="w-4 h-4" />
                            {statusConfig[skill.status].label}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">by {skill.author}</p>
                      <p className="text-foreground">{skill.description}</p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-2 md:text-right">
                      <div className="text-sm">
                        <p className="text-muted-foreground">审计进度</p>
                        <p className="text-lg font-bold text-primary">{skill.approvalRate}%</p>
                      </div>
                      <div className="text-sm">
                        <p className="text-muted-foreground">{skill.auditorsCount} 审计员</p>
                        <p className="text-muted-foreground">{skill.downloads} 下载</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-secondary/30 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${skill.approvalRate}%` }}
                    />
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">没有找到匹配的 Skills</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <Card className="max-w-2xl w-full bg-card border-border/50 my-8">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold font-mono mb-2">{selectedSkill.name}</h2>
                  <p className="text-muted-foreground">by {selectedSkill.author}</p>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-2xl text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Status & Risk */}
                <div className="flex gap-4">
                  <Badge className={riskConfig[selectedSkill.riskLevel].color}>
                    {riskConfig[selectedSkill.riskLevel].label}
                  </Badge>
                  {StatusIcon && (
                    <Badge className={statusConfig[selectedSkill.status].color}>
                      {statusConfig[selectedSkill.status].label}
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold mb-2">描述</h3>
                  <p className="text-foreground">{selectedSkill.description}</p>
                </div>

                {/* Audit Progress */}
                <div>
                  <h3 className="text-lg font-bold mb-4">审计进度</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>通过率</span>
                      <span className="font-bold text-primary">{selectedSkill.approvalRate}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all"
                        style={{ width: `${selectedSkill.approvalRate}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{selectedSkill.auditorsCount} 名审计员参与</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-secondary/20 rounded border border-border/50">
                    <p className="text-xs text-muted-foreground">下载量</p>
                    <p className="text-lg font-bold">{selectedSkill.downloads}</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded border border-border/50">
                    <p className="text-xs text-muted-foreground">创建日期</p>
                    <p className="text-lg font-bold">{selectedSkill.createdAt}</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded border border-border/50">
                    <p className="text-xs text-muted-foreground">风险等级</p>
                    <p className="text-lg font-bold">{riskConfig[selectedSkill.riskLevel].label}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    参与审计
                  </Button>
                  <Button variant="outline" className="flex-1 border-border/50">
                    查看代码
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">成为审计员</h2>
          <p className="text-muted-foreground mb-8">
            帮助社区审查 Skills 安全性，获得积分和认可
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            立即加入
          </Button>
        </div>
      </section>
    </div>
  );
}
