const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-305px)] bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Gradient Spinning Circle */}
        <div
          aria-label="Loading..."
          role="status"
          className="relative flex items-center justify-center"
        >
          <div className="h-20 w-20 rounded-full border-4 border-dashed border-blue-500 border-t-transparent animate-spin"></div>
          <div className="absolute h-10 w-10 bg-blue-500 rounded-full"></div>
        </div>

        {/* Loading Text */}
        <span className="text-2xl font-semibold text-gray-600 dark:text-gray-300 tracking-wider">
          Please wait...
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
