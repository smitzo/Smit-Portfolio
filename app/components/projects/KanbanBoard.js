import { KanbanCard } from "./KanbanCard";

export function KanbanBoard({ items }) {
  return (
    <div className="project-grid">
      {items.map((item, index) => (
        <KanbanCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}
