import React from 'react';
import { TransitionComponent, TransitionProps } from './types';
export interface TransitionFunctionOptions {
    in: boolean;
    element: HTMLElement;
    initial: boolean;
}
export type TransitionHandler = (options: TransitionFunctionOptions) => void | Promise<void>;
export interface UseTransitionOptions {
    in: boolean;
    onTransition: TransitionHandler;
    initial?: boolean;
}
export declare function useTransition({ in: inProp, onTransition, initial, }: UseTransitionOptions): React.RefObject<HTMLElement>;
export interface ImperativeTransitionProps extends TransitionProps {
    transition: TransitionHandler;
}
/**
 * Adapts an imperative transition function to a subset of the RTG `<Transition>` component API.
 */
export default function ImperativeTransition({ children, in: inProp, appear, onExited, onEntered, transition, }: ImperativeTransitionProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare function renderTransition(Component: TransitionComponent | undefined, runTransition: TransitionHandler | undefined, props: TransitionProps): JSX.Element;
