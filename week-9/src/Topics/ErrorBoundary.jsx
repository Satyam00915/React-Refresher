import React from "react";

const ErrorBoundaryCard = () => {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <Card2 />
    </div>
  );
};

const Card1 = () => {
    throw new Error("Something went wrong");
  return (
    <div style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}>
      Hi there
    </div>
  );
};

const Card2 = () => {
  return (
    <div style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}>
      Hello
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}>
          Something went wrong
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryCard;
