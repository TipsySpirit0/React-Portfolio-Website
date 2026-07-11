export default function Skillspread({ title, list }) {
  return (
    <div className="font-inter mb-2 lg:mb-0">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 font-semibold text-primarytext dark:text-primarytext-dark">
        {title}
      </h1>
      <div className="flex flex-wrap gap-1 lg:gap-2">
        {list.map((item) => (
          <span
            key={item}
            className="py-2 px-4 text-sm lg:text-base h-fit w-fit bg-primaryaccent dark:bg-primaryaccent-dark text-mainbuttontext dark:text-mainbuttontext-dark rounded-4xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
