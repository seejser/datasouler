/**
 * Blog List Page - DataSouler 社区博客
 * Design: 极客深空风格，支持黑白模式
 */
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

interface BlogPostMeta {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  featured: boolean;
}

const posts: BlogPostMeta[] = [
  {
    slug: "getting-started",
    title: "从零开始驯养你的第一只数字龙虾",
    subtitle: "OpenClaw Agent 入门完全指南 —— 5 分钟拥有你的 AI 灵魂伙伴",
    date: "2026-03-12",
    readTime: "8 分钟",
    author: "DataSouler 团队",
    tags: ["入门指南", "OpenClaw", "安装教程"],
    featured: true,
  },
];

export default function Blog() {
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-mono">
            📝 博客
          </h1>
          <p className="text-muted-foreground text-lg">
            DataSouler 社区的最新动态、教程和深度文章
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-6">
              精选文章
            </h2>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group relative rounded-2xl border border-border overflow-hidden bg-card hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent dark:from-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-500 dark:text-red-400 border border-red-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-foreground mb-4 group-hover:text-red-500 transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                    {featuredPost.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-red-500 font-medium group-hover:gap-3 transition-all">
                    阅读全文 <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <section>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
              所有文章
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="group rounded-xl border border-border bg-card p-6 hover:border-red-500/50 hover:shadow-lg transition-all cursor-pointer h-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-red-500/10 text-red-500 dark:text-red-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-red-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Empty state for future posts */}
        {otherPosts.length === 0 && (
          <section className="text-center py-12">
            <p className="text-muted-foreground">
              更多精彩文章即将发布，敬请期待...
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
