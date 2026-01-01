export const PrimaryBtn = ({ label = "Contact Sales" }) => {
  return (
    <button
      type="button"
      className="bg-btn hover:bg-btn-hover disabled:bg-btn-disabled flex items-center justify-center px-4.5 py-2.75 rounded-[44px] text-white font-medium text-md w-full"
    >
      {label}
    </button>
  );
};
