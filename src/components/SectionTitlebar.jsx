export default function SectionTitlebar({ title, htext, subtitle }) {
  return (
    <div>
      <h1 className=" text-4xl lg:text-5xl mb-2 text-primarytext dark:text-primarytext-dark font-bold font-spacegrotesk">
        {title}
        <span className="text-primaryaccent dark:text-primaryaccent-dark">
          {htext}
        </span>
      </h1>
      <p className=" text-lg lg:text-xl text-secondarytext dark:text-secondarytext-dark mb-3">
        {subtitle}
      </p>
    </div>
  );
}
