import { ReactNode } from 'react';

export interface ArticleInfoProps {
	header?: ReactNode;
	footer?: ReactNode;
}

export const Info = ({ header, footer }: ArticleInfoProps) => {
	return (
		<div className="article__info">
			<div className="article__info-header">{header}</div>
			<div className="article__info-footer">{footer}</div>
		</div>
	);
};
