import React, { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label
      htmlFor="search"
      className={`relative flex w-full max-w-[435px] items-center gap-4 rounded-[4px] bg-white px-[16px] ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${className}`}
    >
      <i className="ri-search-line text-[22px]"></i>
      <Input
        id="search"
        type="search"
        placeholder={placeholder}
        className="appearance-none bg-transparent px-0"
        value={value}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};

export default SearchInput;
