import React from 'react';
import { ArticleProps } from './types';
import { articleContext } from './hooks';
import { Author, Body, DeleteBtn, Description, Favorites, Info, TagList, Title, UpdateBtn } from './components';
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
Article.Body = Body;
Article.DeleteBtn = DeleteBtn;
Article.UpdateBtn = UpdateBtn;

export default Article;
