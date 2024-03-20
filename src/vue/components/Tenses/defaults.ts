export type Props = {
	title: string;
	position: number;
	size?: number;
	width?: number;
	gap?: number;
};

export const GAP = 4;
export const SIZE = 20;
export const WIDTH = 2;

export const DEFAULTS = {
	size: SIZE,
	gap: GAP,
	width: WIDTH
};

export function calcRadius(props: Omit<Props, 'title'>) {
	return props.size ? props.size / 3 : 0;
}
