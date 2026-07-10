export default function Skillspread({ title, list }) {
  return (
    <div>
      <h1 className="text-xl mb-3">{title}</h1>
      {list.map((item) => (
        <span
          key={item}
          className="p-3 mr-1 text-sm text-primarytext bg-secondaryaccent dark:bg-secondaryaccent-dark rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
