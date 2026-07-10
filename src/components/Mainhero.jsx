export default function Mainhero() {
  return (
    <div className="text-secondarytext dark:text-secondarytext-dark font-inter text-center flex flex-col gap-4 lg:gap-7">
      <div>
        <span className="text-xl lg:text-2xl">Hi, I'm</span>
        <h1 className="font-spacegrotesk text-5xl lg:text-8xl font-bold text-primaryaccent dark:text-primaryaccent-dark">
          Onabanjo
          <br />
          Oluwatobiloba
        </h1>
      </div>
      <p className="text-xl lg:text-2xl">
        A passionate Frontend developer turning ideas into modern, responsive,
        and user-friendly websites.
      </p>
    </div>
  );
}
