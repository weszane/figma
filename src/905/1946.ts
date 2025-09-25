import { jsx } from 'react/jsx-runtime'

// Original function: $$r0
// Original export: t

/**
 * ChevronContainer component that wraps an OriginalComponent in a div with a specific className.
 * @param providedClassName - The className to pass to the OriginalComponent.
 * @param OriginalComponent - The React component to render inside the container.
 * @returns A JSX element containing the wrapped component.
 */
interface ChevronContainerProps {
  providedClassName: string;
  OriginalComponent: React.ComponentType<{ providedClassName: string }>;
}

export const ChevronContainer: React.FC<ChevronContainerProps> = ({
  providedClassName,
  OriginalComponent,
}) => {
  return jsx('div', {
    className: 'base_chevron_override--chevronContainer--oCR2q',
    children: jsx(OriginalComponent, {
      providedClassName,
    }),
  });
};

// Original export alias: t
export const t = ChevronContainer;
