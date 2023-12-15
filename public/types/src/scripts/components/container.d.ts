import { ClassNames } from '../interfaces/class-names';
import { PassedElementType } from '../interfaces/passed-element-type';
export default class Container {
    element: HTMLElement;
    type: PassedElementType;
    classNames: ClassNames;
    isOpen: boolean;
    isFocussed: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    constructor({ element, type, classNames, }: {
        element: HTMLElement;
        type: PassedElementType;
        classNames: ClassNames;
    });
    addEventListeners(): void;
    removeEventListeners(): void;
    setActiveDescendant(activeDescendantID: string): void;
    removeActiveDescendant(): void;
    open(): void;
    close(): void;
    focus(): void;
    addFocusState(): void;
    removeFocusState(): void;
    enable(): void;
    disable(): void;
    wrap(element: HTMLSelectElement | HTMLInputElement | HTMLElement): void;
    unwrap(element: HTMLElement): void;
    addLoadingState(): void;
    removeLoadingState(): void;
    _onFocus(): void;
    _onBlur(): void;
}
//# sourceMappingURL=container.d.ts.map