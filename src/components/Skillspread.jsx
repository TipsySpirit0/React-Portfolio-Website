export default function Skillspread({ title, list }) {
  return (
    <div className="font-inter">
      <h1 className="text-2xl mb-5 font-semibold text-primarytext dark:text-primarytext-dark">
        {title}
      </h1>
      <div className="flex flex-wrap gap-2">
        {list.map((item) => (
          <span
            key={item}
            className="py-2 px-4 text-base h-fit w-fit bg-primaryaccent dark:bg-primaryaccent-dark text-mainbuttontext dark:text-mainbuttontext-dark rounded-4xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
