import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantStyles = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles = "flex items-center px-4 py-2 rounded-md font-light justify-center";
const sizeStyles = {
    small: "py-1 px-2",
    medium: "py-2 px-4",
    large: "py-4 px-6",
};

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={`
                ${variantStyles[props.variant]}
                ${defaultStyles}
                ${sizeStyles[props.size || "medium"]}
                ${props.fullWidth ? "w-full" : ""}
                ${props.loading ? "opacity-50" : ""}
            `}
        >
            {props.startIcon && (
                <div className="pr-2 flex items-center">
                    {props.startIcon}
                </div>
            )}

            <div className="flex items-center">
                {props.text}
            </div>

            {props.endIcon && (
                <div className="pl-2 flex items-center">
                    {props.endIcon}
                </div>
            )}
        </button>
    );
};

export default Button;
