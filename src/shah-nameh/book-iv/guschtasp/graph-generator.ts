import { readAllLinesInFile } from '../../../tools/fs/read-all-lines-in-file';

const storyFile = `${__dirname}/story.fr.md`;
const story = readAllLinesInFile(storyFile);
// eslint-disable-next-line no-console
console.log(story);
