export interface InputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export default function TextAreaInput({
  className,
  label,
  id,
  ...rest
}: InputProps) {
  return (
    <div className=" flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <textarea
        {...rest}
        id={id}
        rows={5}
        className="flex py-3 w-full shadow-none rounded-md px-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border border-gray-200 dark:border-none dark:bg-dark-ash-700 dark:text-white text-dark-ash-900 placeholder:text-gray-500 dark:placeholder:text-gray-500"
      />
    </div>
  );
}
