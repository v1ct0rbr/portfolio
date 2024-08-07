//import { classes } from '~/utils/style';
//import { forwardRef } from 'react';
//import sprites from './icons.svg';
import { icons } from 'lucide-react';
import { classes } from '~/utils/style';

/* export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size || 24}
      height={size || 24}
      {...rest}
    >
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
}); */

export const Icon = ({ icon, className, size = 24, ...rest }) => {
  // Verifica se o ícone solicitado existe na biblioteca
  const IconComponent = icons[icon];

  // Se o ícone não existir, exibe uma mensagem ou um ícone padrão
  if (!IconComponent) {
    console.error(`Ícone "${icon}" não encontrado.`);
    return <div>Ícone não encontrado</div>;
  }

  return <IconComponent size={size} className={classes(className)} {...rest} />;
};
