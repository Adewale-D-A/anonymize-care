export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function TextInput({
  className,
  label,
  id,
  ...rest
}: InputProps) {
  return (
    <div className=" flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        id={id}
        className="flex h-10 w-full shadow-none rounded-md border  px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-dark-ash-700 border-none text-white placeholder:text-dark-ash-500"
      />
    </div>
  );
}
