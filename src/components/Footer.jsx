export default function Footer() {
  return (
    <div className="p-2 bg-gray-200">
      <p className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} Tobiloba. All rights reserved.
      </p>
    </div>
  );
}
