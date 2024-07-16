import React from "react";

interface CustomInputProps {
  label?: string;
  type: "text" | "email" | "number" | "password" | "select" | "name" | "date";
  id: string;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  placeholder?: string;
  options?: { value: string; label: string }[];
  error?: string;
  showPasswordToggle?: boolean;
  readOnly?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  error,
  showPasswordToggle,
  readOnly
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  return (
    <div className={`mb-3 ${error ? "has-error" : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={handleSelectChange}
          className="block w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:border-green-500 focus:outline-none"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type === "password" && showPasswordToggle ? "text" : type}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          readOnly={readOnly}
          className="block w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:border-green-500 focus:outline-none"
        />
      )}
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
};

export default CustomInput;
