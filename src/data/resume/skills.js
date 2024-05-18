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
    category: ['Data Science', 'Languages'],
  },
  {
    title: 'C',
    category: ['Back-end', 'Languages', 'Low-Level'],
  },
  {
    title: 'MicroPython',
    category: ['Languages', 'Low-Level'],
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
  '#6968b3', // Purple
  '#37b1f5', // Light Blue
  '#64cb7b', // Green
  // '#515dd4', // Dark Blue
  '#e47272', // Red
  // '#cc7b94', // Lighter Red
  // '#3896e2', // Turqoise-ish
  // '#c3423f', // Another Red
  '#d75858', // Another Red
  // '#747fff', // Another Blue
  '#40494e', // Gray
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
