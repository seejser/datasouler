import { Github, Twitter, Mail } from "lucide-react";

/**
 * Footer Component
 * Design: Hacker Cosmos
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-mono font-bold text-lg mb-4">DataSouler</h3>
            <p className="text-sm text-muted-foreground">
              开源 AI 电脑助手，自动化你的工作流程。
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">功能</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">定价</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">下载</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold mb-4">社区</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">论坛</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">博客</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">资源</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">文档</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">教程</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">状态</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} DataSouler Community. 保留所有权利。
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary/30 rounded transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary/30 rounded transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary/30 rounded transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
              <a href="#" className="hover:text-primary transition-colors">服务条款</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
