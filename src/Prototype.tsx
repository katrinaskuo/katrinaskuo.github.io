import React from 'react'
import './portfolio.css'
import portraitUrl from './assets/katrina-portrait.png'
import backstageWordUrl from './assets/backstage-word.png'
import backstageExcelUrl from './assets/backstage-excel.png'
import backstagePptUrl from './assets/backstage-ppt.png'
import copilotLogoUrl from './assets/copilot-logo.webp'
import elevateDashboardUrl from './assets/elevate-dashboard.png'
import liquidBackgroundUrl from './assets/liquid-glass-background.png'
import liquidLogoUrl from './assets/liquid-glass-logo.png'

type Project = {
	id: string
	number: string
	title: string
	eyebrow: string
	summary: string
	year: string
	accent: string
	visual: string
	role: string
	team: string
	timeline: string
	skills: string
	tools: string
	impact: string
	challenge: string
	quote: string
}

const projects: Project[] = [
	{
		id: 'mosaic',
		number: '01',
		title: 'Copilot Chat',
		eyebrow: 'Tablet · Mobile',
		summary:
			'Introduced Copilot features in Word, Excel, and PPT experiences for feature parity with larger screens.',
		year: '2026',
		accent: '#ff795f',
		visual: 'mosaic',
		role: 'Product Designer',
		team: 'PM, engineers, designers, content writers',
		timeline: '2025 - present',
		skills: 'Product Strategy, Systems Design, Voice UX, Prototyping, Coding, Product Design, Product Research, Ideation, User Mapping, Prompt Engineering',
		tools: 'Figma, FigJam, SwiftUI (Xcode), Claude Code, Copilot CLI, GitHub',
		impact:
			'Helped shape a more coherent, scalable Copilot Chat & Agentic Editing experience across mobile and tablet surfaces.',
		challenge:
			'An evolving AI experience needed to remain coherent, intuitive, and adaptable across devices and product contexts.',
		quote: 'Designing for AI means creating clarity while the technology and expectations are still evolving.',
	},
	{
		id: 'gather',
		number: '02',
		title: 'Backstage Home',
		eyebrow: 'Tablet · Mobile',
		summary: 'Designed and shipped brand-forward animated headers across Word, Excel, and PPT apps through interactive prototyping.',
		year: '2026',
		accent: '#ffd8cc',
		visual: 'gather',
		role: 'Product Designer',
		team: 'Product Manager, Engineering, Office Shared Design',
		timeline: '2026',
		skills: 'Visual Design, Interaction, Motion, Systems, UX/UI, Prototyping, Coding, Wireframing',
		tools: 'Figma, Adobe Creative, Xcode, Claude Code, Copilot CLI, SourceTree, GitHub',
		impact:
			'Shipped a cohesive branding experience across Word, Excel, and PowerPoint for iOS, with a scalable foundation for future visual expression.',
		challenge:
			'App Home had become visually generic after modernization, weakening recognition and the distinct identity of Word, Excel, and PowerPoint.',
		quote: 'Bring personality back to App Home without compromising clarity, accessibility, or performance.',
	},
	{
		id: 'tandem',
		number: '03',
		title: 'Liquid Glass',
		eyebrow: 'Tablet · Mobile',
		summary:
			'Refreshed Word, Excel, and PPT with a modern look through liquid glass updates.',
		year: '2026',
		accent: '#9b8cff',
		visual: 'tandem',
		role: 'Product Designer',
		team: 'Product, Engineering, WXP App Teams',
		timeline: '2026',
		skills: 'Visual Systems, Interaction, Prototyping, UX/UI',
		tools: 'Figma, Xcode, Copilot CLI, SwiftUI, Claude Code',
		impact:
			'Established a shared Liquid Glass source of truth, aligned WXP teams, and supported production rollout across iPhone and iPad.',
		challenge:
			'WXP needed to feel native to Apple’s new visual language while preserving productivity, readability, and consistency across three distinct apps.',
		quote: 'A visual refresh can expose deeper questions about interaction, layout, and platform behavior.',
	},
	{
		id: 'bloom',
		number: '04',
		title: 'Elevate Coaching',
		eyebrow: 'Web · Tablet · Mobile',
		summary:
			'Designed and launched a platform connecting professional leaders with coaches, streamlined services, and performance analytics.',
		year: '2022',
		accent: '#faf3e5',
		visual: 'bloom',
		role: 'Product Designer & Researcher',
		team: '1 Founder, 3 Engineers, Clinical Advisor',
		timeline: '10 weeks',
		skills: 'Service Design, Research, Content, Prototyping',
		tools: 'Figma, Miro, Tableau, TypeScript',
		impact: 'Launched a 0-to-1 coaching platform, improving operational efficiency and increasing retained users of the design system.',
		challenge:
			'A growing need for professional growth, work-life balance, and support through leadership challenges was hindered by a difficult-to-navigate and inaccessible coaching market.',
		quote: 'It would be helpful to integrate a filter feature when a client is viewing all of the coaches in order for the clients to determine which coach they would like to have sessions with.',
	},
]

const sections = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'impact', label: 'Impact + solution' },
	{ id: 'research', label: 'User research' },
	{ id: 'journey', label: 'Journey mapping' },
	{ id: 'concepts', label: 'Design concepts' },
	{ id: 'feedback', label: 'Feedback + iteration' },
	{ id: 'final', label: 'Final designs' },
	{ id: 'learning', label: 'Learning' },
]

const backstageSections = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'impact', label: 'Impact + solution' },
	{ id: 'research', label: 'Research + audits' },
	{ id: 'journey', label: 'Experience mapping' },
	{ id: 'prototyping', label: 'Prototyping' },
	{ id: 'feedback', label: 'Feedback + iteration' },
	{ id: 'learning', label: 'Learning' },
]

const copilotSections = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'impact', label: 'Impact' },
	{ id: 'research', label: 'Approach' },
	{ id: 'journey', label: 'Design principles' },
	{ id: 'concepts', label: 'Interaction design' },
	{ id: 'feedback', label: 'Collaboration' },
	{ id: 'final', label: 'Outcomes' },
	{ id: 'learning', label: 'Learning' },
]

const liquidGlassSections = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'impact', label: 'Impact + solution' },
	{ id: 'research', label: 'System analysis' },
	{ id: 'journey', label: 'Interaction mapping' },
	{ id: 'concepts', label: 'Design concepts' },
	{ id: 'feedback', label: 'Critique + iteration' },
	{ id: 'final', label: 'Shipped system' },
	{ id: 'learning', label: 'Learning' },
]

const roles = [
	'product engineer',
	'creative thinker',
	'visual storyteller',
	'data-driven researcher',
]

function useTypedRoles() {
	const [text, setText] = React.useState('')
	const [roleIndex, setRoleIndex] = React.useState(0)
	const [deleting, setDeleting] = React.useState(false)

	React.useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setText(roles[0])
			return
		}

		const role = roles[roleIndex]
		const complete = text === role
		const empty = text === ''
		const delay = complete && !deleting ? 1500 : deleting ? 42 : 78

		const timer = window.setTimeout(() => {
			if (complete && !deleting) {
				setDeleting(true)
			} else if (deleting && empty) {
				setDeleting(false)
				setRoleIndex((current) => (current + 1) % roles.length)
			} else {
				setText(role.slice(0, text.length + (deleting ? -1 : 1)))
			}
		}, delay)

		return () => window.clearTimeout(timer)
	}, [text, deleting, roleIndex])

	return text
}

const liquidIconPaths = {
	pencil: <><path d="m4 16-1 5 5-1L21 7a2.8 2.8 0 0 0-4-4L4 16Z" /><path d="m14 6 4 4M4 16l4 4" /></>,
	search: <><circle cx="10" cy="10" r="7" /><path d="m15 15 6 6" /></>,
	more: <><circle cx="4" cy="12" r="1.3" fill="currentColor" /><circle cx="12" cy="12" r="1.3" fill="currentColor" /><circle cx="20" cy="12" r="1.3" fill="currentColor" /></>,
	scan: <><path d="M7 3H3v4m14-4h4v4M3 17v4h4m14-4v4h-4M7 6h10v12H7zM10 10h4m-4 4h3" /></>,
	text: <><path d="m3 20 6-16 6 16M5 14h8m3-9q5 7 5 14m-3-17q4 4 4 9" /></>,
	comment: <path d="M5 3h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-8l-6 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />,
	share: <path d="M12 16V2m-5 5 5-5 5 5M5 11H3v10h18V11h-2" />,
	down: <path d="m5 9 7 7 7-7" />,
	up: <path d="m5 15 7-7 7 7" />,
	check: <path d="m5 12 5 5L20 5" />,
}

function LiquidIcon({ name }: { name: keyof typeof liquidIconPaths }) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			{liquidIconPaths[name]}
		</svg>
	)
}

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
	if (project.id === 'gather') {
		return (
			<div
				className={`project-visual visual-gather backstage-visual${large ? ' is-large' : ''}`}
				style={{ '--accent': project.accent } as React.CSSProperties}
				aria-hidden="true"
			>
				{[
					{ app: 'word', src: backstageWordUrl },
					{ app: 'excel', src: backstageExcelUrl },
					{ app: 'powerpoint', src: backstagePptUrl },
				].map(({ app, src }) => (
					<div className={`backstage-device device-${app}`} key={app}>
						<img src={src} alt="" />
					</div>
				))}
			</div>
		)
	}

	if (project.id === 'mosaic') {
		return (
			<div
				className={`project-visual copilot-visual${large ? ' is-large' : ''}`}
				aria-hidden="true"
			>
				<div className="copilot-glow" />
				<img className="copilot-mark" src={copilotLogoUrl} alt="" />
			</div>
		)
	}

	if (project.id === 'bloom') {
		return (
			<div
				className={`project-visual elevate-visual${large ? ' is-large' : ''}`}
				aria-hidden="true"
			>
				<div className="elevate-glow" />
				<img className="elevate-laptop" src={elevateDashboardUrl} alt="" />
			</div>
		)
	}

	if (project.id === 'tandem') {
		return (
			<div
				className={`project-visual liquid-glass-visual${large ? ' is-large' : ''}`}
				aria-hidden="true"
			>
					<div className="liquid-glass-composition">
						<img className="liquid-glass-home" src={liquidBackgroundUrl} alt="" />
						<img className="liquid-piece liquid-piece-logo" src={liquidLogoUrl} alt="" />
						<div className="liquid-piece liquid-piece-toolbar">
							<div className="liquid-menu-canvas">
								<div className="liquid-glass-pill liquid-vector-toolbar">
									<LiquidIcon name="pencil" />
									<LiquidIcon name="search" />
									<LiquidIcon name="more" />
								</div>
							</div>
						</div>
						<div className="liquid-piece liquid-piece-actions">
							<div className="liquid-menu-canvas">
								<div className="liquid-glass-pill liquid-vector-actions">
									<LiquidIcon name="scan" />
									<LiquidIcon name="text" />
									<LiquidIcon name="comment" />
									<LiquidIcon name="share" />
								</div>
							</div>
						</div>
						<div className="liquid-piece liquid-piece-controls">
							<div className="liquid-menu-canvas">
								<div className="liquid-vector-check"><LiquidIcon name="check" /></div>
								<div className="liquid-glass-pill liquid-vector-find">
									<LiquidIcon name="search" /><LiquidIcon name="down" /><span>Find</span>
								</div>
								<div className="liquid-glass-pill liquid-vector-arrows">
									<LiquidIcon name="down" /><LiquidIcon name="up" />
								</div>
							</div>
						</div>
						<div className="liquid-piece liquid-piece-menu">
							<div className="liquid-menu-canvas">
								<div className="liquid-text-menu">
									<span>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
											<path d="M9 4H6a2 2 0 0 0-2 1.5L1.5 15A2.4 2.4 0 0 0 4 18h4m7-12h5a2 2 0 0 1 2 2.5L19.5 18a2 2 0 0 1-2 1.5H12a2 2 0 0 1-2-2.5l3-11A2 2 0 0 0 11 3H9l-4 17h4" />
										</svg>
										Copilot
									</span>
									<span>Edit</span>
									<span>Copy</span>
									<span>Comment</span>
									<span className="liquid-menu-next">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
											<path d="m9 5 7 7-7 7" />
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
			</div>
		)
	}

	return (
		<div
			className={`project-visual visual-${project.visual}${large ? ' is-large' : ''}`}
			style={{ '--accent': project.accent } as React.CSSProperties}
			aria-hidden="true"
		>
			<div className="visual-grid" />
			<div className="visual-orbit orbit-one" />
			<div className="visual-orbit orbit-two" />
			<div className="visual-card">
				<span className="visual-kicker">{project.eyebrow.split(' · ')[0]}</span>
				<strong>{project.title}</strong>
				<span className="visual-line" />
				<span className="visual-line short" />
			</div>
			<span className="visual-symbol">{project.visual === 'bloom' ? '✿' : '✦'}</span>
			<span className="visual-note">made with care ↗</span>
		</div>
	)
}

function Arrow() {
	return <span aria-hidden="true">↗</span>
}

function CustomCursor() {
	const cursorRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const supportsCursor = window.matchMedia(
			'(pointer: fine) and (prefers-reduced-motion: no-preference)'
		).matches
		if (!supportsCursor) return

		const cursor = cursorRef.current
		if (!cursor) return
		document.body.classList.add('has-custom-cursor')

		const moveCursor = (event: MouseEvent) => {
			cursor.style.setProperty('--cursor-x', `${event.clientX}px`)
			cursor.style.setProperty('--cursor-y', `${event.clientY}px`)
			cursor.classList.add('is-visible')
		}
		const updateTarget = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			cursor.classList.toggle('is-active', Boolean(target.closest('a, button')))
		}
		const pressCursor = () => cursor.classList.add('is-pressed')
		const releaseCursor = () => cursor.classList.remove('is-pressed')
		const hideCursor = () => cursor.classList.remove('is-visible')

		window.addEventListener('mousemove', moveCursor)
		document.addEventListener('mouseover', updateTarget)
		window.addEventListener('mousedown', pressCursor)
		window.addEventListener('mouseup', releaseCursor)
		document.documentElement.addEventListener('mouseleave', hideCursor)

		return () => {
			document.body.classList.remove('has-custom-cursor')
			window.removeEventListener('mousemove', moveCursor)
			document.removeEventListener('mouseover', updateTarget)
			window.removeEventListener('mousedown', pressCursor)
			window.removeEventListener('mouseup', releaseCursor)
			document.documentElement.removeEventListener('mouseleave', hideCursor)
		}
	}, [])

	return (
		<div className="custom-cursor" ref={cursorRef} aria-hidden="true">
			<span className="cursor-orbit" />
			<span className="cursor-dot" />
			<span className="cursor-spark">✦</span>
		</div>
	)
}

function Header({ onHome, onWork }: { onHome: () => void; onWork: () => void }) {
	return (
		<header className="site-header">
			<button className="wordmark" onClick={onHome} aria-label="Katrina Kuo, home">
				KK<span className="wordmark-dot">•</span>
			</button>
			<nav aria-label="Primary navigation">
				<button onClick={onWork}>Work</button>
				<a href="#about">About</a>
				<a href="mailto:katrinakuo@microsoft.com">
					Let&apos;s talk <Arrow />
				</a>
			</nav>
		</header>
	)
}

function Home({ openProject }: { openProject: (project: Project) => void }) {
	const typedRole = useTypedRoles()

	React.useEffect(() => {
		const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('is-visible')
				})
			},
			{ threshold: 0.12 }
		)
		nodes.forEach((node) => observer.observe(node))
		return () => observer.disconnect()
	}, [])

	return (
		<>
			<main>
				<section className="hero" aria-labelledby="intro-heading">
					<div className="hero-status">
						Currently @ Microsoft | BS Design + MS Engineering @ Stanford
					</div>
					<div className="hero-main">
						<h1 id="intro-heading">
							Hi! I&apos;m Katrina, a{' '}
							<span className="typed-line">
								{typedRole}
								<span className="cursor" aria-hidden="true" />
							</span>
						</h1>
						<p className="hero-description">
							<span className="hero-description-wide">
								Exploring&nbsp;ideas. Staying&nbsp;curious. Making&nbsp;things. Repeat.
							</span>
							<span className="hero-description-mobile">
								Exploring ideas. Staying curious. Making things. Repeat.
							</span>
						</p>
					</div>
					<a className="scroll-cue" href="#selected-work">
						<span>Scroll to explore</span>
						<span className="scribble-arrow" aria-hidden="true">
							↓
						</span>
					</a>
					<div className="hero-doodle" aria-hidden="true">
						<svg viewBox="0 0 280 180">
							<path className="doodle-spiral-one" d="M15 111C1 73 22 39 58 35c39-4 65 32 49 65-17 36-67 39-85 7-16-29 6-61 36-60 27 1 43 28 29 50-13 20-43 17-50-3-6-18 10-34 26-27 13 5 14 23 3 29-9 5-19-2-17-11" />
							<path className="doodle-star-one" d="M144 24l5 14 14 5-14 5-5 14-5-14-14-5 14-5z" />
							<path className="doodle-star-two" d="M251 52l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
							<path className="doodle-star-three" d="M103 91l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
							<path className="doodle-star-four" d="M225 112l4 11 11 4-11 4-4 11-4-11-11-4 11-4z" />
							<path className="doodle-spark" d="M190 24l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" />
						</svg>
					</div>
				</section>

				<section className="work-section" id="selected-work" aria-labelledby="work-heading">
					<div className="section-intro" data-reveal>
						<p className="eyebrow">Selected work · 2022—2026</p>
						<h2 id="work-heading">Transforming complex ideas into intuitive experiences</h2>
					</div>
					<div className="project-list">
						{projects.map((project) => (
							<article className="project-card" key={project.id} data-reveal>
								<button onClick={() => openProject(project)} aria-label={`View ${project.title} case study`}>
									<ProjectVisual project={project} />
									<div className="project-copy">
										<div className="project-meta">
											<span>{project.number}</span>
											<span>{project.eyebrow}</span>
											<span>{project.year}</span>
										</div>
										<div className="project-title-row">
											<h3>{project.title}</h3>
											<span className="project-arrow">
												View case study <Arrow />
											</span>
										</div>
										<p>{project.summary}</p>
									</div>
								</button>
							</article>
						))}
					</div>
				</section>

				<section className="about-section" id="about" data-reveal>
					<div className="about-aside">
						<p className="eyebrow">A little about me</p>
						<figure className="portrait-feature">
							<div className="portrait-stage">
								<span className="portrait-backdrop" aria-hidden="true" />
								<img src={portraitUrl} alt="Katrina smiling outdoors" />
								<svg className="portrait-doodles" viewBox="0 0 900 760" aria-hidden="true">
									<path className="portrait-spiral" d="M42 575c-43-39-32-104 18-130 55-28 119 10 116 72-3 61-68 98-120 66-45-28-45-92-3-119 37-25 87-2 87 42 0 37-39 61-71 42-27-16-28-54-3-70 21-14 50 0 49 25-1 21-23 33-40 22-13-9-13-29 0-37 11-7 25 1 23 13" />
									<path className="portrait-squiggle" d="M674 647c22-29 39 26 62-2s41 25 64-3" />
									<path className="portrait-star large" d="M760 92l9 25 25 9-25 9-9 25-9-25-25-9 25-9z" />
									<path className="portrait-star small" d="M126 117l5 14 14 5-14 5-5 14-5-14-14-5 14-5z" />
									<circle cx="816" cy="246" r="8" />
									<circle cx="83" cy="278" r="5" />
								</svg>
							</div>
						</figure>
					</div>
					<div>
						<h2>Nice to Meet You ✷</h2>
						<p>
							Whether it be from talking to people, digging into data, or challenging assumptions, I
							love translating what I learn into impactful digital experiences.{' '}
							My work sits at the intersection of design, research, and tech, with an interest in{' '}
							<strong className="about-highlight">
								designing AI experiences that bridge technical possibilities and human needs
							</strong>
							.
						</p>
						<p>
							When I&apos;m not designing, I&apos;m probably catching sunsets at the beach, hiking,
							watching comedies, or dancing to my favorite songs.
						</p>
						<div className="design-communities">
							<h3>My Design Communities</h3>
							<ul>
								<li>
									<span className="community-star" aria-hidden="true">✦</span>
									<span>
										Industry Guest Speaker, <em>Stanford Design d.School</em>
									</span>
								</li>
								<li>
									<span className="community-star" aria-hidden="true">✦</span>
									<span>
										AI Design Workshop Organizer, <em>Microsoft x Figma</em>
									</span>
								</li>
								<li>
									<span className="community-star" aria-hidden="true">✦</span>
									<span>
										Former President &amp; Product Design Lead, <em>Design for America</em>
									</span>
								</li>
								<li>
									<span className="community-star" aria-hidden="true">✦</span>
									<span>
										Former Director of Design Partnerships, <em>Womxn in Design</em>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

function DetailSection({
	id,
	index,
	title,
	children,
}: {
	id: string
	index: string
	title: string
	children: React.ReactNode
}) {
	return (
		<section className="case-section" id={id}>
			<div className="case-section-label">
				<span>{index}</span>
				<h2>{title}</h2>
			</div>
			<div className="case-section-content">{children}</div>
		</section>
	)
}

function BackstageCaseSections({ project }: { project: Project }) {
	return (
		<>
			<DetailSection id="overview" index="01" title="Overview">
				<p className="lead">
					Reintroducing expressive app identity to the Backstage Home experience in Word, Excel, and
					PowerPoint on iPhone and iPad, turning visual explorations into
					functional, interactive prototypes.
				</p>
				<div className="two-up">
					<div>
						<h3>The challenge</h3>
						<p>
							Earlier in 2025, WXP iOS App Home was refreshed to deliver a more modern and streamlined
							UI, which reduced some of the app-specific branding that helped differentiate our experiences.
						</p>
					</div>
					<div>
						<h3>My role</h3>
						<p>
							I led branding explorations, coded + designed + created production-ready standard and Pride assets,
							and defined responsive header behavior.
						</p>
					</div>
				</div>
				<div className="copilot-process" aria-label="Header design iteration process">
					{['Audit', 'Explore in Figma', 'Code + Prototype', 'Interact + refine', 'Prepare handoff'].map((step, index) => (
						<div key={step}>
							<span>{String(index + 1).padStart(2, '0')}</span>
							<strong>{step}</strong>
						</div>
					))}
				</div>
			</DetailSection>

			<DetailSection id="impact" index="02" title="Impact + solution">
				<div className="impact-callout" style={{ '--accent': '#dce5ff' } as React.CSSProperties}>
					<span>Shipped outcome</span>
					<strong>{project.impact}</strong>
				</div>
				<div className="impact-metrics impact-metrics-four">
					<div><strong>6</strong><span>design options explored</span></div>
					<div><strong>2</strong><span>detailed specs created</span></div>
					<div><strong>9</strong><span>interactive prototypes validating UX and stakeholder alignment</span></div>
					<div><strong>Led</strong><span>cross-app reviews aligning WXP leads on one header approach</span></div>
				</div>
				<p>
					The final direction placed lightweight, app-specific color and motion behind the controls
					people already knew. It restored identity at a high-visibility moment while remaining
					consistent across devices, themes, and accessibility settings. Functional prototypes made
					the interaction and motion tangible, giving stakeholders a shared experience to evaluate
					rather than relying on static screens alone.
				</p>
			</DetailSection>

			<DetailSection id="research" index="03" title="Research + audits">
				<p className="lead">
					Before designing the header, I mapped how identity appeared—and disappeared—across the
					Microsoft and Apple ecosystems.
				</p>
				<div className="insight-list">
					<p>
						<span>Platform audit</span>Compared Win32, Mac, Web, Android, iPhone, and iPad across
						Word, Excel, PowerPoint, OneNote, Outlook, and peer apps.
					</p>
					<p>
						<span>Responsive audit</span>Reviewed portrait, landscape, compact width, resizing,
						ribbon overflow, and iPad multi-window edge cases, using these scenarios to guide
						the coded prototype explorations.
					</p>
					<p>
						<span>Brand audit</span>Studied app icons, gradients, competitor differentiation, and
						Microsoft visual-expression systems to define the right level of presence.
					</p>
				</div>
			</DetailSection>

			<DetailSection id="journey" index="04" title="Experience mapping">
				<p className="lead">
					A single visual needed to behave like a system across apps, screens, themes, and moments.
					I translated these scenarios into interactive prototypes to explore how the header
					responded to changes in layout and state.
				</p>
				<div className="solution-strip">
					<div>
						<span>01</span>
						<strong>Recognize</strong>
						<p>Use app color to immediately signal Word, Excel, or PowerPoint.</p>
					</div>
					<div>
						<span>02</span>
						<strong>Adapt</strong>
						<p>Recompose for iPhone, iPad, orientation changes, and resizable windows.</p>
					</div>
					<div>
						<span>03</span>
						<strong>Recirculate</strong>
						<p>Support standard, Pride, and future seasonal expression through one framework.</p>
					</div>
				</div>
			</DetailSection>

			<DetailSection id="prototyping" index="05" title="Prototyping">
				<p className="lead">
					I fine-tuned the app branding experience through rapid in-app prototyping and experimentation.
				</p>
				<p>
					I helped build a lightweight playground inside Word, Excel, and PowerPoint (WXP), as well
					as a standalone app, to explore combinations of branding and animation settings.{' '}
					<span className="case-highlight">
						These functional prototypes let us adjust the experience, test it in realistic scenarios,
						and evaluate how the branding behaved alongside app content and interactions.
					</span>
				</p>
				<p>
					The playgrounds gave the Product Manager, designers, and engineers a shared space to
					try different settings, gather feedback, and iterate together. Rapid experimentation
					made it easier to compare variations and refine the balance of app identity, motion,
					and usability.
				</p>
			</DetailSection>

			<DetailSection id="feedback" index="06" title="Feedback + iteration">
				<p>
					I brought functional prototypes into <span className="case-highlight">recurring reviews</span> with the Product Manager, designers,
					and engineers to tune typography, header sizing, responsiveness, asset weight, fade behavior,
					and implementation constraints before rollout.
				</p>
				<blockquote>
					<span>“</span>
					Being able to move the sliders in the prototype and see the animation update right away
					made the tradeoffs much clearer. This prototype is better than static screens.
				</blockquote>
			</DetailSection>

			<DetailSection id="learning" index="07" title="Learning">
				<p>
					AI-assisted coding shortened the distance between an idea and something the team could
					try.{' '}
					<span className="case-highlight">
						The value was not just generating code: it was using functional prototypes to ask
						better questions, review interaction details, and iterate with product and engineering.
					</span>{' '}
					Design judgment and hands-on review remained central to the process.
				</p>
				<p>
					Using Git through SourceTree taught me to treat prototypes as shared, evolving work rather
					than isolated experiments.{' '}
					<span className="case-highlight">
						I helped onboard teammates to SourceTree so we could collaborate through branches,
						review changes, and keep iterations traceable.
					</span>{' '}
					Making the version-control
					workflow approachable was just as important as building the prototype itself.
				</p>
				<p>
					I learned how to bring Figma design context into the coding workflow with Figma MCP,
					then use Copilot CLI and Claude Code to translate that context into functional interactions.
					Working in small, focused steps made it easier to review AI-generated changes, catch
					mismatches, and refine the implementation without losing the original design intent.
				</p>
				<p>
					Prototype testing turned that faster coding loop into a stronger design process. Trying
					branding and animation settings in realistic app scenarios surfaced details that static
					mockups could not communicate. I could gather feedback, use AI to help implement targeted
					adjustments, and test again—making functional prototyping a continuous part of iteration
					rather than a one-time deliverable.
				</p>
			</DetailSection>
		</>
	)
}

function LiquidGlassCaseSections({ project }: { project: Project }) {
	return (
		<>
			<DetailSection id="overview" index="01" title="Overview">
				<p className="lead">
					Modernizing Word, Excel, and PowerPoint for Apple&apos;s Liquid Glass design language
					across iPhone and iPad.
				</p>
				<div className="two-up">
					<div>
						<h3>The challenge</h3>
						<p>
							The visual refresh needed to feel native to iOS and iPadOS while preserving dense
							productivity workflows, readable content, and a coherent WXP experience across three
							apps with different interaction needs.
						</p>
					</div>
					<div>
						<h3>My role</h3>
						<p>
							I led cross-app design exploration and critique, authored source-of-truth guidance,
							partnered with PM and engineering on feasibility, and supported implementation,
							bug-bash, App Store, and rollout readiness.
						</p>
					</div>
				</div>
			</DetailSection>

			<DetailSection id="impact" index="02" title="Impact + solution">
				<div className="impact-callout" style={{ '--accent': '#bbeff9' } as React.CSSProperties}>
					<span>Documented impact</span>
					<strong>{project.impact}</strong>
				</div>
				<div className="impact-metrics">
					<div><strong>3 apps</strong><span>unified through shared visual guidance</span></div>
					<div><strong>7</strong><span>navigation and header features refreshed with Liquid Glass</span></div>
				</div>
			</DetailSection>

			<DetailSection id="research" index="03" title="System analysis">
				<p className="lead">
					I evaluated Liquid Glass as an interaction system—not a material applied uniformly to every
					surface.
				</p>
				<div className="insight-list">
					<p><span>Apple system</span>Studied native materials, OS-owned behavior, UIKit constraints, and where system components could replace custom implementations.</p>
					<p><span>WXP system</span>Mapped header commanding, title behavior, tabs, sheets, panes, canvas resizing, and compact states across Word, Excel, and PowerPoint.</p>
					<p><span>App context</span>Identified where Excel’s dense spreadsheet and formula-bar interactions required a different treatment from Word and PowerPoint.</p>
				</div>
			</DetailSection>

			<DetailSection id="journey" index="04" title="Interaction mapping">
				<p className="lead">
					Each surface was evaluated from rest through scroll, resize, expansion, and return.
				</p>
				<div className="solution-strip">
					<div><span>01</span><strong>Headers</strong><p>Defined hierarchy, command priority, title truncation, and scroll-responsive treatment.</p></div>
					<div><span>02</span><strong>Panes + canvas</strong><p>Explored compact mode, multi-pane behavior, viewport resizing, and canvas adjustment.</p></div>
					<div><span>03</span><strong>Sheets</strong><p>Mapped partial-to-full-sheet transitions, drill-in navigation, and expandable controls.</p></div>
				</div>
			</DetailSection>

			<DetailSection id="concepts" index="05" title="Design concepts">
				<p className="lead">
					The system balanced Apple-native behavior with the recognizable structure of Microsoft 365.
				</p>
				<div className="concept-grid liquid-concepts">
					<div><span className="concept-mark">01</span><p>Material</p><h3>Native first</h3><span>Use system behavior where it improves quality and maintainability</span></div>
					<div><span className="concept-mark">02</span><p>Framework</p><h3>Shared core</h3><span>One source of truth for structure, spacing, and responsive rules</span></div>
					<div><span className="concept-mark">03</span><p>Adaptation</p><h3>App aware</h3><span>Preserve shared patterns without forcing identical behavior</span></div>
				</div>
			</DetailSection>

			<DetailSection id="feedback" index="06" title="Critique + iteration">
				<p>
					I led critique and alignment sessions across design, PM, and engineering, then translated
					feedback into updated specs and production references. Reviews focused on narrow widths,
					vertical stacking, tab alignment, readability, implementation feasibility, and app-specific
					behavior.
				</p>
				<div className="copilot-process" aria-label="Liquid Glass review process">
					{['Explore', 'Critique', 'Specify', 'Implementation review', 'Bug bash'].map((step, index) => (
						<div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>
					))}
				</div>
				<blockquote><span>“</span>Consistency came from shared principles and active governance—not from making every app behave exactly the same.</blockquote>
			</DetailSection>

			<DetailSection id="final" index="07" title="Shipped system">
				<p className="lead">
					The production experience refreshed App Home and navigation across WXP on iPhone and iPad.
				</p>
				<div className="copilot-deliverables liquid-deliverables">
					<div><span>Shipped</span><h3>App Home</h3><p>Liquid Glass navigation, refreshed header structure, and visual branding across iPhone and iPad.</p></div>
					<div><span>System</span><h3>Source of truth</h3><p>Centralized POR screens and guidance for Word, Excel, PowerPoint, design, and engineering.</p></div>
					<div><span>Extended</span><h3>Interaction model</h3><p>Detailed prototypes and specifications.</p></div>
				</div>
			</DetailSection>

			<DetailSection id="learning" index="08" title="Learning">
				<p className="learning-statement">
					Platform modernization succeeds when native behavior and product context shape each other.
				</p>
				<p>
					Applying Liquid Glass to Word, Excel, and PowerPoint taught me to connect UX/UI decisions
					with product engineering constraints. Building functional prototypes helped me evaluate
					how translucent controls, layered surfaces, and transitions behaved over real document
					content—not just polished mockups. I learned to{' '}
					<span className="liquid-highlight">preserve clear hierarchy and familiar navigation while balancing visual depth</span>{' '}
					with responsiveness and performance. Accessibility needed to shape those choices from the start:{' '}
					<span className="liquid-highlight">checking contrast over changing backgrounds</span>,{' '}
					<span className="liquid-highlight">maintaining readable labels and generous touch targets</span>, and{' '}
					<span className="liquid-highlight">accounting for larger text, reduced transparency, and reduced motion</span>.
					Prototyping made these tradeoffs tangible and
					gave design and engineering a shared basis for refining the experience across WXP.
				</p>
			</DetailSection>
		</>
	)
}

function CopilotCaseSections({ project }: { project: Project }) {
	return (
		<>
			<DetailSection id="overview" index="01" title="Overview">
				<p className="lead">
					Designing thoughtful Copilot Chat &amp; Agentic Editing experiences that{' '}
					<span className="case-plain">make powerful AI capabilities feel approachable</span>{' '}
					across mobile and tablet.
				</p>
				<div className="two-up">
					<div>
						<h3>The challenge</h3>
						<p>
							As Copilot continues to evolve quickly, the experience needs a clear interaction model that
							could scale across devices while remaining understandable and useful.
						</p>
					</div>
					<div>
						<h3>My role</h3>
						<p>
							I contributed systems thinking, interaction design, prototyping, research, and
							cross-functional alignment from early exploration through product direction.
						</p>
					</div>
				</div>
			</DetailSection>

			<DetailSection id="impact" index="02" title="Impact">
				<div className="impact-callout" style={{ '--accent': '#ffd2bd' } as React.CSSProperties}>
					<span>Documented impact</span>
					<strong>{project.impact}</strong>
				</div>
				<p>
					My work helped teams align around shared experience principles, prioritize meaningful
					improvements, and evaluate emerging interactions through tangible prototypes.
				</p>
				<div className="solution-strip">
					<div>
						<span>01</span>
						<strong>Create clarity</strong>
						<p>Turned an evolving problem space into understandable experience frameworks.</p>
					</div>
					<div>
						<span>02</span>
						<strong>Align direction</strong>
						<p>Built shared language for product, design, and engineering decisions.</p>
					</div>
					<div>
						<span>03</span>
						<strong>Make it tangible</strong>
						<p>Used prototypes to explore behavior, tradeoffs, and interaction quality.</p>
					</div>
				</div>
			</DetailSection>

			<DetailSection id="research" index="03" title="Approach">
				<p className="lead">
					I approached the work as a connected product system rather than a collection of isolated
					features.
				</p>
				<div className="insight-list">
					<p>
						<span>Understand</span>Mapped user needs, product constraints, and cross-device patterns
						to identify the highest-value opportunities.
					</p>
					<p>
						<span>Frame</span>Translated complexity into experience principles, design proposals,
						and clear decision points.
					</p>
					<p>
						<span>Explore</span>Built interactive concepts to evaluate usability, coherence, and
						adaptability before implementation.
					</p>
				</div>
			</DetailSection>

			<DetailSection id="journey" index="04" title="Design principles">
				<p className="lead">
					The strongest concepts balanced intelligence with predictability and control.
				</p>
				<div className="copilot-deliverables">
					<div>
						<span>01</span>
						<h3>Clear</h3>
						<p>Make system behavior and next steps easy to understand</p>
					</div>
					<div>
						<span>02</span>
						<h3>Adaptive</h3>
						<p>Respond thoughtfully to device, context, and user intent</p>
					</div>
					<div>
						<span>03</span>
						<h3>Coherent</h3>
						<p>Preserve familiar patterns as capabilities expand</p>
					</div>
				</div>
			</DetailSection>

			<DetailSection id="concepts" index="05" title="Interaction design">
				<p className="lead">
					I explored how people discover, understand, and act with AI without overwhelming the core
					experience.
				</p>
				<div className="solution-strip skills-decisions">
					<div>
						<span>Discover</span>
						<strong>Reveal progressively</strong>
						<p>Introduce capability at the moment it becomes relevant.</p>
					</div>
					<div>
						<span>Understand</span>
						<strong>Explain with context</strong>
						<p>Use hierarchy and feedback to make complex behavior legible.</p>
					</div>
					<div>
						<span>Act</span>
						<strong>Keep people in control</strong>
						<p>Make actions intentional, reversible, and easy to follow.</p>
					</div>
				</div>
			</DetailSection>

			<DetailSection id="feedback" index="06" title="Collaboration">
				<p>
					I partnered closely with product, engineering, research, and design peers to turn ambiguous
					questions into aligned decisions and iterated product direction.
				</p>
				<div className="copilot-process" aria-label="Collaborative design process">
					{['Understand', 'Frame', 'Explore', 'Prototype', 'Align'].map(
						(step, index) => (
							<div key={step}>
								<span>{String(index + 1).padStart(2, '0')}</span>
								<strong>{step}</strong>
							</div>
						)
					)}
				</div>
			</DetailSection>

			<DetailSection id="final" index="07" title="Outcomes">
				<p className="lead">
					The work established a stronger foundation for a cohesive and extensible AI experience.
				</p>
				<div className="copilot-deliverables">
					<div>
						<span>01</span>
						<h3>System thinking</h3>
						<p>Connected individual interactions to a broader product experience.</p>
					</div>
					<div>
						<span>02</span>
						<h3>Interactive prototypes</h3>
						<p>Enabled meaningful critique of behavior, not only static screens.</p>
					</div>
					<div>
						<span>03</span>
						<h3>Shared direction</h3>
						<p>Helped cross-functional partners align around scalable design principles.</p>
					</div>
				</div>
			</DetailSection>

			<DetailSection id="learning" index="08" title="Learning">
				<p className="learning-statement">
					Building the interaction in code revealed design decisions that static screens could not.
				</p>
				<p>
					Coding functional prototypes taught me to design beyond the ideal path: loading,
					interruptions, errors, and transitions all shape how an interaction feels. I learned to
					build the smallest working version that could answer a design question, then test and
					refine it before adding complexity.{' '}
					<span className="case-highlight">
						Reusable components made those iterations easier, while reviewing AI-generated code
						kept the implementation aligned with the intended behavior
					</span>. The prototype became both a design tool and a shared reference for discussing
					feasibility and tradeoffs with engineering.
				</p>
			</DetailSection>
		</>
	)
}

function ElevateTripleDiamond() {
	return (
		<figure className="elevate-diamonds">
			<svg viewBox="0 0 900 220" role="img" aria-labelledby="triple-diamond-title triple-diamond-description">
				<title id="triple-diamond-title">Elevate Triple Diamond process</title>
				<desc id="triple-diamond-description">
					Three cycles of divergence and convergence: discover and define the problem,
					explore and prioritize solutions, then test and launch the beta.
				</desc>
				<path d="M20 110H880" stroke="#886319" strokeDasharray="4 6" />
				<path d="m20 110 140-95 140 95-140 95Z" fill="#faf3e5" stroke="#886319" />
				<path d="m300 110 150-95 150 95-150 95Z" fill="#f4e3b7" stroke="#886319" />
				<path d="m600 110 140-95 140 95-140 95Z" fill="#edce83" stroke="#886319" />
				{[
					{ x: 160, title: 'Understand', detail: 'Discover / Define' },
					{ x: 450, title: 'Explore', detail: 'Develop / Prioritize' },
					{ x: 740, title: 'Deliver', detail: 'Test / Launch' },
				].map(({ x, title, detail }) => (
					<g key={title} textAnchor="middle" fill="#513b15">
						<text x={x} y="102" fontSize="24" fontWeight="600">{title}</text>
						<text x={x} y="130" fontSize="15">{detail}</text>
					</g>
				))}
			</svg>
			<figcaption>
				I introduced the Triple Diamond framework to the team to make room for exploring the
				problem, evaluating solutions, and testing the experience before launch.
			</figcaption>
		</figure>
	)
}

function ElevateSynthesis() {
	const groups = [
		{ title: 'Find the right fit', notes: ['Relevant leadership experience', 'Clear coaching specialties', 'Compare fit before committing'] },
		{ title: 'Make time for growth', notes: ['Fit sessions around work', 'Reduce scheduling effort', 'Keep the next step visible'] },
		{ title: 'Build trust', notes: ['Understand coach credentials', 'Know why information is requested', 'Keep personal goals private'] },
		{ title: 'See progress', notes: ['Connect sessions to goals', 'Make progress easy to review', 'Reduce administrative overhead'] },
	]
	const ideas = [
		{ title: 'Coach discovery + filters', votes: 12 },
		{ title: 'Needs-based matching', votes: 10 },
		{ title: 'Booking + administration', votes: 8 },
		{ title: 'Progress analytics', votes: 5 },
		{ title: 'Extended profile customization', votes: 3 },
	]
	return (
		<div className="elevate-synthesis">
			<h3>Affinity mapping</h3>
			<p className="elevate-diagram-note">
				Illustrative synthesis: sample notes created to explain the process, not verbatim research findings.
			</p>
			<div className="elevate-affinity">
				{groups.map(({ title, notes }) => (
					<div key={title}>
						<h4>{title}</h4>
						{notes.map((note) => <p key={note}>{note}</p>)}
					</div>
				))}
			</div>
			<h3>Brainstorming + heatmap voting</h3>
			<p className="elevate-diagram-note">
				Mock dot-voting heatmap. Counts illustrate how ideas can be compared; they are not recorded team votes.
			</p>
			<div className="elevate-voting">
				{ideas.map(({ title, votes }) => (
					<div key={title} style={{ '--vote-strength': `${20 + votes * 5}%` } as React.CSSProperties}>
						<strong>{title}</strong>
						<span className="elevate-vote-dots" aria-hidden="true">
							{Array.from({ length: votes }, (_, index) => <i key={index} />)}
						</span>
						<span>{votes} illustrative votes</span>
					</div>
				))}
			</div>
		</div>
	)
}

const founderJourney = [
	{
		title: 'Recognize a need',
		action: 'A founder looks for support while balancing team growth, leadership decisions, and personal time.',
		thought: 'I need a sounding board, but finding one should not become another project.',
		friction: 'The coaching market feels fragmented, with unclear services and hard-to-compare options.',
		opportunity: 'Explain what coaching offers and provide one clear entry point.',
		emotion: 'Overwhelmed',
	},
	{
		title: 'Define goals',
		action: 'The founder shares current challenges, coaching goals, availability, and preferences.',
		thought: 'Which details will actually help me find the right person?',
		friction: 'A long intake can feel like a barrier before the value is clear.',
		opportunity: 'Ask for essential matching information first and explain why it matters.',
		emotion: 'Cautiously hopeful',
	},
	{
		title: 'Explore coaches',
		action: 'The founder filters and compares coaches by relevant expertise, industry experience, and fit.',
		thought: 'Who understands the kind of challenges I am facing?',
		friction: 'A large coach directory can make the decision feel less manageable.',
		opportunity: 'Combine relevant recommendations with filters and comparable coach profiles.',
		emotion: 'Curious',
	},
	{
		title: 'Choose + book',
		action: 'The founder reviews a potential match and schedules an introductory session.',
		thought: 'Can I try this without making a big commitment?',
		friction: 'Unclear availability and administrative steps can interrupt momentum.',
		opportunity: 'Make availability, expectations, and the booking action easy to find.',
		emotion: 'Ready to act',
	},
	{
		title: 'Start coaching',
		action: 'The founder and coach align on priorities and agree on practical next steps.',
		thought: 'I want this to connect to my real work, not just the conversation.',
		friction: 'Goals and follow-up actions can get lost between sessions.',
		opportunity: 'Keep shared goals and the next action visible without adding administrative work.',
		emotion: 'Supported',
	},
	{
		title: 'Reflect + adjust',
		action: 'The founder reviews progress and adjusts goals as leadership and work-life needs change.',
		thought: 'Is this helping me lead better and make more space for life?',
		friction: 'Charts alone may not capture meaningful progress or personal context.',
		opportunity: 'Pair understandable analytics with reflection and a clear way to revisit goals.',
		emotion: 'More confident',
	},
]

function ElevateFounderJourney() {
	const [activeStep, setActiveStep] = React.useState(0)
	const tabs = React.useRef<(HTMLButtonElement | null)[]>([])
	const step = founderJourney[activeStep]
	return (
		<div className="elevate-founder-journey">
			<p className="elevate-diagram-note">
				Illustrative founder scenario. Select a stage to explore actions, questions, friction, and design opportunities.
			</p>
			<div className="elevate-journey-tabs" role="tablist" aria-label="Founder coaching journey">
				{founderJourney.map(({ title }, index) => (
					<button
						key={title}
						ref={(node) => { tabs.current[index] = node }}
						type="button"
						role="tab"
						id={`founder-stage-${index}`}
						aria-selected={activeStep === index}
						aria-controls="founder-journey-panel"
						tabIndex={activeStep === index ? 0 : -1}
						onClick={() => setActiveStep(index)}
						onKeyDown={(event) => {
							let next: number
							if (event.key === 'ArrowRight') next = (index + 1) % founderJourney.length
							else if (event.key === 'ArrowLeft') next = (index - 1 + founderJourney.length) % founderJourney.length
							else if (event.key === 'Home') next = 0
							else if (event.key === 'End') next = founderJourney.length - 1
							else return
							event.preventDefault()
							setActiveStep(next)
							tabs.current[next]?.focus()
						}}
					>
						<span>{String(index + 1).padStart(2, '0')}</span>
						{title}
					</button>
				))}
			</div>
			<div id="founder-journey-panel" role="tabpanel" aria-labelledby={`founder-stage-${activeStep}`} tabIndex={0}>
				<div className="elevate-journey-heading">
					<h3>{step.title}</h3>
					<span>{step.emotion}</span>
				</div>
				<dl className="elevate-journey-details">
					<div><dt>Action</dt><dd>{step.action}</dd></div>
					<div><dt>Thinking</dt><dd>&ldquo;{step.thought}&rdquo;</dd></div>
					<div><dt>Friction</dt><dd>{step.friction}</dd></div>
					<div><dt>Design opportunity</dt><dd>{step.opportunity}</dd></div>
				</dl>
			</div>
		</div>
	)
}

function ElevateCaseSections({ project }: { project: Project }) {
	return (
		<>
			<DetailSection id="overview" index="01" title="Overview">
				<p className="lead">
					Elevate is a full-service, tech-enabled solution that optimizes the performance of a
					professional leader&apos;s life.
				</p>
				<p>
					In a 0-to-1 startup with no prior products, I led the design and launch of the digital
					platform&apos;s beta, creating an intuitive experience and establishing its design language
					and system.
				</p>
				<div className="impact-metrics impact-metrics-four elevate-metrics">
					<div><strong>17</strong><span>client companies engaged</span></div>
					<div><strong>21</strong><span>world-class coaches</span></div>
					<div><strong>100%</strong><span>NPS score for vetted coaching services</span></div>
					<div><strong>0 to 1</strong><span>startup context, with no prior products</span></div>
				</div>
				<div className="two-up">
					<div><h3>The problem</h3><p>{project.challenge}</p></div>
					<div>
						<h3>My role</h3>
						<p>
							I led the beta platform from discovery to launch, crafted a delightful and intuitive
							UX/UI, and established a design language and reusable system to support a growing product.
						</p>
					</div>
				</div>
				<ElevateTripleDiamond />
			</DetailSection>

			<DetailSection id="impact" index="02" title="Impact + solution">
				<div className="impact-callout" style={{ '--accent': project.accent } as React.CSSProperties}>
					<span>Design impact</span><strong>{project.impact}</strong>
				</div>
				<div className="impact-metrics impact-metrics-four elevate-metrics">
					<div><strong>3</strong><span>iterations informed by client beta testers</span></div>
					<div><strong>43+</strong><span>screens designed in high-fidelity prototypes</span></div>
					<div><strong>20%</strong><span>increase in retained users of the design system</span></div>
					<div><strong>15%</strong><span>increase in operational efficiency</span></div>
				</div>
				<div className="solution-strip">
					<div><span>01</span><strong>Connect leaders + coaches</strong><p>Facilitate matches around leadership goals and coaching needs.</p></div>
					<div><span>02</span><strong>Simplify administration</strong><p>Streamline administrative tasks so coaches can focus on coaching.</p></div>
					<div><span>03</span><strong>Make progress visible</strong><p>Provide analytics that support better workflows and work-life balance.</p></div>
				</div>
			</DetailSection>

			<DetailSection id="research" index="03" title="User research">
				<p className="lead">
					I combined market research with direct input from coaches and professional leaders
					to understand their needs before defining the platform.
				</p>
				<div className="solution-strip elevate-research-counts">
					<div><span>Secondary research</span><strong>35 competitors</strong><p>Analyzed the coaching landscape and existing service experiences.</p></div>
					<div><span>Interviews</span><strong>24 participants</strong><p>Interviewed coaches and professional leaders about their needs.</p></div>
					<div><span>Surveys</span><strong>109 responses</strong><p>Investigated needs to inform synthesis and How Might We statements.</p></div>
				</div>
				<h3 className="elevate-subheading">Hypotheses tested</h3>
				<div className="two-up elevate-hypotheses">
					<div>
						<h3>01 / Matching for fit</h3>
						<p>A precise algorithm matching leaders with coaches tailored to their specific needs will expedite goal attainment.</p>
					</div>
					<div>
						<h3>02 / Making performance visible</h3>
						<p>Performance analytics tools help coaches monitor administrative processes and professional leaders manage teams and optimize workflows.</p>
					</div>
				</div>
				<p>
					I translated the research into How Might We statements: How might we make finding a
					relevant coach more approachable? How might we reduce administrative effort? How might
					we help leaders understand progress without adding to their workload?
				</p>
				<ElevateSynthesis />
			</DetailSection>

			<DetailSection id="journey" index="04" title="Journey mapping">
				<p className="lead">
					From needing support to finding the right coach: a founder&apos;s path through Elevate.
				</p>
				<p>
					I used journey mapping to connect discovery, onboarding, coach matching, booking, and
					ongoing reflection, identifying where clearer information and fewer steps could reduce friction.
				</p>
				<ElevateFounderJourney />
			</DetailSection>

			<DetailSection id="concepts" index="05" title="Design concepts">
				<p className="lead">
					Prioritizing the beta meant balancing useful capabilities with a simple, trustworthy experience.
				</p>
				<p>
					I conducted feature prioritization around leader-coach matching, coach administration,
					and performance analytics, weighing the value of each feature against implementation
					effort and the time available for launch.
				</p>
				<div className="elevate-tradeoffs">
					{[
						{ title: 'Onboarding', tension: 'Detailed intake vs. quick setup', direction: 'Balance information needed for a relevant match with the effort required to get started.' },
						{ title: 'Interface complexity', tension: 'Simple and clean vs. feature-rich', direction: 'Make key actions discoverable without asking users to navigate every capability at once.' },
						{ title: 'Privacy + security', tension: 'Useful data vs. personal privacy', direction: 'Evaluate what information to collect, why it is needed, and how clearly that purpose is communicated.' },
						{ title: 'Matching algorithm', tension: 'More factors vs. meaningful fit', direction: 'Consider skills, personality, industry, and goals when deciding which factors should inform a match.' },
					].map(({ title, tension, direction }) => (
						<div key={title}><h3>{title}</h3><strong>{tension}</strong><p>{direction}</p></div>
					))}
				</div>
			</DetailSection>

			<DetailSection id="feedback" index="06" title="Feedback + iteration">
				<p className="lead">
					Three iterations turned client beta feedback into a clearer, more useful platform.
				</p>
				<blockquote><span>“</span>{project.quote}</blockquote>
				<p>
					This feedback highlighted the need for filters in coach discovery, helping leaders narrow
					the available coaches before choosing a session. I used beta testing to revisit key actions,
					refine information hierarchy, and improve the path from exploration to selection.
				</p>
				<div className="copilot-process elevate-process" aria-label="Elevate beta iteration process">
					{['Test the beta', 'Gather feedback', 'Prioritize changes', 'Refine the design', 'Test again'].map((step, index) => (
						<div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>
					))}
				</div>
			</DetailSection>

			<DetailSection id="final" index="07" title="Final designs">
				<p className="lead">
					A new digital platform connecting coaching discovery, day-to-day services, and performance insight.
				</p>
				<p>
					I designed, created, and launched new features from ideation to implementation across
					more than 43 high-fidelity screens. The platform made key actions accessible and
					discoverable and improved efficiency by automating services.
				</p>
				<div className="copilot-deliverables elevate-deliverables">
					<div><span>For leaders</span><h3>Coach matching</h3><p>Discover relevant coaches and move toward a match based on professional needs.</p></div>
					<div><span>For coaches</span><h3>Service workflows</h3><p>Streamline administrative tasks and reduce the effort around delivering coaching.</p></div>
					<div><span>For all users</span><h3>Performance analytics</h3><p>Make progress and workflows easier to understand in support of work-life balance.</p></div>
				</div>
				<p>
					A shared design language and reusable system connected these features, giving the
					early-stage team a consistent foundation for the beta and future product development.
				</p>
			</DetailSection>

			<DetailSection id="learning" index="08" title="Learning">
				<p className="learning-statement">
					Building from zero taught me to make progress through ambiguity without losing sight of people.
				</p>
				<p>
					Budget and time constraints shaped the work at an early-growth startup with no existing
					product to build on. Wearing multiple hats helped me understand the full product
					development cycle, from research and prioritization to design, implementation, and launch.
				</p>
				<p>
					Introducing the Triple Diamond gave the team a shared framework for exploring before
					committing. A human-centered approach kept the work grounded in the needs of coaches and
					professional leaders, while beta feedback showed how impactful even focused design
					iterations could be.
				</p>
				<p>
					I learned that an intuitive, accessible interface is foundational, not a finishing
					touch. Clear navigation, readable content, discoverable actions, and manageable choices
					help people get value from the platform without having to learn its complexity first.
				</p>
			</DetailSection>
		</>
	)
}

function CaseStudy({ project, onHome }: { project: Project; onHome: () => void }) {
	const [activeSection, setActiveSection] = React.useState('overview')
	const isNdaProject = ['gather', 'mosaic', 'tandem', 'bloom'].includes(project.id)
	const pageSections =
		project.id === 'gather'
			? backstageSections
			: project.id === 'mosaic'
				? copilotSections
				: project.id === 'tandem'
					? liquidGlassSections
					: sections

	React.useEffect(() => {
		window.scrollTo(0, 0)
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
				if (visible) setActiveSection(visible.target.id)
			},
			{ rootMargin: '-15% 0px -62% 0px', threshold: [0.05, 0.25, 0.5] }
		)
		pageSections.forEach(({ id }) => {
			const node = document.getElementById(id)
			if (node) observer.observe(node)
		})
		return () => observer.disconnect()
	}, [project.id])

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<>
			<main className="case-study">
				<button className="back-button" onClick={onHome}>
					<span aria-hidden="true">←</span> All work
				</button>
				<section className="case-hero">
					<p className="eyebrow">
						Case study · {project.year} · {project.number}
					</p>
					<h1>{project.title}</h1>
					<p className="case-deck">{project.summary}</p>
					<ProjectVisual project={project} large />
					<div className="project-facts">
						<div>
							<span>Role</span>
							<strong>{project.role}</strong>
						</div>
						<div>
							<span>Team</span>
							<strong>{project.team}</strong>
						</div>
						<div>
							<span>Timeline</span>
							<strong>{project.timeline}</strong>
						</div>
						<div>
							<span>Skills</span>
							<strong>{project.skills}</strong>
						</div>
						<div>
							<span>Tools</span>
							<strong>{project.tools}</strong>
						</div>
					</div>
				</section>

				<div className="case-layout">
					<aside className="case-outline">
						<p>Inside this project</p>
						<ol>
							{pageSections.map((section, index) => (
								<li key={section.id} className={activeSection === section.id ? 'active' : ''}>
									<button onClick={() => scrollTo(section.id)}>
										<span>{String(index + 1).padStart(2, '0')}</span>
										{section.label}
									</button>
								</li>
							))}
						</ol>
					</aside>

					<div className="case-content">
						{isNdaProject && (
							<p className={`nda-note nda-note-${project.id}`}>
								<span>This work is under NDA. Design explorations, prototypes, and diagrams are confidential.</span>
								<a href="mailto:katrinakuo@microsoft.com">Reach out for more details ↗</a>
							</p>
						)}
						{project.id === 'gather' ? (
							<BackstageCaseSections project={project} />
						) : project.id === 'mosaic' ? (
							<CopilotCaseSections project={project} />
						) : project.id === 'tandem' ? (
							<LiquidGlassCaseSections project={project} />
						) : (
							<ElevateCaseSections project={project} />
						)}
					</div>
				</div>

				<section className="next-project">
					<p>Next project</p>
					<button
						onClick={() => {
							const next = projects[(projects.indexOf(project) + 1) % projects.length]
							window.location.hash = `#/project/${next.id}`
						}}
					>
						{projects[(projects.indexOf(project) + 1) % projects.length].title} <Arrow />
					</button>
				</section>
			</main>
			<Footer />
		</>
	)
}

function Footer() {
	return (
		<footer>
			<div>
				<p className="eyebrow">Have a good problem?</p>
				<h2>Let&apos;s make something thoughtful together. <span>♥</span></h2>
			</div>
			<div className="footer-links">
				<a
					href="https://www.linkedin.com/in/katrina-kuo"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn <Arrow />
				</a>
				<a href="mailto:katrinakuo@microsoft.com">
					Email <Arrow />
				</a>
			</div>
			<p className="footer-note">Designed with curiosity, matcha, and a suspicious number of sticky notes.</p>
			<p className="footer-year">© {new Date().getFullYear()} Katrina Kuo</p>
		</footer>
	)
}

export const Prototype: React.FC = () => {
	const [route, setRoute] = React.useState(window.location.hash)

	React.useEffect(() => {
		const onHashChange = () => setRoute(window.location.hash)
		window.addEventListener('hashchange', onHashChange)
		return () => window.removeEventListener('hashchange', onHashChange)
	}, [])

	const projectId = route.match(/^#\/project\/([^/]+)/)?.[1]
	const activeProject = projects.find((project) => project.id === projectId)
	const goHome = () => {
		window.location.hash = '#/'
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	const goToWork = () => {
		window.location.hash = '#/'
		window.setTimeout(() => {
			document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' })
		}, 0)
	}

	return (
		<div className="portfolio-shell">
			<CustomCursor />
			<Header onHome={goHome} onWork={goToWork} />
			{activeProject ? (
				<CaseStudy project={activeProject} onHome={goHome} />
			) : (
				<Home openProject={(project) => (window.location.hash = `#/project/${project.id}`)} />
			)}
		</div>
	)
}
