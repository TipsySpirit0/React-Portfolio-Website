function NavOpenButton({ openNav, isOpen }) {
  return (
    <button
      className="lg:hidden text-3xl lg:text-xl text-primarytext dark:text-primarytext-dark"
      onClick={openNav}
    >
      {isOpen ? "✖" : "☰"}
    </button>
  );
}

export default NavOpenButton