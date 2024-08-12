import NavigationItem from "./NavigationItem";
import NavigationList from "./NavigationList";
import { navigationRoutes } from "./navigationRoutes";
import { useActiveIndex } from "./useActiveIndex";
const Navigation: React.FC = () => {
	const { activeIndex, setActiveIndex } = useActiveIndex(0);
	const onRouteChange = (index: number) => () => {
		setActiveIndex(index);
	}
	return (
		<NavigationList>
			{navigationRoutes.map((route, index) => (
				<NavigationItem key={route.id} onClick={onRouteChange(index)} active={activeIndex === index} to={route.to} title={route.title} />
			))}
		</NavigationList>
	);
};

export default Navigation;
