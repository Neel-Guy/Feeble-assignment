export const OutlinedBtn = ({ children }) => {
  return (
    <button
      type="button"
      className="disabled:bg-btn-disabled border border-[#6C788F] text-[#1D2026] flex items-center justify-center px-4.5 py-2.75 rounded-[44px] font-medium text-md w-full"
    >
      {children}
    </button>
  );
};
