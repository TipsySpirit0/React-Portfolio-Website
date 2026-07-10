export default function Herobutton({ link, style, text }) {
  return (
    <a
      className={`border-2 p-4 rounded-lg font-inter text-lg border-primaryaccent dark:border-primaryaccent-dark ${style}`}
      href={`#${link}`}
    >
      {text}
    </a>
  );
}
