import s from './TemplateName.module.scss';

interface TemplateNameProps {
}

export const TemplateName = ({}: TemplateNameProps) => {
	
	return (
		<div className={s.templateName}>
			TemplateName Component
		</div>
	);
};
