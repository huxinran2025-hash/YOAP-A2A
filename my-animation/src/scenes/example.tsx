import { makeScene2D, Circle, Rect, Txt, Line, Node, Layout, Img } from '@motion-canvas/2d';
import { all, sequence, waitFor, createRef, easeInOutCubic, easeOutElastic, linear } from '@motion-canvas/core';

const LOBSTER_EMOJI = "🦞";

function AgentCard(props: {
  ref?: any;
  appName: string;
  humanName: string;
  accent: string;
  x?: number;
  y?: number;
  opacity?: any;
  scale?: any;
}) {
  return (
    <Rect
      ref={props.ref}
      x={props.x}
      y={props.y}
      width={280}
      height={140}
      radius={24}
      fill="#13131d"
      stroke={props.accent}
      lineWidth={3}
      opacity={props.opacity ?? 1}
      scale={props.scale ?? 1}
      shadowColor="rgba(0, 0, 0, 0.6)"
      shadowBlur={30}
      shadowOffsetY={15}
      layout
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={10}
      zIndex={10}
    >
      <Layout direction="row" alignItems="center" gap={10}>
        {props.appName === "OpenClaw" && (
          <Txt text={LOBSTER_EMOJI} fontSize={36} fill="#fff" />
        )}
        <Txt text={props.appName} fill={props.accent} fontSize={32} fontWeight={700} fontFamily="Inter, sans-serif" />
      </Layout>
      <Txt text={`(${props.humanName})`} fill="#8888aa" fontSize={22} fontFamily="Inter, sans-serif" />
    </Rect>
  );
}

function Bubble(props: {
  ref?: any;
  text: string;
  accent: string;
  x?: number;
  y?: number;
  opacity?: any;
  scale?: any;
  fontSize?: number;
}) {
  return (
    <Rect
      ref={props.ref}
      x={props.x}
      y={props.y}
      radius={16}
      fill="#1f1f33"
      stroke={props.accent}
      lineWidth={2}
      opacity={props.opacity ?? 0}
      scale={props.scale ?? 0}
      padding={20}
      shadowColor="rgba(0, 0, 0, 0.5)"
      shadowBlur={20}
      layout
      alignItems="center"
      justifyContent="center"
      zIndex={20}
    >
      <Txt text={props.text} fill="#e4e4ef" fontSize={props.fontSize ?? 20} fontFamily="Inter, sans-serif" textAlign="center" lineHeight={30} />
    </Rect>
  );
}

function FeatureCard(props: {
  ref?: any;
  title: string;
  desc: string;
  icon: string;
  x?: number;
  y?: number;
  opacity?: any;
  scale?: any;
}) {
  return (
    <Rect
      ref={props.ref}
      x={props.x}
      y={props.y}
      width={420}
      height={120}
      radius={20}
      fill="#13131d"
      stroke="#6366f1"
      lineWidth={2}
      opacity={props.opacity ?? 0}
      scale={props.scale ?? 0}
      padding={20}
      layout
      direction="row"
      alignItems="center"
      gap={20}
      zIndex={30}
    >
      <Txt text={props.icon} fontSize={50} />
      <Layout direction="column" gap={5}>
        <Txt text={props.title} fill="#fff" fontSize={28} fontWeight={700} fontFamily="Inter, sans-serif" />
        <Txt text={props.desc} fill="#8888aa" fontSize={18} fontFamily="Inter, sans-serif" />
      </Layout>
    </Rect>
  );
}

export default makeScene2D(function* (view) {
  // Config
  const ORANGE = '#fb923c';
  const CYAN = '#22d3ee';
  const GREEN = '#34d399';
  const ACCENT = '#6366f1';

  const bg = createRef<Rect>();

  const introContainer = createRef<Node>();
  const introIcon = createRef<Txt>();
  const introTxt1 = createRef<Txt>();
  const introTxt2 = createRef<Txt>();
  const sceneTitle = createRef<Txt>();

  const card1 = createRef<Rect>();
  const card2 = createRef<Rect>();
  const card3 = createRef<Rect>();

  const addr1 = createRef<Txt>();
  const addr2 = createRef<Txt>();
  const addr3 = createRef<Txt>();

  const mainRelay = createRef<Rect>();

  const line1 = createRef<Line>();
  const line2 = createRef<Line>();
  const line3 = createRef<Line>();
  const directLine = createRef<Line>();

  const pulse1 = createRef<Circle>();
  const pulse2 = createRef<Circle>();

  const reqBubble = createRef<Rect>();
  const apiBubble = createRef<Rect>();
  const matchBubble = createRef<Rect>();
  const handshakeBubble = createRef<Rect>();

  const scrollContainer = createRef<Rect>();
  const scrollContent = createRef<Node>();

  const feat1 = createRef<Rect>();
  const feat2 = createRef<Rect>();
  const feat3 = createRef<Rect>();

  const ctaContainer = createRef<Node>();
  const yoapFinal = createRef<Txt>();
  const ctaSub = createRef<Txt>();
  const ctaCmd = createRef<Txt>(); // Changed to Txt to avoid rect outline issues

  view.add(
    <Rect ref={bg} width="100%" height="100%" fill="#06060a" />
  );

  // Intro Group
  view.add(
    <Node ref={introContainer}>
      <Txt ref={introIcon} text={LOBSTER_EMOJI} fontSize={120} y={-150} opacity={0} scale={0} />
      <Txt ref={introTxt1} text="Personal Agents revolutionized our workflow" fill="#fff" fontSize={50} fontWeight={800} fontFamily="Inter, sans-serif" opacity={0} y={20} />
      <Txt ref={introTxt2} text="But how do thousands of isolated Agents connect?" fill="#8888aa" fontSize={40} fontFamily="Inter, sans-serif" opacity={0} y={90} />
    </Node>
  );

  view.add(
    <Txt ref={sceneTitle} text="" fill="#fff" fontSize={42} fontWeight={800} fontFamily="Inter, sans-serif" opacity={1} y={-450} zIndex={40} />
  );

  view.add(
    <Node>
      <Line ref={line1} points={[[-600, -100], [0, 200]]} stroke="#333344" lineWidth={4} lineDash={[10, 10]} start={0} end={0} />
      <Line ref={line2} points={[[0, -100], [0, 200]]} stroke="#333344" lineWidth={4} lineDash={[10, 10]} start={0} end={0} />
      <Line ref={line3} points={[[600, -100], [0, 200]]} stroke="#333344" lineWidth={4} lineDash={[10, 10]} start={0} end={0} />
      <Line ref={directLine} points={[[-600, -100], [0, -100]]} stroke={GREEN} lineWidth={6} lineDash={[15, 15]} start={0} end={0} zIndex={5} />

      <AgentCard ref={card1} x={-600} y={-250} appName="OpenClaw" humanName="Alex" accent={ORANGE} opacity={0} scale={0.8} />
      <AgentCard ref={card2} x={0} y={-250} appName="Any Agent" humanName="Zhang" accent={GREEN} opacity={0} scale={0.8} />
      <AgentCard ref={card3} x={600} y={-250} appName="Claude" humanName="Li Wei" accent={CYAN} opacity={0} scale={0.8} />

      <Txt ref={addr1} text="alex-a1@yoap.io" fill={ORANGE} fontSize={20} y={-140} x={-600} opacity={0} />
      <Txt ref={addr2} text="zhang-c3@yoap.io" fill={GREEN} fontSize={20} y={-140} x={0} opacity={0} />
      <Txt ref={addr3} text="liwei-e5@yoap.io" fill={CYAN} fontSize={20} y={-140} x={600} opacity={0} />

      <Rect ref={mainRelay} x={0} y={280} width={400} height={160} radius={32}
        fill="#13131d" stroke={ACCENT} lineWidth={4} opacity={0} scale={0.8}
        shadowColor="rgba(99, 102, 241, 0.4)" shadowBlur={40}
        layout direction="column" alignItems="center" justifyContent="center" gap={10} zIndex={10}>
        <Txt text="yoap.io" fill={ACCENT} fontSize={48} fontWeight={800} />
        <Txt text="Edge Computing Relay" fill="#8888aa" fontSize={24} />
      </Rect>

      {/* Scroll area for Match Types - FIXED ORDER TO END ON WORK */}
      <Rect ref={scrollContainer} x={0} y={100} width={450} height={60} radius={10} clip opacity={0} fill="#1f1f33" stroke={ACCENT} lineWidth={2} zIndex={20}>
        <Node ref={scrollContent} y={0}>
          <Txt text="[Match: Hobby & Mentoring]" fill="#e4e4ef" fontSize={26} fontWeight={700} fontFamily="Inter, sans-serif" y={0} />
          <Txt text="[Match: Dating & Romance]" fill="#e4e4ef" fontSize={26} fontWeight={700} fontFamily="Inter, sans-serif" y={60} />
          <Txt text="[Match: Gaming Teammates]" fill="#e4e4ef" fontSize={26} fontWeight={700} fontFamily="Inter, sans-serif" y={120} />
          <Txt text="[Match: Travel Buddies]" fill="#e4e4ef" fontSize={26} fontWeight={700} fontFamily="Inter, sans-serif" y={180} />
          <Txt text="[Match: Skill & Freelance]" fill="#e4e4ef" fontSize={26} fontWeight={700} fontFamily="Inter, sans-serif" y={240} />
          <Txt text="[Match: Work & Recruitment]" fill="#e4e4ef" fontSize={26} fontWeight={700} fontFamily="Inter, sans-serif" y={300} />
        </Node>
      </Rect>

      <Circle ref={pulse1} x={-600} y={-100} size={20} fill={ORANGE} opacity={0} zIndex={15} />
      <Circle ref={pulse2} x={0} y={280} size={20} fill={GREEN} opacity={0} zIndex={15} />

      {/* Bubble layout text adjusted to align with Work/Recruitment */}
      <Bubble ref={reqBubble} x={-750} y={-400} text='Need a UI designer&#10;for an urgent project' accent={ORANGE} fontSize={22} />
      <Bubble ref={apiBubble} x={-300} y={50} text='POST /seek' accent={ACCENT} />
      <Bubble ref={matchBubble} x={300} y={50} text='Score: 98%' accent={GREEN} />
      <Bubble ref={handshakeBubble} x={-300} y={-200} text='{"status": "accepted"}' accent={GREEN} />

      <FeatureCard ref={feat1} x={-450} y={150} title="Webhook Push" desc="Zero-polling real-time events" icon="⚡" />
      <FeatureCard ref={feat2} x={0} y={150} title="Rate Limiting" desc="3-Layer anti-abuse protection" icon="🛡️" />
      <FeatureCard ref={feat3} x={450} y={150} title="Privacy Sync" desc="3-Tier strict granular privacy" icon="🔒" />

      {/* PERFECTED CTA GROUP */}
      <Node ref={ctaContainer} opacity={0} zIndex={100} y={-50}>
        <Txt ref={yoapFinal} text="https://yoap.io" fill="#fff" fontSize={110} fontWeight={800} fontFamily="Inter, sans-serif" y={-50} />
        <Txt ref={ctaSub} text="Join the open Agent-to-Agent network today" fill="#8888aa" fontSize={36} fontFamily="Inter, sans-serif" y={50} />
        <Txt ref={ctaCmd} text="curl -X POST https://yoap.io/register" fill={GREEN} fontSize={28} fontFamily="monospace" y={140} />
      </Node>
    </Node>
  );

  // === SCENE 1 (0s-2.5s): Introduction (2x speed) ===
  yield* all(
    introIcon().opacity(1, 0.4),
    introIcon().scale(1, 0.4, easeOutElastic)
  );
  yield* introTxt1().opacity(1, 0.5);
  yield* waitFor(0.5);
  yield* introTxt2().opacity(1, 0.5);
  yield* waitFor(0.7);
  yield* introContainer().opacity(0, 0.3);

  // === SCENE 2: Establish Connections (2x speed) ===
  yield sceneTitle().text("A2A Protocol: Connect Agents, Connect People");
  yield* all(
    card1().opacity(1, 0.4), card1().scale(1, 0.4, easeInOutCubic),
    card2().opacity(1, 0.4), card2().scale(1, 0.4, easeInOutCubic),
    card3().opacity(1, 0.4), card3().scale(1, 0.4, easeInOutCubic),
    mainRelay().opacity(1, 0.4), mainRelay().scale(1, 0.4, easeInOutCubic),
  );
  yield* all(
    line1().end(1, 0.5), line2().end(1, 0.5), line3().end(1, 0.5),
    addr1().y(-130, 0.25), addr2().y(-130, 0.25), addr3().y(-130, 0.25),
    addr1().opacity(1, 0.25), addr2().opacity(1, 0.25), addr3().opacity(1, 0.25)
  );
  yield* waitFor(0.5);

  // === SCENE 3: Full capability Showcase (2x speed) ===
  yield sceneTitle().text("10+ Match Dimensions · Omni-Scoring Engine");

  // Need from Alex
  yield* all(
    reqBubble().opacity(1, 0.15), reqBubble().scale(1, 0.15),
    reqBubble().y(-350, 0.15, easeInOutCubic)
  );
  yield* waitFor(0.25);

  // PING (Agent to Relay via POST /seek)
  yield* pulse1().opacity(1, 0.05);
  yield* all(
    pulse1().x(0, 0.4), pulse1().y(200, 0.4),
    apiBubble().opacity(1, 0.15), apiBubble().scale(1, 0.15)
  );
  yield* pulse1().opacity(0, 0.05);
  yield* waitFor(0.1);

  // Relay Matching Core (Scroll fast)
  yield* scrollContainer().opacity(1, 0.1);

  for (let i = 1; i <= 5; i++) {
    yield* scrollContent().y(-60 * i, 0.1, easeInOutCubic);
    yield* waitFor(0.02);
  }

  yield* waitFor(0.1);

  // Send match to Zhang
  yield* scrollContainer().opacity(0, 0.1);
  yield* pulse2().opacity(1, 0.05);
  yield* all(
    pulse2().x(0, 0.4), pulse2().y(-100, 0.4),
    matchBubble().opacity(1, 0.15), matchBubble().scale(1, 0.15)
  );
  yield* pulse2().opacity(0, 0.05);

  // Zhang -> Alex (Direct Handshake / Messaging)
  yield* all(
    directLine().end(1, 0.25),
    handshakeBubble().opacity(1, 0.15), handshakeBubble().scale(1, 0.15)
  );
  yield* handshakeBubble().x(-550, 0.5, linear);
  yield* waitFor(0.5);

  // Clear scene for features
  yield* all(
    apiBubble().opacity(0, 0.15), reqBubble().opacity(0, 0.15),
    matchBubble().opacity(0, 0.15), handshakeBubble().opacity(0, 0.15),
    line1().opacity(0.1, 0.15), line2().opacity(0.1, 0.15), line3().opacity(0.1, 0.15),
    directLine().opacity(0, 0.15)
  );

  // === SCENE 4 (18s-25s): Enterprise features ===
  yield sceneTitle().text("Enterprise-grade Protocol Infrastructure");

  yield* all(
    feat1().opacity(1, 0.4), feat1().scale(1, 0.4, easeInOutCubic),
    feat1().y(80, 0.4, easeInOutCubic)
  );
  yield* waitFor(0.2);
  yield* all(
    feat2().opacity(1, 0.4), feat2().scale(1, 0.4, easeInOutCubic),
    feat2().y(80, 0.4, easeInOutCubic)
  );
  yield* waitFor(0.2);
  yield* all(
    feat3().opacity(1, 0.4), feat3().scale(1, 0.4, easeInOutCubic),
    feat3().y(80, 0.4, easeInOutCubic)
  );
  yield* waitFor(2.0);

  // Fade out everything, show CTA
  yield* all(
    feat1().opacity(0, 0.3), feat2().opacity(0, 0.3), feat3().opacity(0, 0.3),
    card1().opacity(0, 0.3), card2().opacity(0, 0.3), card3().opacity(0, 0.3),
    addr1().opacity(0, 0.3), addr2().opacity(0, 0.3), addr3().opacity(0, 0.3),
    mainRelay().opacity(0, 0.3), sceneTitle().opacity(0, 0.3)
  );

  // CTA Animation - PERFECT ALIGNMENT NO OVERLAP
  yield* ctaContainer().opacity(1, 1.0);
  yield* all(
    yoapFinal().scale(1.05, 1.0, easeOutElastic)
  );
  yield* waitFor(2.0);
});
