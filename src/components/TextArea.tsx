interface CustomTextAreaProps {
    id: string;
    label?: string;
    inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
    className?: string;
  }
  
  export default function TextArea(props: CustomTextAreaProps) {
    return (
      <div className={props.className}>
        {props.label && (
          <label
            className="mb-1 block text-sm opacity-60"
            htmlFor={props.id}
          >
            {props.label}
          </label>
        )}
        <textarea
          {...props.inputProps}
          className={
            "rounded border px-2 py-1 w-full dark:bg-darkgray dark:text-white " +
            props.inputProps?.className
          }
        />
      </div>
    );
  }
  