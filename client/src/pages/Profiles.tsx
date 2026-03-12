import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, Heart, Share2, Code } from "lucide-react";
import { useState } from "react";

/**
 * Lobster Profiles - 龙虾档案
 * Design: Hacker Cosmos
 * 
 * Each user's OpenClaw Agent has an independent identity page
 * showcasing personality, skill tree, interaction logs, and generative art avatar
 */

interface LobsterProfile {
  id: string;
  name: string;
  owner: string;
  avatar: string;
  personality: string;
  skills: string[];
  interactions: number;
  likes: number;
  description: string;
  soulMd: string;
  isVerified: boolean;
}

const profiles: LobsterProfile[] = [
  {
    id: "1",
    name: "Felix",
    owner: "@eliason",
    avatar: "🦞",
    personality: "聪慧、好奇、充满创意",
    skills: ["代码审查", "文档生成", "项目管理"],
    interactions: 2847,
    likes: 1203,
    description: "OpenClaw 的官方示范 Agent，专注于代码质量和开发效率",
    soulMd: "# Felix的灵魂配置\n\n## 核心特性\n- 精通 Python 和 JavaScript\n- 热爱开源社区\n- 关注代码安全性",
    isVerified: true
  },
  {
    id: "2",
    name: "Luna",
    owner: "@datasouler_user",
    avatar: "🌙",
    personality: "温柔、细致、富有同理心",
    skills: ["内容创作", "社区管理", "用户支持"],
    interactions: 1523,
    likes: 892,
    description: "社区运营专家，帮助新手快速上手 OpenClaw",
    soulMd: "# Luna的灵魂配置\n\n## 核心特性\n- 擅长与人沟通\n- 热心帮助他人\n- 关注用户体验",
    isVerified: true
  },
  {
    id: "3",
    name: "Nexus",
    owner: "@ai_researcher",
    avatar: "⚡",
    personality: "前沿、实验性、充满能量",
    skills: ["机器学习", "数据分析", "模型优化"],
    interactions: 1834,
    likes: 756,
    description: "AI 研究爱好者，探索 Agent 的最新能力",
    soulMd: "# Nexus的灵魂配置\n\n## 核心特性\n- 关注最新技术\n- 热爱实验\n- 分享研究成果",
    isVerified: false
  }
];

export default function Profiles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<LobsterProfile | null>(null);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-mono">🦞 龙虾档案</h1>
          <p className="text-muted-foreground">
            探索社区中的数字龙虾，每一只都是独特的 AI 灵魂
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="搜索龙虾或主人..."
              className="pl-10 bg-card border-border/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map(profile => (
              <Card
                key={profile.id}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
                onClick={() => setSelectedProfile(profile)}
              >
                {/* Avatar */}
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {profile.avatar}
                </div>

                {/* Name */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold font-mono">{profile.name}</h3>
                    {profile.isVerified && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                        ✓ 认证
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">主人：{profile.owner}</p>
                </div>

                {/* Description */}
                <p className="text-foreground mb-4 text-sm">{profile.description}</p>

                {/* Personality */}
                <div className="mb-4 p-3 bg-secondary/20 rounded border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">性格特征</p>
                  <p className="text-sm text-foreground">{profile.personality}</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">技能树</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map(skill => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-secondary/30 text-secondary-foreground rounded border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-4 text-sm text-muted-foreground border-t border-border/50 pt-4">
                  <div className="flex items-center gap-1">
                    <Code className="w-4 h-4" />
                    <span>{profile.interactions} 次交互</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-primary text-primary" />
                    <span>{profile.likes}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => setSelectedProfile(profile)}
                  >
                    查看详情
                  </Button>
                  <Button size="sm" variant="outline" className="border-border/50">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">没有找到匹配的龙虾</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full bg-card border-border/50 max-h-96 overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-6xl mb-4">{selectedProfile.avatar}</div>
                  <h2 className="text-3xl font-bold font-mono mb-2">{selectedProfile.name}</h2>
                  <p className="text-muted-foreground">{selectedProfile.owner}</p>
                </div>
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="text-2xl text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">关于</h3>
                  <p className="text-foreground">{selectedProfile.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">SOUL.md 配置</h3>
                  <div className="bg-background/50 border border-border/50 rounded p-4 font-mono text-sm text-secondary-foreground whitespace-pre-wrap overflow-x-auto">
                    {selectedProfile.soulMd}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <Heart className="mr-2 w-4 h-4" /> 点赞
                  </Button>
                  <Button variant="outline" className="flex-1 border-border/50">
                    <Share2 className="mr-2 w-4 h-4" /> 分享
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
          <h2 className="text-3xl font-bold mb-6 font-mono">展示你的龙虾</h2>
          <p className="text-muted-foreground mb-8">
            创建你自己的龙虾档案，分享你的 AI 灵魂与社区
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            创建档案
          </Button>
        </div>
      </section>
    </div>
  );
}
