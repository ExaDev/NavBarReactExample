import clsx from 'clsx';
import layoutStyles from './layout.module.scss';
const Logo: React.FC = () => {
	return (
		<h1 data-cy="Logo" className={clsx(layoutStyles.noMargin)}>
			Logo
		</h1>
	);
};

export default Logo;
