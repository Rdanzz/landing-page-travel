const Navigation = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <li>
      <button
        className="flex justify-center items-center flex-col gap-2"
        onClick={onClick}
      >
        <Icon size={28} className={isActive ? "text-black" : "text-gray-500"} />
        <span
          className={isActive ? "text-black font-semibold" : "text-gray-500"}
        >
          {label}
        </span>
      </button>
    </li>
  );
};

export default Navigation;
