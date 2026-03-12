import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

/**
 * DataSouler Community - Events & Showcase
 * Design: Hacker Cosmos
 * 
 * Features:
 * - Community events
 * - Success stories
 * - User showcase
 */

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  attendees: number;
  image: string;
}

interface Story {
  id: string;
  title: string;
  author: string;
  description: string;
  impact: string;
  tags: string[];
}

const events: Event[] = [
  {
    id: "1",
    title: "DataSouler 交流沙龙",
    date: "2026-03-15",
    location: "上海交通大学",
    description: "分享 DataSouler 的部署经验、实战案例和实用 Skills。属于交大人的 Agent 社区！",
    attendees: 150,
    image: "community-showcase"
  },
  {
    id: "2",
    title: "Skill 开发工作坊",
    date: "2026-03-22",
    location: "线上",
    description: "学习如何创建自己的 DataSouler Skills。从零到一的完整指南。",
    attendees: 300,
    image: "community-showcase"
  },
  {
    id: "3",
    title: "Agent 创新竞赛",
    date: "2026-04-01",
    location: "全国",
    description: "展示你的 DataSouler 创意应用。获胜者将获得奖励和社区认可。",
    attendees: 500,
    image: "community-showcase"
  }
];

const stories: Story[] = [
  {
    id: "1",
    title: "用 DataSouler 自动化日常工作",
    author: "张三",
    description: "我用 DataSouler 自动化了 80% 的日常任务，包括邮件管理、日程安排和文件整理。",
    impact: "每周节省 10+ 小时",
    tags: ["automation", "productivity"]
  },
  {
    id: "2",
    title: "DataSouler + Telegram 打造个人助手",
    author: "李四",
    description: "通过 Telegram 与 DataSouler 交互，在任何地方控制我的电脑和工作流程。",
    impact: "真正的移动办公",
    tags: ["telegram", "mobile", "integration"]
  },
  {
    id: "3",
    title: "创建企业级 Skill 库",
    author: "王五",
    description: "为我的团队创建了 20+ 定制 Skills，大幅提升团队效率。",
    impact: "团队效率提升 50%",
    tags: ["enterprise", "skills", "team"]
  }
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-mono">社区</h1>
          <p className="text-muted-foreground">
            加入全球开发者社区，分享经验、学习新技能、共同推进 DataSouler 生态。
          </p>
        </div>
      </section>

      {/* Community Showcase Background */}
      <section className="relative py-16 px-4 border-b border-border/50">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663332236731/W9GFumZCwHZxSn6p9pLVte/community-showcase-3NBESfbiVtA2VFzVDrtedZ.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-mono">开发者社区</h2>
          <p className="text-muted-foreground mb-8">5000+ 活跃开发者，每天创建新的 Skills 和应用。</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card/80 backdrop-blur border border-border/50 rounded">
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">活跃开发者</p>
            </div>
            <div className="p-6 bg-card/80 backdrop-blur border border-border/50 rounded">
              <div className="text-3xl font-bold text-secondary-foreground mb-2">10000+</div>
              <p className="text-muted-foreground">社区 Skills</p>
            </div>
            <div className="p-6 bg-card/80 backdrop-blur border border-border/50 rounded">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">社区支持</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono">即将举办的活动</h2>

          <div className="space-y-6">
            {events.map(event => {
              const eventDate = new Date(event.date);
              const isUpcoming = eventDate > new Date();

              return (
                <Card
                  key={event.id}
                  className="overflow-hidden border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div 
                      className="h-48 md:h-auto bg-cover bg-center opacity-50"
                      style={{
                        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663332236731/W9GFumZCwHZxSn6p9pLVte/community-showcase-3NBESfbiVtA2VFzVDrtedZ.webp)`,
                      }}
                    />

                    {/* Content */}
                    <div className="md:col-span-2 p-6 bg-card">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-mono mb-2">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {eventDate.toLocaleDateString('zh-CN')}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              {event.attendees} 人参加
                            </div>
                          </div>
                        </div>
                        {isUpcoming && (
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                            即将开始
                          </span>
                        )}
                      </div>

                      <p className="text-foreground mb-4">{event.description}</p>

                      <Button className="bg-primary hover:bg-primary/90">
                        了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-card/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono">成功案例</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map(story => (
              <Card
                key={story.id}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 font-mono text-primary">{story.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">by {story.author}</p>
                <p className="text-foreground mb-4">{story.description}</p>

                <div className="p-3 bg-primary/10 border border-primary/30 rounded mb-4">
                  <p className="text-sm font-bold text-primary">💡 {story.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {story.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary/30 text-secondary-foreground rounded border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">加入我们的社区</h2>
          <p className="text-muted-foreground mb-8">
            无论你是初学者还是经验丰富的开发者，都有适合你的地方。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">
              加入 Discord <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-border/50">
              查看 GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
