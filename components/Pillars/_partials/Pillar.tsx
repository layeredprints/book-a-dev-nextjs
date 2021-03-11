import SVG from 'react-inlinesvg';
import { toLower, forEach, map } from 'lodash';
import { htmlToText } from 'html-to-text';
import Title from '../../Title';

const Pillar = ({
  title,
  content,
} : {
  title: string,
  content: any,
}) => (
  <article className="flex flex-col items-center mx-12 w-32">
    <img src={`/pillars/${toLower(title)}.svg`} alt={`Illustration of ${title}`} />
    <Title
      heading="h4"
      text={title}
    />
    {htmlToText(content)}
  </article>
);

export default Pillar;
