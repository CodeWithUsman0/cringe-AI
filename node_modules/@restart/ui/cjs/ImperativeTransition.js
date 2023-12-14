"use strict";

exports.__esModule = true;
exports.useTransition = useTransition;
exports.default = ImperativeTransition;
exports.renderTransition = renderTransition;
var _useMergedRefs = _interopRequireDefault(require("@restart/hooks/useMergedRefs"));
var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function useTransition({
  in: inProp,
  onTransition,
  initial = true
}) {
  const ref = (0, _react.useRef)(null);
  const isInitialRef = (0, _react.useRef)(true);
  const handleTransition = (0, _useEventCallback.default)(onTransition);
  (0, _react.useEffect)(() => {
    if (isInitialRef.current && !initial) {
      return;
    }
    handleTransition({
      in: inProp,
      element: ref.current,
      initial: isInitialRef.current
    });
  }, [inProp, initial, handleTransition]);
  (0, _react.useEffect)(() => {
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
function ImperativeTransition({
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
  const combinedRef = (0, _useMergedRefs.default)(ref, children.ref);
  return /*#__PURE__*/(0, _react.cloneElement)(children, {
    ref: combinedRef
  });
}
function renderTransition(Component, runTransition, props) {
  if (Component) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, Object.assign({}, props));
  }
  if (runTransition) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ImperativeTransition, Object.assign({}, props, {
      transition: runTransition
    }));
  }
  return props.children;
}