const skills = [
  {
    title: 'Javascript',
    category: ['Front-end', 'Languages'],
  },
  {
    title: 'React',
    category: ['Front-end'],
  },
  {
    title: 'Bash',
    category: ['Tools'],
  },
  {
    title: 'Flask',
    category: ['Back-end'],
  },
  {
    title: 'Google Cloud',
    category: ['Back-end'],
  },
  {
    title: 'Docker',
    category: ['Back-end'],
  },
  {
    title: 'Numpy',
    category: ['Data Science'],
  },
  {
    title: 'Typescript',
    category: ['Front-end', 'Languages'],
  },
  {
    title: 'HTML + CSS',
    category: ['Front-end', 'Languages'],
  },
  {
    title: 'Python',
    category: ['Languages', 'Back-end', 'Data Science'],
  },
  {
    title: 'Pandas',
    category: ['Data Science'],
  },
  {
    title: 'Matplotlib',
    category: ['Data Science'],
  },
  {
    title: 'Scikit-Learn',
    category: ['Data Science'],
  },
  {
    title: 'sqlite3',
    category: ['Back-end'],
  },
  {
    title: 'SQLAlchemy',
    category: ['Back-end'],
  },
  {
    title: 'Java',
    category: ['Back-end', 'Languages'],
  },
  {
    title: 'OCaml',
    category: ['Back-end', 'Data Science', 'Languages'],
  },
  {
    title: 'C',
    category: ['Back-end', 'Languages', 'Low-Level'],
  },
  {
    title: 'MicroPython',
    category: ['Back-end', 'Languages', 'Low-Level'],
  },
  {
    title: 'Git',
    category: ['Tools'],
  },
  {
    title: 'GitHub',
    category: ['Tools'],
  },
  {
    title: 'VSCode',
    category: ['Tools'],
  },
  {
    title: 'IntelliJ',
    category: ['Tools'],
  },
  {
    title: 'MCUXpresso',
    category: ['Tools'],
  },
  {
    title: 'Stata',
    category: ['Tools'],
  },
  {
    title: 'Verilog',
    category: ['Low-Level', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
