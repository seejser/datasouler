import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component
 * Design: Hacker Cosmos
 * - Sticky header with neon accent
 * - Mobile-responsive menu
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "首页", href: "/" },
    { label: "Skill 市场", href: "/marketplace" },
    { label: "社区", href: "/community" },
    { label: "文档", href: "/docs" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-mono font-bold text-lg hover:text-primary transition-colors">
          <span className="text-primary">◆</span>
          <span>OpenClaw</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            开始使用
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-card rounded transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-card/50 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary/30"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90">
              开始使用
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
