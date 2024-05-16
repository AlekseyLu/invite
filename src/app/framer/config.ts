export const textAnimationRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
    },
  },
};

export const textAnimationLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
    },
  },
};

export const background = {
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  hidden: { opacity: 0 },
};

export const listContainer = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

export const itemsList = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      duration: 1,
    },
  }),
  hidden: { opacity: 0, x: -100 },
};
