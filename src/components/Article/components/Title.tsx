import { useArticleContext } from '../hooks';
import { PropsWithWordCut } from '../types';
import { getCuttedString } from '../utils';

export const Title = ({ maxViewLength, breakElement = '...' }: PropsWithWordCut) => {
	const { title } = useArticleContext();
	return <div className="article__title">{getCuttedString(title || '', maxViewLength, breakElement)}</div>;
};
