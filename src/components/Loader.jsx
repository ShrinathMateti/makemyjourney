import { motion } from "framer-motion";
import { MdFlight } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";

const DOTS = [0, 1, 2];

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    fontFamily: "system-ui, sans-serif",
    overflow: "hidden",
  },

  pulseRing: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: "50%",
    border: "1.5px solid #1e90ff",
    pointerEvents: "none",
  },

  globeWrapper: {
    position: "absolute",
  },

  orbit: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: "50%",
    border: "1px dashed #1e90ff44",
  },

  planeWrapper: {
    position: "absolute",
    top: -11,
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
  },

  pinWrapper: {
    position: "relative",
    zIndex: 1,
  },

  textBlock: {
    textAlign: "center",
    position: "absolute",
    bottom: 70,
  },

  title: {
    margin: "0 0 4px",
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: "1.5px",
    color: "#1e90ff",
  },

  subtitle: {
    margin: "0 0 14px",
    fontSize: 12,
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#1e90ffaa",
  },

  dotsRow: {
    display: "flex",
    justifyContent: "center",
    gap: 7,
  },

  dot: {
    display: "inline-block",
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#1e90ff",
  },
};

export default function Loader() {
  return (
    <div style={styles.wrapper}>

      {/* Background pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          style={styles.pulseRing}
          animate={{ scale: [1, 2.6], opacity: [0.35, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Globe icon */}
      <motion.div
        style={styles.globeWrapper}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <BsGlobe2 size={90} color="#1e90ff" style={{ opacity: 0.18 }} />
      </motion.div>

      {/* Orbit path + flying plane */}
      <motion.div
        style={styles.orbit}
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          style={styles.planeWrapper}
          animate={{ rotate: -360 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        >
          <MdFlight
            size={22}
            color="#1e90ff"
            style={{ filter: "drop-shadow(0 0 5px #1e90ffaa)" }}
          />
        </motion.div>
      </motion.div>

      {/* Center pin */}
      <motion.div
        style={styles.pinWrapper}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <IoLocationSharp size={30} color="#1e90ff" />
      </motion.div>

      {/* Text block */}
      <motion.div
        style={styles.textBlock}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 style={styles.title}>MakeMyJourney</h2>
        <p style={styles.subtitle}>Premium Travel Experience</p>

        <div style={styles.dotsRow}>
          {DOTS.map((i) => (
            <motion.span
              key={i}
              style={styles.dot}
              animate={{ scale: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

    </div>
  );
}

