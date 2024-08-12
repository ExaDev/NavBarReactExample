import { PropsWithChildren } from "react";
import styles from "./Navbar.module.scss";

type NavigationListProps = PropsWithChildren;
const NavigationList: React.FC<NavigationListProps> = ({ children }) => {
	return (
		<ul className={[styles.navigationList].join(" ")} data-cy="NavigationList">
			{children}
		</ul>
	);
};

export default NavigationList;
