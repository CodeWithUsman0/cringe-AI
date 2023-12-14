import useMergedRefs from '@restart/hooks/useMergedRefs';
import useEventCallback from '@restart/hooks/useEventCallback';
import React, { useRef, useEffect, cloneElement } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export function useTransition({
  in: inProp,
  onTransition,
  initial = true
}) {
  const ref = useRef(null);
  const isInitialRef = useRef(true);
  const handleTransition = useEventCallback(onTransition);
  useEffect(() => {
    if (isInitialRef.current && !initial) {
      return;
    }
    handleTransition({
      in: inProp,
      element: ref.current,
      initial: isInitialRef.current
    });
  }, [inProp, initial, handleTransition]);
  useEffect(() => {
    isInitialRef.current = false;
    return () => {
      isInitialRef.current = true;
    };
  }, []);
  return ref;
}
/**
 * Adapts an imperative transition function to a subset of the RTG `<Transition>` component API.
 */
export default function ImperativeTransition({
  children,
  in: inProp,
  appear,
  onExited,
  onEntered,
  transition
}) {
  const ref = useTransition({
    in: !!inProp,
    initial: appear,
    onTransition: options => {
      const onFinish = () => {
        if (options.in) onEntered == null ? void 0 : onEntered(options.element, options.initial);else onExited == null ? void 0 : onExited(options.element);
      };
      Promise.resolve(transition(options)).then(onFinish);
    }
  });
  const combinedRef = useMergedRefs(ref, children.ref);
  return /*#__PURE__*/cloneElement(children, {
    ref: combinedRef
  });
}
export function renderTransition(Component, runTransition, props) {
  if (Component) {
    return /*#__PURE__*/_jsx(Component, Object.assign({}, props));
  }
  if (runTransition) {
    return /*#__PURE__*/_jsx(ImperativeTransition, Object.assign({}, props, {
      transition: runTransition
    }));
  }
  return props.children;
}