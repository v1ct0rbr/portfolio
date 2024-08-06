//import { classes } from '~/utils/style';
//import styles from './icon.module.css';
//import { forwardRef } from 'react';
//import sprites from './icons.svg';
import { icons } from 'lucide-react';


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

export const Icon = ({ iconName, size = 24}) => {
  // Verifica se o ícone solicitado existe na biblioteca
  const IconComponent = icons[iconName];

  // Se o ícone não existir, exibe uma mensagem ou um ícone padrão
  if (!IconComponent) {
    console.error(`Ícone "${iconName}" não encontrado.`);
    return <div>Ícone não encontrado</div>;
  }

  return( 
    <IconComponent size={size} />
  );
};

