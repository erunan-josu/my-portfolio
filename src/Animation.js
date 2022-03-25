export const sectionAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
}
export const titleAnimLeft = {
  hidden: { x: -800 },
  show: {
    x: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}
export const titleAnimRight = {
  hidden: { x: 800 },
  show: {
    x: -100,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

export const mobileTitleAnimRight = {
  hidden: { x: 800 },
  show: {
    x: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.75 },
  },
}
