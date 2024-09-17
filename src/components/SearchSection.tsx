import { Input } from "@/components/ui/input";

export default function SearchSection({
  searchTerm,
  setSearchTerm,
  placeholder,
}: {
  searchTerm: string;
  placeholder: string;
  setSearchTerm: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px] sm:flex-row mt-[36px] sm:mt-[68px] w-full sm:w-auto max-w-[351px] sm:max-w-[1216px]">
      <div className="relative">
        <Input
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-primary-300 !ring-0 min-w-[280px] rounded-full"
        />
        <i className="ri-search-line absolute end-6 top-1/2 transform -translate-y-1/2 text-primary-300 text-[20px]"></i>
      </div>
    </div>
  );
}
