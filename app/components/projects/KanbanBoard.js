"use client";

import { motion } from "framer-motion";
import { KanbanCard } from "./KanbanCard";
import { fadeUp } from "../motion-presets";

export function KanbanBoard({ title, columns, items }) {
  return (
    <motion.div
      className="kanban-board"
      aria-label={title}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
    >
      {columns.map((column) => {
        const columnItems = items.filter((item) => column.states.includes(item.state));

        return (
          <section className="kanban-column" key={column.id} aria-labelledby={`${column.id}-title`}>
            <div className="kanban-column-header">
              <div>
                <p className="kanban-column-kicker">{column.kicker}</p>
                <h3 id={`${column.id}-title`}>{column.title}</h3>
              </div>
              <span className="kanban-count">{columnItems.length}</span>
            </div>
            <div className={`kanban-meter ${column.id}`} aria-hidden="true">
              <span style={{ width: columnItems.length ? `${Math.min(100, 34 + columnItems.length * 16)}%` : "18%" }} />
            </div>
            <div className="kanban-list">
              {columnItems.map((item, index) => (
                <KanbanCard item={item} index={index} key={`${column.id}-${item.title}`} />
              ))}
            </div>
          </section>
        );
      })}
    </motion.div>
  );
}
