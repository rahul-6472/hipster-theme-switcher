export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        This app was built as part of a frontend developer assessment to demonstrate dynamic theme switching,
        API integration, responsive design, and modular architecture using React and TypeScript.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        It showcases three unique themes, supports routing between multiple pages, and uses Tailwind CSS for a clean
        UI. Feel free to explore each theme from the dropdown in the header.
      </p>
    </div>
  )
}