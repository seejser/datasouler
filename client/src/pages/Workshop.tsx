import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Clock, Users, TrendingUp, Shield, Lock, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Skill Workshop - 技能工坊
 * Design: Hacker Cosmos with VirusTotal Security Integration
 * 
 * Community-driven skill auditing and certification
 * VirusTotal partnership for comprehensive security scanning
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
  scanStatus: "clean" | "suspicious" | "malicious" | "scanning";
  scanDate: string;
  vtScore: number;
  permissions: string[];
  publisherTrust: "verified" | "trusted" | "unverified";
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
    createdAt: "2026-02-15",
    scanStatus: "clean",
    scanDate: "2026-03-12",
    vtScore: 95,
    permissions: ["邮件读取", "邮件发送", "日历访问"],
    publisherTrust: "verified"
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
    createdAt: "2026-02-10",
    scanStatus: "clean",
    scanDate: "2026-03-11",
    vtScore: 92,
    permissions: ["文件读取", "文件写入"],
    publisherTrust: "trusted"
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
    createdAt: "2026-03-01",
    scanStatus: "suspicious",
    scanDate: "2026-03-10",
    vtScore: 65,
    permissions: ["代码执行", "网络访问", "文件读取"],
    publisherTrust: "unverified"
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
    createdAt: "2026-03-10",
    scanStatus: "malicious",
    scanDate: "2026-03-12",
    vtScore: 15,
    permissions: ["系统命令执行", "网络访问", "文件写入", "进程管理"],
    publisherTrust: "unverified"
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

const scanConfig = {
  clean: { label: "✓ 安全", color: "bg-green-500/20 text-green-500", icon: Shield },
  suspicious: { label: "⚠ 可疑", color: "bg-yellow-500/20 text-yellow-500", icon: AlertCircle },
  malicious: { label: "✗ 恶意", color: "bg-red-500/20 text-red-500", icon: Lock },
  scanning: { label: "⚡ 扫描中", color: "bg-blue-500/20 text-blue-500", icon: Zap }
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
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold font-mono">🛠️ 技能工坊</h1>
            <Badge className="bg-primary/20 text-primary">VirusTotal 认证</Badge>
          </div>
          <p className="text-muted-foreground">
            社区驱动的技能审计和认证系统，与 VirusTotal 合作确保每个 Skill 都是安全可靠的
          </p>
        </div>
      </section>

      {/* Security Info Banner */}
      <section className="py-8 px-4 bg-secondary/10 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="p-4 rounded border border-secondary/50 bg-secondary/5">
            <p className="text-sm text-foreground">
              <Shield className="inline w-4 h-4 mr-2" />
              所有发布的 Skills 都通过 VirusTotal 进行自动安全扫描。使用 Code Insight 进行 LLM 驱动的代码分析，检测恶意行为、供应链风险和可疑模式。
              <a href="#" className="text-primary hover:underline ml-2">了解更多 →</a>
            </p>
          </div>
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
              const ScanIcon = scanConfig[skill.scanStatus]?.icon;
              return (
                <Card
                  key={skill.id}
                  className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <h3 className="text-lg font-bold font-mono">{skill.name}</h3>
                        <div className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${riskConfig[skill.riskLevel].color}`}>
                          {riskConfig[skill.riskLevel].label}
                        </div>
                        {ScanIcon && (
                          <div className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${scanConfig[skill.scanStatus].color}`}>
                            <ScanIcon className="w-3 h-3" />
                            {scanConfig[skill.scanStatus].label}
                          </div>
                        )}
                        {StatusIcon && (
                          <div className={`flex items-center gap-1 text-xs ${statusConfig[skill.status].color}`}>
                            <StatusIcon className="w-4 h-4" />
                            {statusConfig[skill.status].label}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">by {skill.author}</p>
                      <p className="text-foreground text-sm mb-3">{skill.description}</p>
                      
                      {/* Permissions Preview */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {skill.permissions.slice(0, 2).map(perm => (
                          <span key={perm} className="text-xs px-2 py-1 bg-secondary/20 text-secondary-foreground rounded">
                            {perm}
                          </span>
                        ))}
                        {skill.permissions.length > 2 && (
                          <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary-foreground rounded">
                            +{skill.permissions.length - 2} 更多
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-3 md:text-right md:min-w-48">
                      {/* VT Score */}
                      <div className="text-sm">
                        <p className="text-muted-foreground text-xs">VirusTotal 评分</p>
                        <div className="flex items-center justify-end gap-2 mt-1">
                          <div className="w-16 h-2 bg-secondary/30 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all ${
                                skill.vtScore >= 80 ? "bg-green-500" :
                                skill.vtScore >= 50 ? "bg-yellow-500" :
                                "bg-red-500"
                              }`}
                              style={{ width: `${skill.vtScore}%` }}
                            />
                          </div>
                          <span className="font-bold text-sm">{skill.vtScore}</span>
                        </div>
                      </div>

                      {/* Audit Progress */}
                      <div className="text-sm">
                        <p className="text-muted-foreground text-xs">审计进度</p>
                        <p className="text-lg font-bold text-primary mt-1">{skill.approvalRate}%</p>
                      </div>

                      {/* Stats */}
                      <div className="text-sm">
                        <p className="text-muted-foreground text-xs">{skill.auditorsCount} 审计员</p>
                        <p className="text-muted-foreground text-xs">{skill.downloads} 下载</p>
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
                {/* Status Badges */}
                <div className="flex gap-2 flex-wrap">
                  <Badge className={riskConfig[selectedSkill.riskLevel].color}>
                    {riskConfig[selectedSkill.riskLevel].label}
                  </Badge>
                  {StatusIcon && (
                    <Badge className={statusConfig[selectedSkill.status].color}>
                      {statusConfig[selectedSkill.status].label}
                    </Badge>
                  )}
                  {scanConfig[selectedSkill.scanStatus] && (
                    <Badge className={scanConfig[selectedSkill.scanStatus].color}>
                      {scanConfig[selectedSkill.scanStatus].label}
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold mb-2">描述</h3>
                  <p className="text-foreground">{selectedSkill.description}</p>
                </div>

                {/* VirusTotal Security Report */}
                <div className="p-4 bg-secondary/10 border border-secondary/50 rounded">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    VirusTotal 安全报告
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">扫描状态</span>
                      <span className={`text-sm font-bold ${scanConfig[selectedSkill.scanStatus].color}`}>
                        {scanConfig[selectedSkill.scanStatus].label}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">威胁评分</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-secondary/30 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              selectedSkill.vtScore >= 80 ? "bg-green-500" :
                              selectedSkill.vtScore >= 50 ? "bg-yellow-500" :
                              "bg-red-500"
                            }`}
                            style={{ width: `${selectedSkill.vtScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold">{selectedSkill.vtScore}/100</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">最后扫描</span>
                      <span className="text-sm">{selectedSkill.scanDate}</span>
                    </div>
                    <Button variant="outline" className="w-full border-border/50 mt-2">
                      查看完整 VirusTotal 报告 →
                    </Button>
                  </div>
                </div>

                {/* Permissions */}
                <div>
                  <h3 className="text-lg font-bold mb-3">需要的权限</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedSkill.permissions.map(perm => (
                      <div key={perm} className="p-2 bg-secondary/20 rounded text-sm">
                        <Lock className="inline w-3 h-3 mr-2" />
                        {perm}
                      </div>
                    ))}
                  </div>
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
                    <p className="text-xs text-muted-foreground">发布者信誉</p>
                    <p className="text-lg font-bold capitalize">{selectedSkill.publisherTrust}</p>
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
            帮助社区审查 Skills 安全性，获得积分和认可。与 VirusTotal 一起保护 AI 生态系统
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            立即加入
          </Button>
        </div>
      </section>
    </div>
  );
}
