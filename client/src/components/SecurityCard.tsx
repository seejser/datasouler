import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle, Lock } from "lucide-react";

/**
 * SecurityCard Component
 * Displays VirusTotal security information for Skills
 */

interface SecurityCardProps {
  scanStatus: "clean" | "suspicious" | "malicious" | "scanning";
  vtScore: number;
  scanDate: string;
  permissions: string[];
  publisherTrust: "verified" | "trusted" | "unverified";
  compact?: boolean;
}

export default function SecurityCard({
  scanStatus,
  vtScore,
  scanDate,
  permissions,
  publisherTrust,
  compact = false
}: SecurityCardProps) {
  const getScanStatusColor = () => {
    switch (scanStatus) {
      case "clean":
        return "bg-green-500/20 text-green-500 border-green-500/30";
      case "suspicious":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "malicious":
        return "bg-red-500/20 text-red-500 border-red-500/30";
      case "scanning":
        return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };

  const getScanStatusLabel = () => {
    switch (scanStatus) {
      case "clean":
        return "安全";
      case "suspicious":
        return "可疑";
      case "malicious":
        return "恶意";
      case "scanning":
        return "扫描中";
      default:
        return "未知";
    }
  };

  const getScanStatusIcon = () => {
    switch (scanStatus) {
      case "clean":
        return <CheckCircle className="w-5 h-5" />;
      case "suspicious":
        return <AlertTriangle className="w-5 h-5" />;
      case "malicious":
        return <Shield className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const getTrustBadge = () => {
    switch (publisherTrust) {
      case "verified":
        return <Badge className="bg-blue-500/20 text-blue-500">✓ 认证发布者</Badge>;
      case "trusted":
        return <Badge className="bg-green-500/20 text-green-500">★ 信任发布者</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-500">未认证</Badge>;
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded border ${getScanStatusColor()}`}>
          {getScanStatusIcon()}
        </div>
        <div>
          <p className="text-sm font-bold">{getScanStatusLabel()}</p>
          <p className="text-xs text-muted-foreground">VT 评分: {vtScore}/100</p>
        </div>
      </div>
    );
  }

  return (
    <Card className="p-6 bg-secondary/10 border-secondary/50">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            VirusTotal 安全报告
          </h3>
          <div className={`px-3 py-1 rounded-full border ${getScanStatusColor()} font-bold text-sm flex items-center gap-1`}>
            {getScanStatusIcon()}
            {getScanStatusLabel()}
          </div>
        </div>

        {/* Threat Score */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">威胁评分</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-secondary/30 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${
                  vtScore >= 80 ? "bg-green-500" :
                  vtScore >= 50 ? "bg-yellow-500" :
                  "bg-red-500"
                }`}
                style={{ width: `${vtScore}%` }}
              />
            </div>
            <span className="text-lg font-bold text-foreground">{vtScore}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {vtScore >= 80 ? "✓ 低风险" : vtScore >= 50 ? "⚠ 中风险" : "✗ 高风险"}
          </p>
        </div>

        {/* Scan Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground text-xs">最后扫描</p>
            <p className="font-mono">{scanDate}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">发布者信誉</p>
            {getTrustBadge()}
          </div>
        </div>

        {/* Permissions */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">需要的权限</p>
          <div className="flex flex-wrap gap-2">
            {permissions.map(perm => (
              <Badge key={perm} className="bg-secondary/30 text-secondary-foreground">
                <Lock className="w-3 h-3 mr-1" />
                {perm}
              </Badge>
            ))}
          </div>
        </div>

        {/* Warning */}
        {scanStatus === "suspicious" && (
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded text-sm text-yellow-600">
            <p className="font-bold mb-1">⚠ 检测到可疑行为</p>
            <p className="text-xs">此 Skill 包含可能的风险行为。请在使用前仔细审查。</p>
          </div>
        )}

        {scanStatus === "malicious" && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-sm text-red-600">
            <p className="font-bold mb-1">✗ 检测到恶意代码</p>
            <p className="text-xs">此 Skill 已被标记为恶意。建议不要使用。</p>
          </div>
        )}

        {/* Learn More */}
        <a
          href="#"
          className="text-primary hover:underline text-sm flex items-center gap-1"
        >
          查看完整 VirusTotal 报告 →
        </a>
      </div>
    </Card>
  );
}
