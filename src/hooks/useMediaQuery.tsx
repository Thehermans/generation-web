import { useState, useEffect } from 'react';

/**
 * Custom hook to track media query changes.
 * @param {string} query - The media query string to test (e.g., '(max-width: 768px)')
 * @returns {boolean} - Returns `true` if the query matches, otherwise `false`.
 */
export function useMediaQuery(query: string): boolean {
  // State to store whether the media query matches or not
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Create a MediaQueryList object for the given query
    const mediaQueryList = window.matchMedia(query);

    // Define a handler function for changes in media query match
    const handleChange = () => {
      setMatches(mediaQueryList.matches); // Update the state based on the query match
    };

    // Initial check when the component mounts
    handleChange();

    // Add an event listener to handle changes
    mediaQueryList.addEventListener('change', handleChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]); // Re-run the effect if the query changes

  return matches; // Return the current match state
}
