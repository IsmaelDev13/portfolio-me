const pageZoom = {
  initial: {
    opacity: 1,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 1,
    scale: 0.95,
  },
};

const errorAnim = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

export { pageZoom, errorAnim };
