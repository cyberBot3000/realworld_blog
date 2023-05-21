import { useArticleContext } from '../hooks';

export const Title = () => {
	const { title } = useArticleContext();
	return <div className="article__title">{title}</div>;
};
