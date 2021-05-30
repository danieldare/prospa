import {
    InputHTMLAttributes,
    forwardRef,
    ChangeEvent,
    ReactNode,
    useCallback,
    useMemo,
    useState,
} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
    width: 100%;
    position: relative;
    display: inline-block;
`;

const Label = styled.label<{ shrink: boolean | undefined }>`
    pointer-events: none;
    color: ${({ theme }) => theme && theme.colors?.skyBlueShade};
    white-space: nowrap;
    font-weight: 500;
    position: absolute;
    top: 0px;
    left: 10px;
    transition: transform 0.2s ease-out 0ms;
    transform-origin: top left;
    z-index: 1;
    font-size: 1.2rem;

    transform: translateY(calc(100% + 1.5rem));

    ${Div}:focus-within & {
        transform: translateY(20px) scale(0.85);
        color: ${({ theme }) => theme && theme.colors?.pinkShade};
    }

    transform: ${({ shrink }) => shrink && 'translateY(0) scale(0.85)'};
`;

const InputFieldWrapperDiv = styled.div<{
    shrink: boolean;
    error: boolean;
}>`
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 1.4rem;

    ::before,
    ::after {
        content: '';
        width: 100%;
        height: 2px;

        position: absolute;
        bottom: 0;
        left: 0%;
    }

    ::before {
        background-color: #e0e2ec;
    }

    ::after {
        background: linear-gradient(to left, #00d2ff, #7e51ff, #fa4a84);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.25s;

        ${Div}:focus-within & {
            transform: scaleX(1);
        }

        ${({ shrink, error }) => (shrink || error) && 'transform: scaleX(1);'}
    }
`;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: ReactNode;
}

const InputField = styled.input<IInputProps>`
    background-color: ${({ theme }) => theme.colors?.grey01};
    outline: none;
    font-size: 1.4rem;
    appearance: none;
    box-sizing: border-box;
    height: 4.4rem;
    width: 100%;
    padding: 1.1rem 1.1rem 0 1.1rem;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    box-sizing: border-box;
    font-weight: 600;

    &::-ms-clear {
        display: none;
    }

    &::-ms-expand {
        display: none;
    }

    &:-moz-ui-invalid {
        box-shadow: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 5000s;
        -webkit-text-fill-color: #000 !important;
    }

    &:disabled {
        background-color: hsl(0, 0%, 95%);
    }
`;

export const ErrorP = styled(motion.p)`
    margin: 0.5rem 0 0 0;
    color: ${({ theme }) => theme.colors?.pinkShade};
    font-size: 1.2rem;
    letter-spacing: -0.01rem;
    font-weight: 600;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * ID of an input
     *
     * It is also used for id of label & error text. Should be unique within a page.
     */
    id: string;

    className?: string;

    name?: string;

    /**
     * Input type
     *
     * @example "email"
     *
     * @example "password"
     *
     * @default "text"
     */
    type?: string;

    label?: string;

    required?: boolean;

    /**
     * Error for the input.
     *
     * @example
     * <Input error="Invalid value." />
     *
     * @example
     * <Input error={<span>You should enter <b>valid</b> phone number.</span>}
     */
    error?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            name,
            type = 'text',
            label,
            required,
            value,
            error,
            className,
            onChange,
            ...remainingProps
        },
        ref,
    ) => {
        const labelId = label ? `${id}-label` : undefined;
        const errorId = error ? `${id}-error-text` : undefined;

        const [isFilled, setIsFilled] = useState(!!value);

        const handleChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                onChange?.(event);
                setIsFilled(!!event.target.value);
            },
            [onChange],
        );

        const shrink = useMemo(() => (value ? !!value : isFilled), [isFilled, value]);

        return (
            <Div className={className}>
                {label && (
                    <Label id={labelId} htmlFor={id} shrink={shrink}>
                        {`${label}${required ? '*' : ''}`}
                    </Label>
                )}
                <InputFieldWrapperDiv shrink={shrink} error={!!error}>
                    <InputField
                        id={id}
                        ref={ref}
                        name={name}
                        type={type}
                        value={value}
                        required={required}
                        aria-invalid={!!error}
                        aria-describedby={errorId}
                        onChange={handleChange}
                        error={error}
                        {...remainingProps}
                    />
                </InputFieldWrapperDiv>
                {error && (
                    <ErrorP
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={{
                            pageInitial: {
                                opacity: 1,
                                x: 0,
                                y: -5,
                            },
                            pageAnimate: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                            },
                            pageExit: {
                                opacity: 0,
                            },
                        }}
                        id={errorId}
                    >
                        {error}
                    </ErrorP>
                )}
            </Div>
        );
    },
);

Input.displayName = 'input';

export { Input };
