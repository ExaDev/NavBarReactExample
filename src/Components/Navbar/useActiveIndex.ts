import { useState } from "react";

export const useActiveIndex = (index: number) => {
	const [activeIndex, setActiveIndexState] = useState<number>(index);
	const setActiveIndex = (index: number) => {
		setActiveIndexState(index);
	}
	return { activeIndex, setActiveIndex };
}