import { convertMarkdownToGraphData } from '../../graph-generator';
import { getFilesInDirectory } from '../../../fs';

const storyFile = getFilesInDirectory(`${__dirname}`, (path): boolean =>
  path.endsWith('.md'),
).shift();

if (storyFile) {
  const targetDirectory = `${process.cwd()}/src/app/data`;
  convertMarkdownToGraphData(storyFile, targetDirectory);
}
