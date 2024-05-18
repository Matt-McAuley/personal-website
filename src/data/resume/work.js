/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'All American Hamburger Drive-In',
    position: 'Cashier',
    url: 'https://www.allamericanhamburgerli.com/',
    startDate: '2023-06-01',
    summary: `All American is an extremely popular fast food resturaunt on Long Island. As a Cashier,
    I interracted with hundreds of customers in a given shift and worked with many coworkers to ensure
    an efficient operation. I assisted with food preparation, quality control, and customer service. I developed an ability
    to work effectively in a physically and mentally stressful environment while staying calm and communicating
    with other team members.`,
    highlights: [
      'Provided excellent customer service and performed necessary restaurant tasks efficiently.',
      'Maintained a calm mindset and personal organization under stress while assisting 300+ customers in a given day.',
      'Cooperated with 20+ coworkers throughout a shift to ensure smooth restaurant operation.',
    ],
  },
  // {
  //   name: 'Arthena',
  //   position: 'Co-founder & C.T.O.',
  //   url: 'https://arthena.com',
  //   startDate: '2014-01-01',
  //   endDate: '2022-01-01',
  //   summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
  //   <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
  //   We develop quantitative strategies to predict
  //   the value of fine art and build investment products.
  //   I ran a 20-person product and engineering org for 8 years. We were acquired by
  //   <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
  //   highlights: [
  //     'Built production, online, end-to-end optimized
  //      machine learning pipelines for time-series prediction.',
  //     'Designed micro-service architecture around: data collection, data integrity,
  //      feature engineering, research, strategy, backtesting, deployment, and reporting.',
  //     "Set and communicated team priorities that supported the broader organization's goals.
  //     Aligned strategy, processes, and decision-making across teams.",
  //     "Set clear expectations with individuals based on their level and role and aligned
  //     them to the broader organization's goals. Met regularly with individuals to discuss
  //     performance and development, and provided feedback and coaching.",
  //     'Developed the long-term technical vision and roadmap within, and often beyond, the
  //      scope of my teams. Evolved the roadmap to meet anticipated future requirements and
  //      infrastructure needs.',
  //   ],
  // },
];

export default work;
