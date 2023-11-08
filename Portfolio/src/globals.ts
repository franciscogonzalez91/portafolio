'use strict';

export const isMobile = navigator.maxTouchPoints > 0;


export function querySelectorFrom(elements: Element[], selector: string){
    return [].filter.call(elements, (element: Element) => {
        return element.matches(selector)
    });
}