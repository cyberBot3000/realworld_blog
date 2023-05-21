import ArticlesList from 'components/ArticleList';
import { Container } from 'components/ui/Container';

export const HomePage = () => {
	return (
		<div className="home-page">
			<Container>
				<ArticlesList />
			</Container>
		</div>
	);
};
