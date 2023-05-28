import { Flex } from 'components/ui/Flex';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { notOnlySpaces } from '../model';
import { ArticleFormValues } from '../types';

export const Taglist = () => {
	const { register, control } = useFormContext<ArticleFormValues>();
	const {
		fields: tags,
		remove,
		append,
	} = useFieldArray<ArticleFormValues>({
		control,
		name: 'tagList',
	});
	return (
		<div className="article-form-card__taglist">
			<Flex direction="c" className="article-form-card__tags">
				{tags.map((tag, index) => (
					<div className="article-form-card__tag" key={tag.id}>
						<input
							type="text"
							className="article-form-card__text-input"
							placeholder="Tag"
							{...register(`tagList.${index}.value` as const, {
								validate: {
									notOnlySpaces,
								},
								required: "tag content is required. if don't need tag just delete it",
							})}
						/>
						<button
							type="button"
							className="article-form-card__action-btn article-form-card__action-btn_warning article-form-card__tag-btn"
							onClick={() => remove(index)}
						>
							delete
						</button>
					</div>
				))}
			</Flex>
			<button
				type="button"
				className="article-form-card__action-btn article-form-card__action-btn_default article-form-card__add-tag-btn"
				onClick={() => {
					append({ value: '' });
				}}
			>
				Add tag
			</button>
		</div>
	);
};

export default Taglist;
