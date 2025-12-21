export default function Footer() {
  return (
    <div className="p-2 bg-mainbg dark:bg-mainbg-dark border border-t-gray-300 dark:border-t-gray-600">
      <p className="text-center text-secondarytext dark:text-secondarytext-dark">
        &copy; {new Date().getFullYear()} Tobiloba. All rights reserved.
      </p>
    </div>
  );
}
