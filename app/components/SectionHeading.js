"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion-presets";

export function SectionHeading({ kicker, title, children, id }) {
  return (
    <div className="section-heading split-heading">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h2 id={id}>{title}</h2>
      </motion.div>
      {children ? (
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          {children}
        </motion.p>
      ) : null}
    </div>
  );
}
