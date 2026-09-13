import {
  BookOpen,
  ClipboardList,
  Download,
  ExternalLink,
  ListChecks,
  Map,
  PlayCircle,
  RotateCcw,
  Table2,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  BOOKS,
  HOW_TO,
  META,
  PROJECTS,
  STAGES,
  STEPS,
  VIDEOS,
  WEEKLY_RHYTHM,
  LEVEL_LABEL,
  stageLabel,
  type Book,
  type Project,
  type Stage,
  type Step,
  type Video,
} from "@/data/curriculum";
import { countDone, useProgress, type Mark } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MarkToggle } from "@/components/workbook/mark-toggle";

type SheetId =
  | "capa"
  | "roadmap"
  | "passos"
  | "videos"
  | "livros"
  | "projetos"
  | "usar";

const SHEETS: { id: SheetId; label: string; icon: typeof Map }[] = [
  { id: "capa", label: "Capa", icon: Table2 },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "passos", label: "Passo a passo", icon: ListChecks },
  { id: "videos", label: "Vídeos", icon: PlayCircle },
  { id: "livros", label: "Livros", icon: BookOpen },
  { id: "projetos", label: "Projetos", icon: ClipboardList },
  { id: "usar", label: "Como usar", icon: BookOpen },
];

export function WorkbookApp() {
  const [sheet, setSheet] = useState<SheetId>("capa");
  const marks = useProgress((s) => s.marks);
  const toggle = useProgress((s) => s.toggle);
  const reset = useProgress((s) => s.reset);

  const stats = useMemo(() => {
    const stepIds = STEPS.map((s) => s.id);
    const projectIds = PROJECTS.map((p) => p.id);
    const videoIds = VIDEOS.map((v) => v.id);
    const bookIds = BOOKS.map((b) => b.id);
    const stageIds = STAGES.map((s) => s.id);
    return {
      steps: countDone(stepIds, marks),
      stepsTotal: stepIds.length,
      projects: countDone(projectIds, marks),
      projectsTotal: projectIds.length,
      videos: countDone(videoIds, marks),
      videosTotal: videoIds.length,
      books: countDone(bookIds, marks),
      booksTotal: bookIds.length,
      stages: countDone(stageIds, marks),
      stagesTotal: stageIds.length,
    };
  }, [marks]);

  const overall = Math.round(
    ((stats.steps + stats.projects + stats.videos + stats.books + stats.stages) /
      (stats.stepsTotal +
        stats.projectsTotal +
        stats.videosTotal +
        stats.booksTotal +
        stats.stagesTotal)) *
      100,
  );

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-[1400px] flex-col px-3 pb-8 pt-4 sm:px-6 lg:px-8">
      <header className="mb-5 flex flex-col gap-4 border-b border-border pb-5 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Planilha de estudos · {META.updated}
          </p>
          <h1 className="mt-1 font-display text-[2.15rem] leading-[1.05] tracking-[-0.03em] text-fg sm:text-[2.75rem]">
            {META.title}
          </h1>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
            {META.subtitle}. Ritmo {META.hoursPerWeek}, {META.duration}. Marque o
            progresso aqui e baixe o Excel para usar no computador.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="mr-1 flex items-baseline gap-2 rounded-md border border-border bg-bg-elevated px-3 py-2">
            <span className="font-display text-2xl tabular-nums leading-none text-fg">
              {overall}%
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              trilha
            </span>
          </div>
          <Button asChild>
            <a href="./planilha-fullstack.xlsx" download="planilha-fullstack.xlsx">
              <Download />
              Baixar Excel
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              if (window.confirm("Zerar todo o progresso marcado neste caderno?")) {
                reset();
              }
            }}
          >
            <RotateCcw />
            Zerar
          </Button>
        </div>
      </header>

      <ProgressStrip stats={stats} />

      <nav
        aria-label="Abas da planilha"
        className="mt-5 flex gap-1 overflow-x-auto pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SHEETS.map((s) => {
          const active = sheet === s.id;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSheet(s.id)}
              className={cn(
                "inline-flex h-11 shrink-0 items-center gap-2 rounded-t-md border px-3.5 font-medium transition-colors duration-150",
                active
                  ? "border-border-strong border-b-sheet bg-sheet text-fg"
                  : "border-transparent bg-tab text-muted hover:bg-bg-subtle hover:text-fg",
              )}
            >
              <Icon className="size-4" />
              {s.label}
            </button>
          );
        })}
      </nav>

      <section className="relative z-[1] -mt-px min-h-[70vh] rounded-b-xl rounded-tr-xl border border-border-strong bg-sheet shadow-sheet">
        {sheet === "capa" ? <CoverSheet stats={stats} onOpen={setSheet} /> : null}
        {sheet === "roadmap" ? (
          <RoadmapSheet marks={marks} toggle={toggle} />
        ) : null}
        {sheet === "passos" ? <StepsSheet marks={marks} toggle={toggle} /> : null}
        {sheet === "videos" ? <VideosSheet marks={marks} toggle={toggle} /> : null}
        {sheet === "livros" ? <BooksSheet marks={marks} toggle={toggle} /> : null}
        {sheet === "projetos" ? (
          <ProjectsSheet marks={marks} toggle={toggle} />
        ) : null}
        {sheet === "usar" ? <HowToSheet /> : null}
      </section>

      <footer className="mt-6 flex flex-col gap-1 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Stack: {META.stack}</p>
        <p>Arquivo: planilha-fullstack.xlsx · 8 abas · links clicáveis</p>
      </footer>
    </div>
  );
}

function ProgressStrip({
  stats,
}: {
  stats: {
    steps: number;
    stepsTotal: number;
    projects: number;
    projectsTotal: number;
    videos: number;
    videosTotal: number;
    books: number;
    booksTotal: number;
    stages: number;
    stagesTotal: number;
  };
}) {
  const cells = [
    ["Etapas", stats.stages, stats.stagesTotal],
    ["Passos", stats.steps, stats.stepsTotal],
    ["Vídeos", stats.videos, stats.videosTotal],
    ["Livros", stats.books, stats.booksTotal],
    ["Projetos", stats.projects, stats.projectsTotal],
  ] as const;
  return (
    <dl className="grid grid-cols-2 gap-2 sm:grid-cols-5">
      {cells.map(([label, n, total]) => (
        <div
          key={label}
          className="rounded-md border border-border bg-bg-elevated/80 px-3 py-2.5"
        >
          <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
            {label}
          </dt>
          <dd className="mt-0.5 font-display text-xl tabular-nums text-fg">
            {n}
            <span className="text-muted">/{total}</span>
          </dd>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-bg-subtle">
            <div
              className="h-full bg-primary transition-[width] duration-300"
              style={{ width: `${total ? (n / total) * 100 : 0}%` }}
            />
          </div>
        </div>
      ))}
    </dl>
  );
}

function CoverSheet({
  stats,
  onOpen,
}: {
  stats: { projectsTotal: number; videosTotal: number; booksTotal: number };
  onOpen: (id: SheetId) => void;
}) {
  return (
    <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
          Do zero ao portfólio
        </p>
        <h2 className="mt-2 font-display text-3xl leading-tight text-fg sm:text-4xl">
          Um mapa em ordem. Não uma lista de 200 ferramentas.
        </h2>
        <p className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-ink-soft">
          Esta trilha usa JavaScript/TypeScript dos dois lados: HTML, CSS, React,
          Node, PostgreSQL, Git e Docker. São {STAGES.length} etapas,{" "}
          {STEPS.length} passos, {stats.videosTotal} vídeos, {stats.booksTotal}{" "}
          livros e {stats.projectsTotal} projetos de brinde. Estude na ordem.
          Reserve cerca de 40% do tempo para os projetos.
        </p>
        <ol className="mt-6 space-y-3">
          {HOW_TO.slice(0, 5).map((rule, i) => (
            <li key={rule} className="flex gap-3 text-[14.5px] leading-relaxed">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary font-mono text-[11px] text-primary-fg">
                {i + 1}
              </span>
              <span className="text-ink-soft">{rule}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button type="button" onClick={() => onOpen("roadmap")}>
            Abrir roadmap
          </Button>
          <Button type="button" variant="outline" onClick={() => onOpen("projetos")}>
            Ver projetos
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          Abas desta pasta
        </p>
        {SHEETS.filter((s) => s.id !== "capa").map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onOpen(s.id)}
            className="flex items-start gap-3 rounded-md border border-border bg-bg-elevated p-3 text-left transition-colors hover:border-border-strong hover:bg-bg-subtle"
          >
            <s.icon className="mt-0.5 size-4 text-primary" />
            <span>
              <span className="block font-medium text-fg">{s.label}</span>
              <span className="mt-0.5 block text-[13px] text-muted">
                {sheetBlurb(s.id)}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function sheetBlurb(id: SheetId): string {
  switch (id) {
    case "roadmap":
      return "14 etapas com meta, tópicos e mini desafio.";
    case "passos":
      return "Tarefas com horas estimadas e link do recurso.";
    case "videos":
      return "Cursos e playlists em PT e EN, com prioridade.";
    case "livros":
      return "Manuais e livros — vários gratuitos.";
    case "projetos":
      return "18 projetos do aquecimento ao capstone.";
    case "usar":
      return "Regras de estudo e ritmo de 7 dias.";
    default:
      return "";
  }
}

function FilterBar({
  stageId,
  onStage,
  extra,
}: {
  stageId: string;
  onStage: (id: string) => void;
  extra?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border bg-bg-elevated/60 p-4 sm:flex-row sm:items-center sm:justify-between">
      <label className="flex min-w-0 flex-1 items-center gap-2 text-[13px] text-muted">
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider">
          Filtrar etapa
        </span>
        <select
          value={stageId}
          onChange={(e) => onStage(e.target.value)}
          className="h-11 w-full max-w-md rounded-sm border border-border-strong bg-sheet px-3 text-sm text-fg"
        >
          <option value="all">Todas as etapas</option>
          {STAGES.map((s) => (
            <option key={s.id} value={s.id}>
              {String(s.number).padStart(2, "0")} · {s.title}
            </option>
          ))}
        </select>
      </label>
      {extra}
    </div>
  );
}

function RoadmapSheet({
  marks,
  toggle,
}: {
  marks: Record<string, Mark>;
  toggle: (id: string) => void;
}) {
  return (
    <div className="divide-y divide-border">
      {STAGES.map((stage) => (
        <StageRow
          key={stage.id}
          stage={stage}
          mark={marks[stage.id] ?? "off"}
          onToggle={() => toggle(stage.id)}
        />
      ))}
    </div>
  );
}

function StageRow({
  stage,
  mark,
  onToggle,
}: {
  stage: Stage;
  mark: Mark;
  onToggle: () => void;
}) {
  return (
    <article className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[72px_1fr_auto]">
      <div className="font-display text-3xl tabular-nums leading-none text-primary">
        {String(stage.number).padStart(2, "0")}
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-2xl leading-tight text-fg">{stage.title}</h3>
          <span className="rounded-sm border border-border bg-bg-subtle px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
            {LEVEL_LABEL[stage.level]}
          </span>
          <span className="font-mono text-[11px] text-muted">
            {stage.weeks} · {stage.hours}
          </span>
        </div>
        <p className="mt-2 max-w-3xl text-[14.5px] leading-relaxed text-ink-soft">
          {stage.goal}
        </p>
        <p className="mt-1 max-w-3xl text-[13.5px] leading-relaxed text-muted">
          {stage.why}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {stage.topics.map((t) => (
            <li
              key={t}
              className="rounded-sm border border-border bg-bg-elevated px-2 py-1 text-[12.5px] text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[13.5px] leading-relaxed">
          <span className="font-medium text-primary">Mini desafio. </span>
          <span className="text-ink-soft">{stage.miniChallenge}</span>
        </p>
        <p className="mt-1 text-[13px] text-muted">Pronto quando: {stage.doneLooksLike}</p>
      </div>
      <div className="flex items-start">
        <MarkToggle mark={mark} onToggle={onToggle} />
      </div>
    </article>
  );
}

function StepsSheet({
  marks,
  toggle,
}: {
  marks: Record<string, Mark>;
  toggle: (id: string) => void;
}) {
  const [stageId, setStageId] = useState("all");
  const rows = stageId === "all" ? STEPS : STEPS.filter((s) => s.stageId === stageId);
  return (
    <div>
      <FilterBar stageId={stageId} onStage={setStageId} />
      <SheetTable
        columns={["Etapa", "Tópico", "O que fazer", "H", "Recurso", "Status"]}
        rows={rows.map((step) => (
          <StepRow
            key={step.id}
            step={step}
            mark={marks[step.id] ?? "off"}
            onToggle={() => toggle(step.id)}
          />
        ))}
      />
    </div>
  );
}

function StepRow({
  step,
  mark,
  onToggle,
}: {
  step: Step;
  mark: Mark;
  onToggle: () => void;
}) {
  return (
    <tr className="border-b border-border align-top">
      <td className="hidden whitespace-nowrap px-3 py-3 font-mono text-[11px] text-muted md:table-cell">
        {stageLabel(step.stageId)}
      </td>
      <td className="px-3 py-3">
        <div className="font-medium text-fg">{step.topic}</div>
        <div className="mt-0.5 font-mono text-[11px] text-muted md:hidden">
          {stageLabel(step.stageId)} · {step.hours} h
        </div>
      </td>
      <td className="px-3 py-3 text-[13.5px] leading-relaxed text-ink-soft">
        {step.detail}
      </td>
      <td className="hidden px-3 py-3 text-center tabular-nums text-muted md:table-cell">
        {step.hours}
      </td>
      <td className="px-3 py-3">
        <ExtLink href={step.url}>{step.resource}</ExtLink>
      </td>
      <td className="px-3 py-3">
        <MarkToggle mark={mark} onToggle={onToggle} />
      </td>
    </tr>
  );
}

function VideosSheet({
  marks,
  toggle,
}: {
  marks: Record<string, Mark>;
  toggle: (id: string) => void;
}) {
  const [stageId, setStageId] = useState("all");
  const [onlyEssential, setOnlyEssential] = useState(false);
  const rows = VIDEOS.filter((v) => {
    if (stageId !== "all" && v.stageId !== stageId) return false;
    if (onlyEssential && v.priority !== "Essencial") return false;
    return true;
  });
  return (
    <div>
      <FilterBar
        stageId={stageId}
        onStage={setStageId}
        extra={
          <label className="flex h-11 items-center gap-2 text-sm text-ink-soft">
            <input
              type="checkbox"
              checked={onlyEssential}
              onChange={(e) => setOnlyEssential(e.target.checked)}
              className="size-4 accent-primary"
            />
            Só essenciais
          </label>
        }
      />
      <SheetTable
        columns={["Prioridade", "Título", "Canal", "Notas", "Status"]}
        rows={rows.map((v) => (
          <VideoRow
            key={v.id}
            video={v}
            mark={marks[v.id] ?? "off"}
            onToggle={() => toggle(v.id)}
          />
        ))}
      />
    </div>
  );
}

function VideoRow({
  video,
  mark,
  onToggle,
}: {
  video: Video;
  mark: Mark;
  onToggle: () => void;
}) {
  return (
    <tr className="border-b border-border align-top">
      <td className="px-3 py-3">
        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-wider",
            video.priority === "Essencial" ? "text-primary" : "text-warn",
          )}
        >
          {video.priority}
        </span>
      </td>
      <td className="px-3 py-3">
        <ExtLink href={video.url}>{video.title}</ExtLink>
        <div className="mt-1 font-mono text-[11px] text-muted">
          {video.language} · {video.duration} · {video.kind} ·{" "}
          {stageLabel(video.stageId)}
        </div>
      </td>
      <td className="hidden px-3 py-3 text-[13px] text-ink-soft md:table-cell">
        {video.channel}
      </td>
      <td className="hidden px-3 py-3 text-[13.5px] leading-relaxed text-muted lg:table-cell">
        {video.notes}
      </td>
      <td className="px-3 py-3">
        <MarkToggle mark={mark} onToggle={onToggle} />
      </td>
    </tr>
  );
}

function BooksSheet({
  marks,
  toggle,
}: {
  marks: Record<string, Mark>;
  toggle: (id: string) => void;
}) {
  return (
    <SheetTable
      columns={["Livro", "Quando", "Por que ler", "Status"]}
      rows={BOOKS.map((b) => (
        <BookRow
          key={b.id}
          book={b}
          mark={marks[b.id] ?? "off"}
          onToggle={() => toggle(b.id)}
        />
      ))}
    />
  );
}

function BookRow({
  book,
  mark,
  onToggle,
}: {
  book: Book;
  mark: Mark;
  onToggle: () => void;
}) {
  return (
    <tr className="border-b border-border align-top">
      <td className="px-3 py-3">
        <ExtLink href={book.url}>{book.title}</ExtLink>
        <div className="mt-1 text-[13px] text-muted">
          {book.author} · {book.language} · {book.free ? "gratuito" : "pago"} ·{" "}
          {stageLabel(book.stageId)}
        </div>
      </td>
      <td className="hidden px-3 py-3 text-[13.5px] leading-relaxed text-ink-soft md:table-cell">
        {book.when}
      </td>
      <td className="px-3 py-3 text-[13.5px] leading-relaxed text-ink-soft">
        {book.why}
      </td>
      <td className="px-3 py-3">
        <MarkToggle mark={mark} onToggle={onToggle} />
      </td>
    </tr>
  );
}

function ProjectsSheet({
  marks,
  toggle,
}: {
  marks: Record<string, Mark>;
  toggle: (id: string) => void;
}) {
  const [level, setLevel] = useState("all");
  const rows =
    level === "all" ? PROJECTS : PROJECTS.filter((p) => p.level === level);
  const levels = ["Aquecimento", "Iniciante", "Intermediário", "Full stack", "Capstone"];
  return (
    <div>
      <div className="flex gap-1 overflow-x-auto border-b border-border p-3">
        <LevelChip active={level === "all"} onClick={() => setLevel("all")}>
          Todos
        </LevelChip>
        {levels.map((l) => (
          <LevelChip key={l} active={level === l} onClick={() => setLevel(l)}>
            {l}
          </LevelChip>
        ))}
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
        {rows.map((p, i) => (
          <ProjectCard
            key={p.id}
            index={i + 1}
            project={p}
            mark={marks[p.id] ?? "off"}
            onToggle={() => toggle(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

function LevelChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 shrink-0 rounded-sm border px-3 text-[13px] font-medium",
        active
          ? "border-primary bg-primary text-primary-fg"
          : "border-border bg-bg-elevated text-muted hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}

function ProjectCard({
  index,
  project,
  mark,
  onToggle,
}: {
  index: number;
  project: Project;
  mark: Mark;
  onToggle: () => void;
}) {
  return (
    <article className="flex flex-col rounded-lg border border-border bg-bg-elevated p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
            {String(index).padStart(2, "0")} · {project.level} · {project.weeks}
          </p>
          <h3 className="mt-1 font-display text-xl leading-tight text-fg">
            {project.title}
          </h3>
        </div>
        <MarkToggle mark={mark} onToggle={onToggle} />
      </div>
      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
        {project.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1">
        {project.skills.map((s) => (
          <li
            key={s}
            className="rounded-sm bg-bg-subtle px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted"
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[13px] leading-relaxed text-muted">
        <span className="font-medium text-fg">Por quê. </span>
        {project.why}
      </p>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">
        <span className="font-medium text-fg">Extra. </span>
        {project.extra}
      </p>
      {project.refs[0] ? (
        <div className="mt-3">
          <ExtLink href={project.refs[0].url}>{project.refs[0].label}</ExtLink>
        </div>
      ) : null}
    </article>
  );
}

function HowToSheet() {
  return (
    <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2">
      <div>
        <h2 className="font-display text-2xl text-fg">Regras da trilha</h2>
        <ol className="mt-4 space-y-3">
          {HOW_TO.map((rule, i) => (
            <li key={rule} className="flex gap-3 text-[14.5px] leading-relaxed">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary font-mono text-[11px] text-primary-fg">
                {i + 1}
              </span>
              <span className="text-ink-soft">{rule}</span>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2 className="font-display text-2xl text-fg">Ritmo semanal</h2>
        <p className="mt-2 text-[14px] text-muted">
          10–15 horas. Um commit por dia de estudo já muda o GitHub.
        </p>
        <ul className="mt-4 divide-y divide-border overflow-hidden rounded-md border border-border">
          {WEEKLY_RHYTHM.map((d) => (
            <li key={d.day} className="grid grid-cols-[88px_1fr] gap-3 bg-bg-elevated px-4 py-3">
              <span className="font-medium text-primary">{d.day}</span>
              <span className="text-[13.5px] leading-relaxed text-ink-soft">{d.focus}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SheetTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-primary text-left text-primary-fg">
            {columns.map((c) => (
              <th
                key={c}
                className="px-3 py-2.5 font-mono text-[10px] font-medium uppercase tracking-wider"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-start gap-1 font-medium text-primary underline-offset-2 hover:underline"
    >
      <span>{children}</span>
      <ExternalLink className="mt-0.5 size-3.5 shrink-0 opacity-70" />
    </a>
  );
}
