import React from 'react';
import { ArticleProps } from './types';
import { articleContext } from './hooks';
import { Author, Description, Favorites, Info, TagList, Title } from './components';
import './style.scss';

const Article = ({ article, header, afterHeader, body, footer }: ArticleProps) => {
	return (
		<div className="article">
			<articleContext.Provider value={article}>
				<header className="article__header">{header}</header>
				<div className="article__after-header">{afterHeader}</div>
				<main className="article__body">{body}</main>
				<footer className="article__footer">{footer}</footer>
			</articleContext.Provider>
		</div>
	);
};

Article.Author = Author;
Article.Description = Description;
Article.Info = Info;
Article.Favorites = Favorites;
Article.TagList = TagList;
Article.Title = Title;

export default Article;
