import { Component, type ReactNode } from 'react';

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Isolates a failure (e.g. no WebGL) so the rest of the UI stays usable. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('GlobeView failed to render:', error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
