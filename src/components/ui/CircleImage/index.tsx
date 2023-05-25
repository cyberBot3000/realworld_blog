import React, { type ImgHTMLAttributes } from 'react';
import './style.scss';

export const CircleImage = (props: ImgHTMLAttributes<HTMLImageElement>) => {
	return (
		<div className="circle-image-wrapper">
			<img {...props} />
		</div>
	);
};

export default CircleImage;
