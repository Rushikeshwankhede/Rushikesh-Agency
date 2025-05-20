
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    // Here you could log errors to an error reporting service
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
          <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-xl">
            <h2 className="text-2xl font-bold text-agency-dark mb-4">Something went wrong</h2>
            <p className="text-agency-grey mb-6">
              We're sorry, but there was an error loading this part of the page.
            </p>
            <p className="text-sm text-agency-grey mb-6 p-4 bg-gray-100 rounded overflow-auto">
              {this.state.error?.message}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary w-full text-center"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
