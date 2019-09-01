import { convertMarkdownToGraphData } from '../../graph-generator';
import { getFirstMarkdownInDirectory } from '../../../fs/get-first-markdown-file-in-directory';

const storyFile = getFirstMarkdownInDirectory(`${__dirname}`);

if (storyFile) {
  const targetDirectory = `${process.cwd()}/src/app/data`;
  convertMarkdownToGraphData(storyFile, targetDirectory);
}
