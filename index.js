var titles = require('./bullshit-job-titles.json');

/**
 * All of the possible job titles
 *
 * <pre>
 * {
 *   first: [
 *     'some first part',
 *     '...'
 *   ],
 *   last: [
 *     'some second part',
 *     '...'
 *   ]
 * }
 * </pre>
 *
 * @return {object} the same as 'bullshit-job-titles.json'
 */
function all() {
  return titles;
}

/**
 * Get a random job title
 * @return {string} a random great job title
 */
function random() {
  return randomParts().join(' ');
}

/**
 * Get a random job title and its acronym in the form of
 *
 * <pre>
 * {
 *   title: 'Some Cool Title',
 *   acronym: 'SCT'
 * }
 * </pre>
 *
 * @return {object} the job title and its acronym
 */
function randomWithAcronym() {
  var jobtitle = random();
  var matches = jobtitle.match(/\b(\w)/g);
  var jobacronym = matches.join('');
  return {
    title: jobtitle,
    acronym: jobacronym
  };
}

/**
 * Get random job title, split in parts.
 * @return {array} the parts of the job title, in order
 */
function randomParts() {
  var firstIndex = Math.floor(Math.random() * titles.first.length);
  var lastIndex = Math.floor(Math.random() * titles.last.length);
  return [
    titles.first[firstIndex],
    titles.last[lastIndex]
  ];
}

module.exports = {
  all: all,
  random: random,
  randomWithAcronym: randomWithAcronym,
  randomParts: randomParts
}
