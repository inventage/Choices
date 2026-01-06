import { ClassNames } from '../interfaces/class-names';
import { PassedElementType } from '../interfaces/passed-element-type';
export default class Container {
    element: HTMLElement;
    type: PassedElementType;
    classNames: ClassNames;
    isOpen: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    constructor({ element, type, classNames, }: {
        element: HTMLElement;
        type: PassedElementType;
        classNames: ClassNames;
    });
    setActiveDescendant(activeDescendantID: string): void;
    removeActiveDescendant(): void;
    open(): void;
    close(): void;
    addFocusState(): void;
    removeFocusState(): void;
    addInvalidState(): void;
    removeInvalidState(): void;
    enable(): void;
    disable(): void;
    wrap(element: HTMLElement): void;
    unwrap(element: HTMLElement): void;
    addLoadingState(): void;
    removeLoadingState(): void;
}
