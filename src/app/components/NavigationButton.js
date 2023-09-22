import Link from "next/link";

const NavigationButton = ({ navTo, buttonText }) => {
  return (
    <div>
      <Link
        href={navTo}
        className="py-2 px-4 bg-green-400 text-white font-semibold rounded hover:bg-primary-600"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default NavigationButton;
