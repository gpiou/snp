'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class HydrationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if it's a hydration error
    const isHydrationError = 
      error.message.includes('Hydration') ||
      error.message.includes('hydration') ||
      error.message.includes('server rendered HTML') ||
      error.message.includes('client properties');

    if (isHydrationError) {
      console.warn('Hydration error caught and suppressed:', error.message);
      return { hasError: false }; // Don't show error UI for hydration errors
    }

    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const isHydrationError = 
      error.message.includes('Hydration') ||
      error.message.includes('hydration') ||
      error.message.includes('server rendered HTML') ||
      error.message.includes('client properties');

    if (isHydrationError) {
      // Log hydration errors but don't crash the app
      console.warn('Hydration mismatch detected (likely browser extension):', {
        error: error.message,
        componentStack: errorInfo.componentStack
      });
      
      // Reset error state to continue rendering
      this.setState({ hasError: false });
      return;
    }

    // Log other errors normally
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-800 font-semibold mb-2">Something went wrong</h2>
          <p className="text-red-600 text-sm">{this.state.error.message}</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default HydrationErrorBoundary;
