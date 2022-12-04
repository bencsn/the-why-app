interface CustomInputProps {
  id: string;
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  hint?: string;
}

export default function Input(props: CustomInputProps) {
  return (
    <div className={props.className}>
      {props.label && (
        <label className="mb-1 block text-sm opacity-90" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      {props.hint && <p className="mb-2 text-xs opacity-60">{props.hint}</p>}
      <input
        {...props.inputProps}
        className={
          "w-full rounded border px-2 py-1 dark:bg-darkgray dark:text-white " +
          props.inputProps?.className
        }
      />
    </div>
  );
}
