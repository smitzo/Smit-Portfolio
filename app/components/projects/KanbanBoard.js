"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Columns3, Rows3, Star } from "lucide-react";
import { cn } from "../../lib/cn";
import { KanbanCard } from "./KanbanCard";
import { fadeUp } from "../motion-presets";

const PROJECTS_PER_PAGE = 5;

function chunkProjects(items) {
  return Array.from(
    { length: Math.ceil(items.length / PROJECTS_PER_PAGE) },
    (_, pageIndex) => items.slice(pageIndex * PROJECTS_PER_PAGE, (pageIndex + 1) * PROJECTS_PER_PAGE)
  );
}

export function KanbanBoard({ title, items }) {
  const [orientation, setOrientation] = useState("vertical");
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef(null);
  const pageRefs = useRef([]);
  const pages = chunkProjects(items);
  const isVertical = orientation === "vertical";

  const getPagePosition = (page) => {
    const firstPage = pageRefs.current[0];
    if (!firstPage || !page) return 0;

    return isVertical
      ? page.offsetTop - firstPage.offsetTop
      : page.offsetLeft - firstPage.offsetLeft;
  };

  const scrollToPage = (pageIndex) => {
    const nextPage = Math.min(Math.max(pageIndex, 0), pages.length - 1);
    const container = scrollRef.current;
    const page = pageRefs.current[nextPage];

    if (!container || !page) return;

    container.scrollTo({
      top: isVertical ? getPagePosition(page) : 0,
      left: isVertical ? 0 : getPagePosition(page),
      behavior: "smooth"
    });
    setActivePage(nextPage);
  };

  const changeOrientation = (nextOrientation) => {
    if (nextOrientation === orientation) return;
    setOrientation(nextOrientation);
    setActivePage(0);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [orientation]);

  const syncActivePage = () => {
    const container = scrollRef.current;
    if (!container) return;

    const currentPosition = isVertical ? container.scrollTop : container.scrollLeft;
    let closestPage = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    pageRefs.current.forEach((page, pageIndex) => {
      if (!page) return;
      const pagePosition = getPagePosition(page);
      const distance = Math.abs(pagePosition - currentPosition);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestPage = pageIndex;
      }
    });

    setActivePage(closestPage);
  };

  const PreviousIcon = isVertical ? ChevronUp : ChevronLeft;
  const NextIcon = isVertical ? ChevronDown : ChevronRight;

  return (
    <motion.div
      className="rounded-xl border border-[var(--line)] bg-[linear-gradient(180deg,rgba(125,211,252,0.04),transparent_24%),var(--panel)] p-4 shadow-[var(--shadow)] [html[data-theme=light]_&]:border-[#2d46591c] [html[data-theme=light]_&]:bg-[var(--panel)] max-[680px]:p-3"
      aria-label={title}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-sky-300 [html[data-theme=light]_&]:text-[#287f92]">Featured work</p>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-lg font-semibold text-[var(--text)]">Selected projects</h3>
            <span className="text-xs font-normal text-[var(--muted)]">{items.length} projects · {PROJECTS_PER_PAGE} per page</span>
          </div>
        </div>

        <div className="inline-flex rounded-lg border border-sky-300/25 bg-slate-950/30 p-1 [html[data-theme=light]_&]:bg-white/55" aria-label="Project layout">
          {[
            ["vertical", Rows3, "Vertical"],
            ["horizontal", Columns3, "Horizontal"]
          ].map(([value, Icon, label]) => (
            <button
              className={cn(
                "inline-flex min-h-9 items-center gap-1.5 rounded-md px-3 text-xs font-semibold text-[var(--text-soft)] transition-[background,color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/60",
                orientation === value && "bg-sky-500/18 text-sky-200 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.28)] [html[data-theme=light]_&]:bg-[#2a6f8018] [html[data-theme=light]_&]:text-[#287f92]"
              )}
              type="button"
              onClick={() => changeOrientation(value)}
              aria-pressed={orientation === value}
              key={value}
            >
              <Icon size={15} aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[var(--muted)]" aria-label="Project rating guide">
          {[
            [3, "Epic"],
            [2, "Great"],
            [1, "Good"]
          ].map(([stars, label]) => (
            <span className="inline-flex items-center gap-1.5" key={stars}>
              <span className="inline-flex gap-0.5 text-amber-300 [html[data-theme=light]_&]:text-amber-600" aria-hidden="true">
                {Array.from({ length: stars }, (_, index) => (
                  <Star key={index} size={11} fill="currentColor" />
                ))}
              </span>
              {label}
            </span>
          ))}
        </div>

        <span className="rounded-full border border-sky-300/20 bg-sky-500/8 px-2.5 py-1 text-xs font-semibold text-sky-200 [html[data-theme=light]_&]:text-[#287f92]" aria-live="polite">
          Page {activePage + 1} of {pages.length}
        </span>
      </div>

      <div className="relative">
        <div
          className={cn(
            "scroll-smooth rounded-lg focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300/50",
            isVertical
              ? "max-h-[350px] snap-y snap-mandatory overflow-y-auto overscroll-y-contain pr-2"
              : "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-3"
          )}
          ref={scrollRef}
          onScroll={syncActivePage}
          tabIndex={0}
          aria-label={`${title}, ${orientation} scrolling`}
        >
          {pages.map((pageItems, pageIndex) => (
            <section
              className={cn(
                "snap-start snap-always",
                isVertical
                  ? "grid min-h-[340px] grid-cols-5 items-start gap-3 pb-3 max-[1180px]:grid-cols-3 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1"
                  : "grid w-[max(100%,1280px)] shrink-0 grid-cols-5 items-start gap-3 pr-3"
              )}
              ref={(element) => {
                pageRefs.current[pageIndex] = element;
              }}
              aria-label={`Project page ${pageIndex + 1}`}
              key={pageIndex}
            >
              {pageItems.map((item, itemIndex) => (
                <KanbanCard
                  item={item}
                  index={pageIndex * PROJECTS_PER_PAGE + itemIndex}
                  key={item.title}
                />
              ))}
            </section>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-sky-300/25 bg-sky-500/10 px-3.5 text-xs font-semibold text-sky-200 transition-[transform,border-color,background] hover:-translate-y-px hover:border-sky-300/50 hover:bg-sky-500/15 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300/60 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 [html[data-theme=light]_&]:text-[#287f92]"
            type="button"
            onClick={() => scrollToPage(activePage - 1)}
            disabled={activePage === 0}
          >
            <PreviousIcon size={17} aria-hidden="true" />
            Previous 5
          </button>

          <div className="flex items-center gap-1.5" aria-label="Project pages">
            {pages.map((_, pageIndex) => (
              <button
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-sky-300/35 bg-sky-300/15 transition-[width,background] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300/60",
                  activePage === pageIndex && "w-7 bg-sky-300"
                )}
                type="button"
                onClick={() => scrollToPage(pageIndex)}
                aria-label={`Go to project page ${pageIndex + 1}`}
                aria-current={activePage === pageIndex ? "page" : undefined}
                key={pageIndex}
              />
            ))}
          </div>

          <button
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-sky-300/35 bg-sky-500/15 px-3.5 text-xs font-semibold text-sky-100 shadow-[0_10px_26px_rgba(14,165,233,0.12)] transition-[transform,border-color,background] hover:-translate-y-px hover:border-sky-300/60 hover:bg-sky-500/20 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky-300/60 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 [html[data-theme=light]_&]:text-[#287f92]"
            type="button"
            onClick={() => scrollToPage(activePage + 1)}
            disabled={activePage === pages.length - 1}
          >
            Next 5
            <NextIcon size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
