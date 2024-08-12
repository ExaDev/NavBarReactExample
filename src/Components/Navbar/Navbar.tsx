import clsx from 'clsx';
import Logo from '../Logo';
import styles from './Navbar.module.scss';
import Navigation from './Navigation';

export const Navbar: React.FC = () => {
	return (
		<div className={clsx(styles.nav, styles.alt)} data-cy="Navbar">
			<Logo />
			<Navigation />
		</div>
	);
};
