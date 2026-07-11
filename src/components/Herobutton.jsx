export default function Herobutton({ link, style, text }) {
  return (
    <a
      className={`border-2 p-2 lg:p-4 rounded-lg font-inter text-base lg:text-lg border-primaryaccent dark:border-primaryaccent-dark ${style}`}
      href={`#${link}`}
    >
      {text}
    </a>
  );
}
