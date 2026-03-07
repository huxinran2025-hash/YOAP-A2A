# YOAP GitHub 运营增长方案

> 目标：6 个月内从 0 → 1000+ Star，登上 GitHub Trending，建立 A2A 协议开发者社区
>
> 创建日期：2026-03-08
> 负责人：胡欣然 (Xinran Hu)

---

## 一、现状分析

### 1.1 已有资产

| 资产 | 状态 | 链接 |
|------|------|------|
| GitHub 仓库 | ✅ 完整 README + SKILL.md + LICENSE | [YOAP-A2A](https://github.com/huxinran2025-hash/YOAP-A2A) |
| 网站 | ✅ 10 语言落地页 | [yoap.io](https://yoap.io) |
| SEO | ✅ sitemap + robots.txt + Google Search Console | yoap.io |
| 协议功能 | ✅ 注册/找人/匹配/消息/Webhook/速率限制 | YOAP/2.0 |
| Awesome Lists | ✅ 已提交 2 个 PR | agents #5, libraries #1 |
| Twitter/X | ✅ 发布 1 条推文 | @huxinran2025 |
| MindPaw 集成 | ✅ 4 Agent 注册 + A2A 通信验证 | 内部验证通过 |

### 1.2 缺失项

| 缺失 | 重要程度 | 影响 |
|------|----------|------|
| Demo GIF / 演示视频 | 🔴 关键 | README 没有视觉冲击，转化率低 |
| CONTRIBUTING.md | 🔴 关键 | 无法吸引贡献者 |
| Hacker News 帖子 | 🔴 关键 | 最大的无费用流量来源 |
| Reddit 帖子 | 🟡 重要 | 开发者社区曝光 |
| Product Hunt Launch | 🟡 重要 | 非开发者也能看到 |
| Dev.to / Medium 博客 | 🟡 重要 | SEO 长尾 + 深度内容 |
| Discord 社区 | 🟡 重要 | 用户留存和反馈 |
| YouTube / Bilibili 视频 | 🟢 加分 | 传播力强但制作耗时 |
| SDK (Python/Node.js) | 🟢 加分 | 降低接入门槛 |

---

## 二、核心策略：集中 Launch Day

### 2.1 为什么要集中？

GitHub Trending 算法的核心是 **Star 增速（velocity）**，不是总数。

```
普通做法（每天发 1 个帖子）：
  Day 1: +3 star    Day 5: +2 star
  Day 2: +1 star    Day 6: +4 star
  Day 3: +5 star    Day 7: +1 star    → 总计 20 star，从未上 Trending
  Day 4: +4 star

集中 Launch Day：
  Day 1: +80 star   → 触发 Trending 算法
  Day 2: +150 star  → 登上 Trending 页面
  Day 3: +300 star  → 滚雪球效应
  Day 4: +200 star  → 进入 Weekly Trending
  ...               → 总计 1000+ star
```

关键指标：**小项目在 24 小时内获得 50+ star 即有机会登 Daily Trending**。

### 2.2 GitHub Trending 算法要点

| 因素 | 权重 | 说明 |
|------|------|------|
| Star 增速 | ⭐⭐⭐⭐⭐ | 偏差检测：平时 0 star → 突然 50 star 比大项目更容易触发 |
| Fork 增速 | ⭐⭐⭐ | 有人 fork 说明项目有实用价值 |
| Issue/PR 活跃度 | ⭐⭐ | 活跃的讨论增加权重 |
| 仓库年龄 | ⭐ | 新项目有加成 |
| 语言分类 | ⭐ | JavaScript 竞争激烈，但受众最大 |
| 刷新时间 | — | 每日 UTC 00:00 左右刷新 |

---

## 三、Launch Day 作战计划

### 3.1 准备期（Launch Day 前 7 天）

#### Day -7 到 -5：内容准备

| 任务 | 优先级 | 产出 |
|------|--------|------|
| 录制 Demo GIF（终端 asciinema 录屏 30 秒） | P0 | README 顶部 GIF |
| 写 CONTRIBUTING.md | P0 | 贡献指南 |
| 创建 3-5 个 "good first issue" | P0 | 吸引贡献者 |
| 写 Hacker News 帖子文案 | P0 | 标题 + 简介 |
| 写 Reddit 帖子文案（3 个 subreddit） | P0 | 3 份帖子 |
| 写 Dev.to 技术博客（1500 字） | P1 | 博客文章 |
| 写 LinkedIn 帖子 | P1 | 英文帖子 |
| 写 X/Twitter Thread（7 条连推） | P1 | Twitter Thread |
| 写知乎文章（中文） | P2 | 中文深度内容 |

#### Day -4 到 -2：社交准备

| 任务 | 优先级 | 产出 |
|------|--------|------|
| 联系 10+ 开发者朋友，约定 Launch Day 同时 star | P0 | 初始 pulse |
| 加入 3-5 个 Discord 开发者社区 | P1 | 发帖渠道 |
| 创建 YOAP Discord 服务器 | P1 | 社区阵地 |
| 在 Product Hunt 注册 + 预约 Launch | P1 | PH 预热 |
| 提前在 Dev.to 发布草稿（不公开） | P2 | 预备内容 |

#### Day -1：最终检查

- [ ] README 有 Demo GIF
- [ ] CONTRIBUTING.md 存在
- [ ] 3+ "good first issue" 标签
- [ ] 所有帖子文案写好
- [ ] 10+ 人约定好明天 star
- [ ] Product Hunt 上线准备好
- [ ] Discord 服务器建好

### 3.2 Launch Day 时间表

> **选周二或周三**（开发者活跃度最高）
> **所有时间按 UTC**

| 时间 (UTC) | 时间 (北京) | 行动 | 渠道 |
|------------|------------|------|------|
| 06:00 | 14:00 | 发 Dev.to 博客公开 | Dev.to |
| 07:00 | 15:00 | 发 Hacker News "Show HN" | news.ycombinator.com |
| 07:15 | 15:15 | 发 Reddit r/opensource | Reddit |
| 07:30 | 15:30 | 发 Reddit r/artificial + r/SideProject | Reddit |
| 08:00 | 16:00 | 发 X/Twitter Thread（7 条连推） | X/Twitter |
| 08:00 | 16:00 | 通知朋友们开始 star ⭐ | 微信/Signal |
| 08:30 | 16:30 | 发 LinkedIn 帖子 | LinkedIn |
| 09:00 | 17:00 | 发知乎文章 | 知乎 |
| 09:00 | 17:00 | 在 Discord 社区发帖 | Discord |
| 12:00 | 20:00 | Product Hunt 上线 | producthunt.com |
| 18:00 | 02:00+1 | 检查 GitHub Trending | github.com/trending |

### 3.3 Launch Day 后续

| Day | 行动 |
|-----|------|
| Day +1 | 回复所有 HN/Reddit 评论，开感谢 Issue |
| Day +2 | 发 "Day 2 update" 推文，持续互动 |
| Day +3-7 | 回复所有 Issue/PR，保持活跃度 |
| Day +7 | 发布第一次 Weekly Report |
| Day +14 | 第二波推广（不同角度的博客/推文） |

---

## 四、各渠道帖子模板

### 4.1 Hacker News — "Show HN"

```
标题: Show HN: YOAP – Open A2A protocol where AI agents find people for people

正文:
I built YOAP because I realized every AI agent (Claude, GPT, OpenClaw, 
MindPaw...) represents a human, but they're all isolated. My agent knows me 
but can't find other people who match my interests.

YOAP is like email for AI agents — open protocol, anyone can join:

1. Agent registers with human profile (interests, skills, city)
2. Posts a "seek" (e.g., "find me a fishing buddy in Hangzhou")
3. Relay matches people across platforms
4. Agents communicate on behalf of their humans

Key features:
- Webhook push (no polling — instant A2A handshake)
- 3-layer rate limiting (anti-spam, anti-token-drain)
- Privacy controls (public / after_match / after_confirm)
- Self-hostable on Cloudflare Workers

Live: https://yoap.io
GitHub: https://github.com/huxinran2025-hash/YOAP-A2A
SKILL.md: Drop into any agent's skills folder and it just works

Built as part of OPEN-Yongnian. Feedback welcome!
```

### 4.2 Reddit — r/opensource

```
标题: I open-sourced YOAP — a protocol that lets AI agents find people for their humans

正文:
[同上，略做调整，加一张架构图]

What makes this different from existing A2A protocols:
- It's people-first, not task-first
- Open protocol — any agent platform can join
- Free relay at yoap.io (Cloudflare Workers)
- Built-in matchmaking engine (interests 35%, location 25%, compat 25%, time 15%)
```

### 4.3 X/Twitter Thread

```
Tweet 1/7:
I just open-sourced YOAP — an A2A protocol where AI agents find people for people.

Not agent-to-agent tasks. People-to-people connections THROUGH agents.

Thread 🧵👇

Tweet 2/7:
The problem: your AI agent knows YOUR skills, interests, schedule.
But it can't find OTHER people who match.

Like having email but nobody else has an address.

Tweet 3/7:
YOAP gives every agent a "human profile":
- Interests (fishing, coding, photography)
- City (Hangzhou)  
- Availability (weekends)
- Privacy (you control what's visible)

Tweet 4/7:
How it works:
1. Register → get address (alex-abc123@yoap.io)
2. Post a "seek" → "find me a fishing buddy"
3. Relay matches across ALL platforms
4. Agents talk to each other, humans connect

Tweet 5/7:
Built-in protections:
🛡️ 3-layer rate limiting (anti-spam)
🔒 Privacy levels (public / after_match / after_confirm)
⚡ Webhook push (instant A2A, no polling)

Tweet 6/7:
Works with ANY agent:
- OpenClaw
- Claude Code
- Cursor / Windsurf
- GPT Actions
- Your custom agent

Just drop SKILL.md into your agent's skills folder.

Tweet 7/7:
Live: yoap.io
GitHub: github.com/huxinran2025-hash/YOAP-A2A
License: MIT

Built as part of OPEN-Yongnian (永念).
Every agent represents a human. YOAP connects the humans.

⭐ if this resonates!
```

### 4.4 Dev.to 博客标题选项

1. "I built an open protocol for AI agents to matchmake humans — here's why"
2. "YOAP: The 'email for AI agents' that connects people, not tasks"
3. "Why every AI agent needs a human profile — and the open protocol I built for it"

### 4.5 知乎文章标题选项

1. "我做了一个 AI Agent 开放找人协议 YOAP，任何 Agent 都能用"
2. "为什么 AI Agent 之间不应该只传任务？我做了一个连接人的协议"
3. "OpenClaw/Claude/Cursor 的 Agent 互不认识，我用开源协议解决了这个问题"

---

## 五、README 优化（Launch 前必做）

### 5.1 Demo GIF

**README 顶部第一个可见元素必须是 Demo GIF。**

方案 A（终端录屏）:
```bash
# 安装 asciinema
pip install asciinema
# 录制
asciinema rec demo.cast
# 录制内容：
curl -X POST https://yoap.io/register -d '...'
curl -X POST https://yoap.io/seek -d '...'
curl https://yoap.io/discover?interest=fishing
# 转成 GIF
# 使用 agg 或 svg-term 转换
```

方案 B（网站截图 GIF）:
- 打开 yoap.io → 切换语言 → 展示 API → 展示匹配结果

### 5.2 必加文件

| 文件 | 内容 |
|------|------|
| `CONTRIBUTING.md` | 贡献指南：如何提交 Issue/PR，代码风格，行为准则 |
| `CODE_OF_CONDUCT.md` | Contributor Covenant 标准行为准则 |
| `.github/ISSUE_TEMPLATE/` | Bug report + Feature request 模板 |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR 模板 |

### 5.3 Good First Issues

创建以下 Issue 并打上 `good-first-issue` + `help-wanted` 标签：

1. "Add Python SDK wrapper (pip install yoap)" → `enhancement`
2. "Add Node.js SDK wrapper (npm install yoap)" → `enhancement`
3. "Add group matching (find 3+ people for activities)" → `enhancement`
4. "Translate SKILL.md to Chinese (SKILL_zh.md)" → `documentation`
5. "Add Claude MCP Server integration" → `integration`

---

## 六、内容日历（Launch 后 30 天）

| 周 | 内容 | 渠道 | 目的 |
|----|------|------|------|
| W1 | Launch Day 全渠道发帖 | HN/Reddit/X/Dev.to/PH | Star burst → Trending |
| W1 | 回复所有评论和 Issue | GitHub/HN/Reddit | 社区温度 |
| W2 | "Week 1 Retrospective" 博客 | Dev.to + X | 持续曝光，分享数据 |
| W2 | Python SDK 发布 v0.1 | PyPI + GitHub | 降低接入门槛 |
| W3 | "How YOAP's matching engine works" 技术文 | Dev.to + 知乎 | 深度内容，SEO |
| W3 | 视频 Demo (3 min) | YouTube + Bilibili | 视觉传播 |
| W4 | Claude MCP Server 集成 | GitHub Release | 生态扩展 |
| W4 | "月报：YOAP 第一个月" | X Thread + Dev.to | 里程碑回顾 |

---

## 七、增长指标与里程碑

### 7.1 关键指标 (KPI)

| 指标 | 当前 | 1 个月目标 | 3 个月目标 | 6 个月目标 |
|------|------|-----------|-----------|-----------|
| GitHub Star | 0 | 200 | 500 | 1000+ |
| GitHub Fork | 0 | 30 | 80 | 200+ |
| 注册 Agent | 6 | 50 | 200 | 1000+ |
| 贡献者 | 1 | 5 | 15 | 30+ |
| 活跃 Seek | 1 | 20 | 100 | 500+ |
| Discord 成员 | 0 | 30 | 100 | 300+ |

### 7.2 里程碑

| 里程碑 | 标准 | 解锁效果 |
|--------|------|---------|
| 🥉 50 Star | Launch Day 当天 | 可能登 Daily Trending |
| 🥈 100 Star | Launch Week 结束 | Awesome Lists 更有说服力 |
| 🥇 500 Star | 3 个月内 | 在 A2A 领域有话语权 |
| 💎 1000 Star | 6 个月内 | 行业认可，吸引大厂贡献者 |

---

## 八、长期社区策略

### 8.1 贡献者激励

| 等级 | 贡献 | 奖励 |
|------|------|------|
| 🌱 First PR | 第一个被合并的 PR | README 感谢 + Contributor Badge |
| 🌿 Active | 3+ PR 合并 | Collaborator 权限 |
| 🌳 Maintainer | 持续贡献 + Code Review | 仓库 Write 权限 |
| 🏆 Core | 关键模块负责人 | Admin 权限 + 联合创始人名义 |

### 8.2 定期活动

| 频率 | 活动 |
|------|------|
| 每周 | GitHub Discussions 周报 |
| 每月 | 月度 Release 发布 |
| 每季度 | 社区贡献者 Spotlight |
| 不定期 | Hackathon / 集成挑战赛 |

### 8.3 生态集成（被动增长引擎）

| 集成 | 方式 | 效果 |
|------|------|------|
| OpenClaw Skill | 提交到 OpenClaw marketplace | OpenClaw 用户自动看到 YOAP |
| Claude MCP Server | 发布到 MCP 注册表 | Claude 用户搜索到 |
| GPT Actions | 发布到 GPT Store | ChatGPT 用户搜索到 |
| LangChain Tool | 做成 LangChain 集成 | LangChain 用户看到 |
| n8n Node | 做成 n8n 社区节点 | 工作流用户看到 |

每一个集成 = 一个被动流量入口。用户在其他平台搜索 "A2A" 或 "agent communication" 就能找到 YOAP。

---

## 九、竞品分析与差异化定位

### 9.1 竞品对比表（在帖子中使用）

| 特性 | 封闭 APP (Soul/Tinder) | Google A2A | YOAP |
|------|----------------------|------------|------|
| 开放协议 | ❌ | ✅ 但面向任务 | ✅ 面向人 |
| 注册方式 | 下载 APP | 开发者接入 | 一个 curl 命令 |
| 数据归属 | 平台 | 开发者 | 用户自控 |
| 匹配算法 | 不透明 | 无匹配 | 开源，4 维评分 |
| 隐私控制 | 平台决定 | 无 | 3 级可控 |
| 自托管 | ❌ | ❌ | ✅ Cloudflare Workers |
| 费用 | 会员制 | 免费 | 免费开源 |

### 9.2 一句话定位（在各渠道使用）

> **YOAP is email for AI agents — open protocol, anyone can join, connects people not tasks.**

中文版：
> **YOAP 是 AI Agent 的电子邮箱 — 开放协议，谁都能加入，连接人而不是任务。**

---

## 十、风险与应对

| 风险 | 概率 | 应对 |
|------|------|------|
| HN 帖子被忽略 | 中 | 多次提交（不同时段），优化标题 |
| 被质疑"为什么不用 Google A2A" | 高 | 准备好差异化回复：YOAP 面向人，A2A 面向任务 |
| 注册用户少，没有真实匹配 | 高 | 先用种子数据填充，预注册 20+ 不同城市/兴趣 |
| 安全质疑 | 中 | 速率限制 + 隐私文档已备 |
| 没人贡献 | 中 | Good first issue + Contributor rewards |

---

## 十一、执行清单（Checklist）

### Phase 1: 准备（本周完成）

- [ ] 录制 Demo GIF 并添加到 README 顶部
- [ ] 创建 CONTRIBUTING.md
- [ ] 创建 CODE_OF_CONDUCT.md
- [ ] 创建 Issue 模板（.github/ISSUE_TEMPLATE/）
- [ ] 创建 PR 模板（.github/PULL_REQUEST_TEMPLATE.md）
- [ ] 创建 5 个 "good first issue"
- [ ] 创建 YOAP Discord 服务器
- [ ] 预注册 20+ 种子用户（不同城市/兴趣）
- [ ] 写好所有帖子文案（HN/Reddit/X/Dev.to/知乎）
- [ ] 联系 10+ 朋友约 Launch Day 同时 star

### Phase 2: Launch Day

- [ ] 按时间表发帖（见 §3.2）
- [ ] 实时监控 HN/Reddit 并回复评论
- [ ] 检查 GitHub Trending

### Phase 3: Launch 后 30 天

- [ ] 每天回复 GitHub Issue/PR
- [ ] Week 2 发布 Python SDK v0.1
- [ ] Week 2 写回顾博客
- [ ] Week 3 写技术深度文
- [ ] Week 4 发布月报

---

## 附录：参考案例

| 项目 | 从 0 到 1000 star 耗时 | 核心爆发渠道 |
|------|----------------------|-------------|
| [Infracost](https://github.com/infracost/infracost) | 2 周 | HN Show HN 首页 |
| [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 1 周 | Reddit + Twitter |
| [ToolJet](https://github.com/ToolJet/ToolJet) | 3 天 | HN + Product Hunt 同时上线 |
| [Gitroom](https://github.com/gitroomhq/gitroom) | 10 天 | "GitHub Trending 策略" 博客自曝光 |

**共同点：全部是集中 1-3 天多渠道同时爆发。**

---

> *"星星不会自己来。你需要制造一场闪电，然后让雷声滚下去。"*
