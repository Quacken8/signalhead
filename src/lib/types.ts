export type Subscriber<T> = (value: T, oldValue?: T) => void;
export type Unsubscriber = () => void;
export type Updater<T> = (value: T) => T;

export interface MinimalSignal<T> {
	subscribe(fn: Subscriber<T>): Unsubscriber;
}

export interface Signal<T> extends MinimalSignal<T> {
	get(): T | undefined;
	map<S>(fn: (value: T) => S): Signal<S>;
}

export interface WritableSignal<T> extends Signal<T> {
	set(value: T): void;
	update(fn: Updater<T>): void;
	toReadonly(): Signal<T>;
}

export type Component<Props, Context> = (
	props: Props,
) => Mountable<Context>;

export interface Mountable<Context> {
	mount(context: Context): () => void;
}
