"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function TimelineAccent({ kind }) {
  if (kind === "api") {
    return (
      <motion.div className="timeline-accent api-accent" aria-hidden="true">
        {["POST", "TAX", "OK"].map((label, index) => (
          <motion.span
            key={label}
            animate={{ x: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.22 }}
          >
            {label}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (kind === "workflow") {
    return (
      <motion.div className="timeline-accent workflow-accent" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            animate={{ scale: [0.86, 1.18, 0.86], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: dot * 0.22 }}
          />
        ))}
      </motion.div>
    );
  }

  if (kind === "bars") {
    return (
      <motion.div className="timeline-accent bars-accent" aria-hidden="true">
        {[24, 38, 30, 48].map((height, index) => (
          <motion.span
            key={height}
            style={{ height }}
            animate={{ scaleY: [0.55, 1, 0.55] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.16 }}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div className="timeline-accent orbit-accent" aria-hidden="true">
      <motion.span
        className="orbit-track"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <span />
      </motion.span>
      <motion.span
        className="orbit-cap"
        animate={{ scale: [0.96, 1.08, 0.96] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <GraduationCap size={54} />
      </motion.span>
    </motion.div>
  );
}
