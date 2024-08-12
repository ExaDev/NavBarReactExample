import clsx from "clsx";
import styles from "./Navbar.module.scss";

type NavigationItemProps = {
	active?: boolean;
	to: string;
	title: string;
	onClick? : () => void;
};
const NavigationItem: React.FC<NavigationItemProps> = ({ active, title, to, onClick }) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		if (onClick) {
			onClick();
		}
	}
	return (
		<li className={clsx(active && styles.active)}>
			<a href={to} onClick={handleClick}>{title}</a>
		</li>
	);
};

export default NavigationItem;
